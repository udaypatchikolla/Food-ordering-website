import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { ArrowLeft, CreditCard, Landmark, Smartphone } from 'lucide-react';

type PaymentMethod = 'credit_card' | 'debit_card' | 'upi';

const CheckoutPage: React.FC = () => {
  const { cartItems, cartTotal, placeOrder } = useCart();
  const { isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [fullName, setFullName] = useState(currentUser?.name || '');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('credit_card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [upiId, setUpiId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  if (!isAuthenticated || cartItems.length === 0) {
    navigate('/cart');
    return null;
  }
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!fullName.trim()) newErrors.fullName = 'Name is required';
    if (!address.trim()) newErrors.address = 'Address is required';
    if (!city.trim()) newErrors.city = 'City is required';
    if (!pincode.trim()) newErrors.pincode = 'Pincode is required';
    
    if (paymentMethod === 'credit_card' || paymentMethod === 'debit_card') {
      if (!cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!expiryDate.trim()) newErrors.expiryDate = 'Expiry date is required';
      if (!cvv.trim()) newErrors.cvv = 'CVV is required';
    } else if (paymentMethod === 'upi') {
      if (!upiId.trim()) newErrors.upiId = 'UPI ID is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    const deliveryAddress = `${address}, ${city} - ${pincode}`;
    const orderId = placeOrder(deliveryAddress, paymentMethod);
    
    navigate(`/order-confirmation/${orderId}`);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => navigate('/cart')}
        className="inline-flex items-center text-red-600 hover:text-red-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Cart
      </button>
      
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-semibold mb-4">Delivery Address</h2>
              <div className="space-y-4 mb-8">
                <Input 
                  label="Full Name"
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  error={errors.fullName}
                />
                <Input 
                  label="Address"
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  error={errors.address}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    label="City"
                    type="text"
                    id="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    error={errors.city}
                  />
                  <Input 
                    label="Pincode"
                    type="text"
                    id="pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    error={errors.pincode}
                  />
                </div>
              </div>
              
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
              <div className="space-y-4 mb-8">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      id="credit_card" 
                      value="credit_card" 
                      checked={paymentMethod === 'credit_card'} 
                      onChange={() => setPaymentMethod('credit_card')}
                      className="h-4 w-4 text-red-600 focus:ring-red-500"
                    />
                    <label htmlFor="credit_card" className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-gray-500" />
                      Credit Card
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      id="debit_card" 
                      value="debit_card" 
                      checked={paymentMethod === 'debit_card'} 
                      onChange={() => setPaymentMethod('debit_card')}
                      className="h-4 w-4 text-red-600 focus:ring-red-500"
                    />
                    <label htmlFor="debit_card" className="flex items-center">
                      <Landmark className="h-5 w-5 mr-2 text-gray-500" />
                      Debit Card
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      id="upi" 
                      value="upi" 
                      checked={paymentMethod === 'upi'} 
                      onChange={() => setPaymentMethod('upi')}
                      className="h-4 w-4 text-red-600 focus:ring-red-500"
                    />
                    <label htmlFor="upi" className="flex items-center">
                      <Smartphone className="h-5 w-5 mr-2 text-gray-500" />
                      UPI
                    </label>
                  </div>
                </div>
                
                {(paymentMethod === 'credit_card' || paymentMethod === 'debit_card') && (
                  <div className="border-t pt-4 mt-4">
                    <Input 
                      label="Card Number"
                      type="text"
                      id="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      error={errors.cardNumber}
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Input 
                        label="Expiry Date"
                        type="text"
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        error={errors.expiryDate}
                      />
                      <Input 
                        label="CVV"
                        type="password"
                        id="cvv"
                        placeholder="123"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        error={errors.cvv}
                      />
                    </div>
                  </div>
                )}
                
                {paymentMethod === 'upi' && (
                  <div className="border-t pt-4 mt-4">
                    <Input 
                      label="UPI ID"
                      type="text"
                      id="upiId"
                      placeholder="username@upi"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      error={errors.upiId}
                    />
                  </div>
                )}
              </div>
              
              <Button type="submit" className="w-full">Place Order</Button>
            </form>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <ul className="divide-y mb-4">
              {cartItems.map(item => (
                <li key={item.dish.id} className="py-3 flex justify-between">
                  <div>
                    <p className="font-medium">{item.dish.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">₹{item.dish.price * item.quantity}</p>
                </li>
              ))}
            </ul>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>₹{cartTotal}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee</span>
                <span>₹40</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span>₹{Math.round(cartTotal * 0.05)}</span>
              </div>
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{cartTotal + 40 + Math.round(cartTotal * 0.05)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
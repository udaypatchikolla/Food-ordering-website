import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  if (!isAuthenticated) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is waiting!</h2>
          <p className="text-gray-600 mb-6">Please login to view your cart and place orders.</p>
          <Link to="/login">
            <Button className="w-full">Login to Continue</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
          <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add items to your cart to get started with your order.</p>
          <Link to="/dishes">
            <Button className="w-full">Browse Dishes</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Items ({cartItems.length})</h2>
            </div>
            
            <ul className="divide-y">
              {cartItems.map(item => (
                <li key={item.dish.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                  <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md">
                    <img 
                      src={item.dish.image} 
                      alt={item.dish.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="sm:ml-6 flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium">{item.dish.name}</h3>
                      <p className="font-semibold">₹{item.dish.price * item.quantity}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-1">{item.dish.description}</p>
                    <div className="mt-2">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        item.dish.isVeg ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {item.dish.isVeg ? 'Veg' : 'Non-Veg'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4 sm:mt-0 sm:ml-6">
                    <div className="flex items-center border rounded-md">
                      <button 
                        className="px-3 py-1 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button 
                        className="px-3 py-1 hover:bg-gray-100"
                        onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button 
                      className="ml-4 text-red-600 hover:text-red-800"
                      onClick={() => removeFromCart(item.dish.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            
            <div className="space-y-4">
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
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{cartTotal + 40 + Math.round(cartTotal * 0.05)}</span>
                </div>
              </div>
            </div>
            
            <Button 
              className="w-full mt-6 flex items-center justify-center"
              onClick={handleCheckout}
            >
              Proceed to Checkout
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
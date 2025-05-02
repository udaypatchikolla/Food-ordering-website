import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle, Home, ShoppingBag } from 'lucide-react';
import Button from '../components/ui/Button';

const OrderConfirmationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { orders } = useCart();
  const navigate = useNavigate();
  
  const order = orders.find(o => o.id === id);
  
  useEffect(() => {
    // If order not found, redirect to home
    if (!order) {
      navigate('/');
    }
  }, [order, navigate]);
  
  if (!order) return null;
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Thank you for your order. Your food is being prepared and will be delivered soon.
        </p>
        
        <div className="border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Order Details</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-600">Order ID:</span>
              <span className="font-medium">{order.id}</span>
            </div>
            
            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-600">Delivery Address:</span>
              <span className="font-medium">{order.deliveryAddress}</span>
            </div>
            
            <div className="flex justify-between border-b pb-3">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-medium capitalize">{order.paymentMethod.replace('_', ' ')}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-bold">₹{order.total}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link to="/">
            <Button variant="outline" className="w-full flex items-center justify-center">
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
          </Link>
          <Link to="/dishes">
            <Button className="w-full flex items-center justify-center">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Order More Food
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
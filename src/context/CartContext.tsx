import React, { createContext, useState, useContext, useEffect } from 'react';
import { Dish, CartItem, Order } from '../types';
import { useAuth } from './AuthContext';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (dish: Dish) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  orders: Order[];
  placeOrder: (deliveryAddress: string, paymentMethod: string) => string;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateQuantity: () => {},
  clearCart: () => {},
  cartTotal: 0,
  orders: [],
  placeOrder: () => ''
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const { currentUser } = useAuth();

  // Load cart from localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cartItems');
    const storedOrders = localStorage.getItem('orders');
    
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    
    if (storedOrders) {
      setOrders(JSON.parse(storedOrders));
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Save orders to localStorage when they change
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders]);

  const addToCart = (dish: Dish) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.dish.id === dish.id);
      
      if (existingItem) {
        return prevItems.map(item => 
          item.dish.id === dish.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevItems, { dish, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (dishId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.dish.id !== dishId));
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.dish.id === dishId 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + (item.dish.price * item.quantity), 
    0
  );

  const placeOrder = (deliveryAddress: string, paymentMethod: string): string => {
    if (!currentUser) return '';
    
    const newOrder: Order = {
      id: (orders.length + 1).toString(),
      userId: currentUser.id,
      items: [...cartItems],
      total: cartTotal,
      status: 'confirmed',
      deliveryAddress,
      paymentMethod,
      createdAt: new Date().toISOString()
    };
    
    setOrders(prevOrders => [...prevOrders, newOrder]);
    clearCart();
    
    return newOrder.id;
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartTotal,
      orders,
      placeOrder
    }}>
      {children}
    </CartContext.Provider>
  );
};
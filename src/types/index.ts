export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export interface Restaurant {
  id: string;
  name: string;
  city: string;
  description: string;
  image: string;
  rating: number;
  deliveryTime: string;
  cuisineType: string[];
}

export interface Dish {
  id: string;
  restaurantId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  isVeg: boolean;
  popular: boolean;
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'delivered';
  deliveryAddress: string;
  paymentMethod: string;
  createdAt: string;
}

export type City = 'Delhi' | 'Mumbai' | 'Kolkata' | 'Bangalore' | 'Chennai' | 'Hyderabad';
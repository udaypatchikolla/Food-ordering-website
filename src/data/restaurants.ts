import { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Spice Garden',
    city: 'Delhi',
    description: 'Authentic North Indian cuisine with a modern twist',
    image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
    deliveryTime: '30-40 min',
    cuisineType: ['North Indian', 'Mughlai']
  },
  {
    id: '2',
    name: 'Coastal Flavors',
    city: 'Mumbai',
    description: 'Seafood specialties from the western coast',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.3,
    deliveryTime: '25-35 min',
    cuisineType: ['Seafood', 'Coastal']
  },
  {
    id: '3',
    name: 'Bengal Kitchen',
    city: 'Kolkata',
    description: 'Traditional Bengali dishes prepared with authentic spices',
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    deliveryTime: '35-45 min',
    cuisineType: ['Bengali', 'Sweets']
  },
  {
    id: '4',
    name: 'South Spice',
    city: 'Bangalore',
    description: 'Authentic South Indian flavors',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.4,
    deliveryTime: '20-30 min',
    cuisineType: ['South Indian', 'Dosa']
  },
  {
    id: '5',
    name: 'Taj Mahal',
    city: 'Delhi',
    description: 'Royal dining experience with Mughlai specialties',
    image: 'https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    deliveryTime: '40-50 min',
    cuisineType: ['Mughlai', 'North Indian']
  },
  {
    id: '6',
    name: 'Chennai Express',
    city: 'Chennai',
    description: 'Authentic Tamil cuisine with traditional recipes',
    image: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.2,
    deliveryTime: '30-40 min',
    cuisineType: ['Tamil', 'South Indian']
  },
  {
    id: '7',
    name: 'Hyderabadi House',
    city: 'Hyderabad',
    description: 'Famous for authentic Biryani and Hyderabadi specialties',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    deliveryTime: '35-45 min',
    cuisineType: ['Hyderabadi', 'Biryani']
  },
  {
    id: '8',
    name: 'Mumbai Street Food',
    city: 'Mumbai',
    description: 'Bringing the vibrant street food culture to your doorstep',
    image: 'https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.1,
    deliveryTime: '20-30 min',
    cuisineType: ['Street Food', 'Chaat']
  }
];
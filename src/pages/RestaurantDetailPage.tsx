import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import { dishes } from '../data/dishes';
import DishCard from '../components/dish/DishCard';
import { ArrowLeft, Clock, Star } from 'lucide-react';

const RestaurantDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find(r => r.id === id);
  
  if (!restaurant) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Restaurant not found</h2>
        <Link to="/restaurants" className="text-red-600 hover:text-red-700">
          Back to Restaurants
        </Link>
      </div>
    );
  }
  
  const restaurantDishes = dishes.filter(dish => dish.restaurantId === restaurant.id);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/restaurants" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Restaurants
      </Link>
      
      {/* Restaurant Header */}
      <div className="relative h-80 rounded-xl overflow-hidden mb-8">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-lg md:text-xl opacity-90 mb-4">{restaurant.description}</p>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center bg-white text-gray-800 rounded px-3 py-1">
              <Star className="h-4 w-4 mr-1 fill-yellow-500 stroke-yellow-500" />
              <span className="font-medium">{restaurant.rating}</span>
            </div>
            <div className="flex items-center text-white">
              <Clock className="h-4 w-4 mr-1" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="text-white">{restaurant.city}</div>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            {restaurant.cuisineType.map((cuisine, index) => (
              <span 
                key={index} 
                className="bg-white bg-opacity-20 text-white text-sm px-3 py-1 rounded-full"
              >
                {cuisine}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Menu */}
      <h2 className="text-2xl font-bold mb-6">Menu</h2>
      
      {restaurantDishes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurantDishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No dishes available for this restaurant.</p>
      )}
    </div>
  );
};

export default RestaurantDetailPage;
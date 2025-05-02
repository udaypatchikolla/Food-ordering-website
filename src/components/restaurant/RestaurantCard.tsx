import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../ui/Card';
import { Restaurant } from '../../types';
import { Star, Clock } from 'lucide-react';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="h-full flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="h-48 overflow-hidden">
          <img 
            src={restaurant.image} 
            alt={restaurant.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <CardContent>
          <h3 className="text-lg font-semibold mb-1">{restaurant.name}</h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center bg-green-100 text-green-800 rounded px-2 py-1 text-sm">
              <Star className="h-4 w-4 mr-1 fill-current" />
              <span>{restaurant.rating}</span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <div className="flex items-center text-gray-600 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{restaurant.deliveryTime}</span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-2 line-clamp-2">{restaurant.description}</p>
          <div className="flex flex-wrap gap-1 mt-2">
            {restaurant.cuisineType.map((cuisine, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
              >
                {cuisine}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
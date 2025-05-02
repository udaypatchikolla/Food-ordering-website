import React from 'react';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import { useCart } from '../../context/CartContext';
import { Dish } from '../../types';
import { Plus } from 'lucide-react';

interface DishCardProps {
  dish: Dish;
}

const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { addToCart } = useCart();

  return (
    <Card className="h-full flex flex-col transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={dish.image} 
          alt={dish.name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-md shadow-sm">
          <span className={`flex items-center ${dish.isVeg ? 'text-green-600' : 'text-red-600'}`}>
            <span className={`inline-block w-3 h-3 mr-1 rounded-full ${dish.isVeg ? 'bg-green-600' : 'bg-red-600'}`}></span>
            {dish.isVeg ? 'Veg' : 'Non-Veg'}
          </span>
        </div>
        {dish.popular && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Popular
          </div>
        )}
      </div>
      <CardContent className="flex-grow flex flex-col">
        <h3 className="text-lg font-semibold mb-1">{dish.name}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{dish.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="font-bold">₹{dish.price}</span>
          <Button 
            size="sm" 
            onClick={() => addToCart(dish)}
            className="flex items-center"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DishCard;
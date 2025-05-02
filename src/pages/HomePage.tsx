import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Clock, Star } from 'lucide-react';
import { restaurants } from '../data/restaurants';
import { dishes } from '../data/dishes';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import DishCard from '../components/dish/DishCard';
import Button from '../components/ui/Button';

const cities = ['Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad'];

const HomePage: React.FC = () => {
  // Featured restaurants (top rated)
  const featuredRestaurants = [...restaurants]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  
  // Popular dishes
  const popularDishes = dishes.filter(dish => dish.popular).slice(0, 4);
  
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative bg-gray-900 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Delicious Food, Delivered Fast
            </h1>
            <p className="text-xl mb-8">
              Order from your favorite restaurants and enjoy contactless delivery.
            </p>
            <div className="relative max-w-lg">
              <div className="flex items-center relative">
                <div className="relative flex-grow">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                  <select 
                    className="w-full pl-10 pr-4 py-3 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                    defaultValue=""
                  >
                    <option value="" disabled>Select your city</option>
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <Link to="/restaurants">
                  <Button className="rounded-l-none px-8">
                    Find Food
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Restaurants */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Restaurants</h2>
            <Link 
              to="/restaurants" 
              className="text-red-600 hover:text-red-700 font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredRestaurants.map(restaurant => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Popular Dishes */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Popular Dishes</h2>
            <Link 
              to="/dishes" 
              className="text-red-600 hover:text-red-700 font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDishes.map(dish => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Cities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Cities We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {cities.map(city => (
              <Link 
                key={city}
                to={`/restaurants?city=${city}`}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-medium">{city}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Food</h3>
              <p className="text-gray-600">Browse restaurants and dishes from your area</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Order and Pay</h3>
              <p className="text-gray-600">Pay securely online or with cash on delivery</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enjoy Your Meal</h3>
              <p className="text-gray-600">Food is prepared and delivered to your doorstep</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
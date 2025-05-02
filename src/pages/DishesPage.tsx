import React, { useState, useEffect } from 'react';
import { dishes } from '../data/dishes';
import DishCard from '../components/dish/DishCard';
import { restaurants } from '../data/restaurants';
import { Search } from 'lucide-react';
import { Dish, City } from '../types';

const cities: City[] = ['Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad'];

const priceRanges = [
  { label: 'All Prices', min: 0, max: Infinity },
  { label: 'Under ₹100', min: 0, max: 100 },
  { label: '₹100 - ₹200', min: 100, max: 200 },
  { label: '₹200 - ₹300', min: 200, max: 300 },
  { label: '₹300+', min: 300, max: Infinity }
];

const DishesPage: React.FC = () => {
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>(dishes);
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedPriceRange, setSelectedPriceRange] = useState<number>(0);
  const [isVeg, setIsVeg] = useState<boolean | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  useEffect(() => {
    let filtered = [...dishes];
    
    // Filter by city (requires mapping through restaurants)
    if (selectedCity) {
      const restaurantIds = restaurants
        .filter(restaurant => restaurant.city === selectedCity)
        .map(restaurant => restaurant.id);
      
      filtered = filtered.filter(dish => 
        restaurantIds.includes(dish.restaurantId)
      );
    }
    
    // Filter by veg/non-veg
    if (isVeg !== null) {
      filtered = filtered.filter(dish => dish.isVeg === isVeg);
    }
    
    // Filter by price range
    const { min, max } = priceRanges[selectedPriceRange];
    filtered = filtered.filter(dish => 
      dish.price >= min && dish.price <= max
    );
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(dish => 
        dish.name.toLowerCase().includes(query) || 
        dish.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredDishes(filtered);
  }, [selectedCity, isVeg, selectedPriceRange, searchQuery]);
  
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };
  
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPriceRange(parseInt(e.target.value));
  };
  
  const handleVegFilterChange = (value: boolean | null) => {
    setIsVeg(value);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleClearFilters = () => {
    setSelectedCity('');
    setSelectedPriceRange(0);
    setIsVeg(null);
    setSearchQuery('');
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">All Dishes</h1>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={selectedCity}
              onChange={handleCityChange}
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          
          <div>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={selectedPriceRange}
              onChange={handlePriceRangeChange}
            >
              {priceRanges.map((range, index) => (
                <option key={index} value={index}>{range.label}</option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              className={`px-4 py-2 rounded-md ${
                isVeg === null 
                  ? 'bg-gray-200 text-gray-700' 
                  : 'bg-gray-100 text-gray-500'
              }`}
              onClick={() => handleVegFilterChange(null)}
            >
              All
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                isVeg === true 
                  ? 'bg-green-100 text-green-700 border border-green-500' 
                  : 'bg-gray-100 text-gray-500'
              }`}
              onClick={() => handleVegFilterChange(true)}
            >
              Veg Only
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                isVeg === false 
                  ? 'bg-red-100 text-red-700 border border-red-500' 
                  : 'bg-gray-100 text-gray-500'
              }`}
              onClick={() => handleVegFilterChange(false)}
            >
              Non-Veg
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search dishes..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        {(selectedCity || selectedPriceRange > 0 || isVeg !== null || searchQuery) && (
          <div className="flex justify-end">
            <button
              onClick={handleClearFilters}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
      
      {/* Results */}
      {filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDishes.map(dish => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No dishes found</h2>
          <p className="text-gray-600">Try adjusting your filters to find dishes.</p>
        </div>
      )}
    </div>
  );
};

export default DishesPage;
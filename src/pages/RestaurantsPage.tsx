import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { restaurants } from '../data/restaurants';
import RestaurantCard from '../components/restaurant/RestaurantCard';
import { MapPin, Search } from 'lucide-react';
import { Restaurant, City } from '../types';

const cities: City[] = ['Delhi', 'Mumbai', 'Kolkata', 'Bangalore', 'Chennai', 'Hyderabad'];
const cuisineTypes = [...new Set(restaurants.flatMap(r => r.cuisineType))];

const RestaurantsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCity = searchParams.get('city') || '';
  
  const [selectedCity, setSelectedCity] = useState<string>(initialCity);
  const [selectedCuisine, setSelectedCuisine] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurants);
  
  useEffect(() => {
    let filtered = [...restaurants];
    
    if (selectedCity) {
      filtered = filtered.filter(restaurant => restaurant.city === selectedCity);
    }
    
    if (selectedCuisine) {
      filtered = filtered.filter(restaurant => restaurant.cuisineType.includes(selectedCuisine));
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(restaurant => 
        restaurant.name.toLowerCase().includes(query) || 
        restaurant.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredRestaurants(filtered);
    
    // Update URL params
    const params: { city?: string; cuisine?: string; q?: string } = {};
    if (selectedCity) params.city = selectedCity;
    if (selectedCuisine) params.cuisine = selectedCuisine;
    if (searchQuery) params.q = searchQuery;
    
    setSearchParams(params);
  }, [selectedCity, selectedCuisine, searchQuery, setSearchParams]);
  
  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  };
  
  const handleCuisineChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCuisine(e.target.value);
  };
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleClearFilters = () => {
    setSelectedCity('');
    setSelectedCuisine('');
    setSearchQuery('');
    setSearchParams({});
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Restaurants</h1>
      
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <select
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
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
              value={selectedCuisine}
              onChange={handleCuisineChange}
            >
              <option value="">All Cuisines</option>
              {cuisineTypes.map(cuisine => (
                <option key={cuisine} value={cuisine}>{cuisine}</option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search restaurants..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
        
        {(selectedCity || selectedCuisine || searchQuery) && (
          <div className="mt-4 flex justify-end">
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
      {filteredRestaurants.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No restaurants found</h2>
          <p className="text-gray-600">Try adjusting your filters to find restaurants.</p>
        </div>
      )}
    </div>
  );
};

export default RestaurantsPage;
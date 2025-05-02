import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FoodieExpress</h3>
            <p className="text-gray-300">
              Bringing your favorite food from the best restaurants right to your doorstep.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/restaurants" className="text-gray-300 hover:text-white">Restaurants</Link>
              </li>
              <li>
                <Link to="/dishes" className="text-gray-300 hover:text-white">Dishes</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-300 hover:text-white">Cart</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Cities We Serve</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Delhi</li>
              <li className="text-gray-300">Mumbai</li>
              <li className="text-gray-300">Kolkata</li>
              <li className="text-gray-300">Bangalore</li>
              <li className="text-gray-300">Chennai</li>
              <li className="text-gray-300">Hyderabad</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">1234 Food Street</p>
            <p className="text-gray-300 mb-2">Delhi, India</p>
            <p className="text-gray-300 mb-2">Phone: +91 98765 43210</p>
            <p className="text-gray-300 mb-2">Email: info@foodieexpress.com</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} FoodieExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
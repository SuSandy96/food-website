import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="font-poppins font-bold text-lg mb-4">Food Blog</h3>
            <p className="text-gray-300 text-sm">
              Your source for delicious recipes, cooking tips, and food inspiration from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-poppins font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/recipes" className="hover:text-primary transition">Recipes</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition">Gallery</Link></li>
              <li><Link to="/about" className="hover:text-primary transition">About Us</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-poppins font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-primary transition">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-poppins font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-primary transition"><FiFacebook /></a>
              <a href="#" className="text-2xl hover:text-primary transition"><FiInstagram /></a>
              <a href="#" className="text-2xl hover:text-primary transition"><FiTwitter /></a>
              <a href="#" className="text-2xl hover:text-primary transition"><FiMail /></a>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-primary bg-opacity-10 rounded-lg p-6 mb-8 border border-primary border-opacity-20">
          <h4 className="font-poppins font-bold mb-3">Subscribe to Newsletter</h4>
          <div className="flex gap-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-dark focus:outline-none"
            />
            <button className="btn-primary whitespace-nowrap">Subscribe</button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Food Blog Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

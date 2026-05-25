import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { Link } from 'react-router-dom';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-accent overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop)'
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="font-poppins text-4xl md:text-6xl font-bold mb-4">
          Welcome to Food Blog
        </h1>
        <p className="text-lg md:text-2xl mb-8 opacity-90">
          Discover delicious recipes, cooking tips, and food inspiration
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link to="/recipes">
            <Button className="w-full sm:w-auto">Explore Recipes</Button>
          </Link>
          <Link to="/blog">
            <Button variant="secondary" className="w-full sm:w-auto">Read Blog</Button>
          </Link>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-white text-3xl">⬇️</div>
      </motion.div>
    </section>
  );
};

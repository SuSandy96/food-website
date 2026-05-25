import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import type { Recipe } from '../../types';
import { FiClock } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/recipes/${recipe.id}`}>
        <Card className="overflow-hidden cursor-pointer h-full flex flex-col">
          {/* Image */}
          <div className="relative overflow-hidden rounded-lg mb-4 h-40">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-2 right-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
              {recipe.category}
            </div>
          </div>

          {/* Content */}
          <h3 className="font-poppins font-bold text-lg mb-2 line-clamp-2">
            {recipe.title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {recipe.description}
          </p>

          {/* Meta Info */}
          <div className="flex gap-4 mt-auto text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <FiClock className="text-primary" />
              <span>{recipe.cookingTime} min</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-primary">👨‍🍳</span>
              <span>{recipe.difficulty}</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

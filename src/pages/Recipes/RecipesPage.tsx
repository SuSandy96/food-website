import React, { useState } from 'react';
import { RecipeCard } from '../../components/recipes/RecipeCard';
import { RecipeFilter } from '../../components/recipes/RecipeFilter';
import { recipesData } from '../../data';

export const RecipesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = Array.from(new Set(recipesData.map(r => r.category)));

  const filteredRecipes = recipesData.filter(recipe => {
    const categoryMatch = selectedCategory === 'All' || recipe.category === selectedCategory;
    const searchMatch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-light">
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">Our Recipes</h1>
            <p className="text-gray-600 text-lg">
              Discover a wide variety of delicious recipes for every occasion
            </p>
          </div>

          {/* Filter and Search */}
          <RecipeFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {/* Recipes Grid */}
          {filteredRecipes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No recipes found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

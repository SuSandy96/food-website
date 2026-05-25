import React from 'react';

interface RecipeFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const RecipeFilter: React.FC<RecipeFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange
}) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      {/* Search */}
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onCategoryChange('All')}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === 'All'
              ? 'bg-primary text-white'
              : 'bg-beige text-dark hover:bg-primary hover:text-white'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-beige text-dark hover:bg-primary hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

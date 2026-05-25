import type { Recipe } from '../types';

export const recipesData: Recipe[] = [
  {
    id: '1',
    title: 'Chocolate Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&h=400&fit=crop',
    cookingTime: 45,
    difficulty: 'Medium',
    description: 'A decadent chocolate cake perfect for any celebration',
    category: 'Dessert',
    servings: 8,
    ingredients: [
      '2 cups all-purpose flour',
      '1 cup cocoa powder',
      '2 cups sugar',
      '3 eggs',
      '1 cup milk',
      '1/2 cup vegetable oil',
      '2 tsp vanilla extract',
      '1.5 tsp baking soda',
      '1 tsp baking powder',
      'Pinch of salt'
    ],
    instructions: [
      'Preheat oven to 350°F (175°C)',
      'Mix dry ingredients in a bowl',
      'Combine wet ingredients separately',
      'Mix wet and dry ingredients',
      'Pour into greased pans',
      'Bake for 40-45 minutes',
      'Cool and frost with chocolate frosting'
    ],
    nutrition: {
      calories: 450,
      protein: 6,
      carbs: 65,
      fat: 18
    }
  },
  {
    id: '2',
    title: 'Pasta Carbonara',
    image: 'https://images.unsplash.com/photo-1612874742237-415b133f3f5d?w=500&h=400&fit=crop',
    cookingTime: 25,
    difficulty: 'Easy',
    description: 'Classic Italian pasta with creamy sauce',
    category: 'Main Course',
    servings: 4,
    ingredients: [
      '1 lb spaghetti',
      '6 oz pancetta',
      '4 eggs',
      '2 cups Parmesan cheese',
      'Black pepper to taste',
      'Salt'
    ],
    instructions: [
      'Cook pasta in salted boiling water',
      'Fry pancetta until crispy',
      'Beat eggs with Parmesan',
      'Drain pasta, reserve 1 cup pasta water',
      'Mix hot pasta with pancetta',
      'Add egg mixture off heat, stirring constantly',
      'Add pasta water as needed for creaminess'
    ],
    nutrition: {
      calories: 580,
      protein: 28,
      carbs: 55,
      fat: 22
    }
  },
  {
    id: '3',
    title: 'Greek Salad',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&h=400&fit=crop',
    cookingTime: 10,
    difficulty: 'Easy',
    description: 'Fresh and healthy Mediterranean salad',
    category: 'Salad',
    servings: 4,
    ingredients: [
      '4 large tomatoes',
      '1 cucumber',
      '1 red onion',
      '200g Feta cheese',
      '100g black olives',
      '3 tbsp olive oil',
      '2 tbsp red wine vinegar',
      'Oregano, salt, pepper'
    ],
    instructions: [
      'Chop tomatoes and cucumber',
      'Slice red onion thinly',
      'Add olives and crumbled Feta',
      'Whisk olive oil and vinegar',
      'Toss salad with dressing',
      'Sprinkle oregano and season'
    ],
    nutrition: {
      calories: 250,
      protein: 10,
      carbs: 15,
      fat: 16
    }
  }
];

export const blogPostsData = [
  {
    id: '1',
    title: '10 Healthy Breakfast Ideas',
    excerpt: 'Start your day right with these nutritious breakfast recipes',
    content: 'A healthy breakfast is the foundation of a productive day. Here are 10 amazing breakfast ideas that are both nutritious and delicious...',
    image: 'https://images.unsplash.com/photo-1533189751067-4d71bcdd2160?w=500&h=400&fit=crop',
    author: 'Food Blogger',
    date: '2024-01-15',
    category: 'Healthy Eating',
    tags: ['breakfast', 'healthy', 'quick'],
    readingTime: 5
  },
  {
    id: '2',
    title: 'Restaurant Review: Best Pizza in Town',
    excerpt: 'Discovering the hidden gem pizzeria that serves authentic Italian pizza',
    content: 'After months of searching, I finally found the perfect pizzeria. The dough is made fresh daily...',
    image: 'https://images.unsplash.com/photo-1566560798248-15fcac43a2b6?w=500&h=400&fit=crop',
    author: 'Food Blogger',
    date: '2024-01-10',
    category: 'Restaurant Review',
    tags: ['pizza', 'restaurant', 'italian'],
    readingTime: 7
  },
  {
    id: '3',
    title: 'Kitchen Essentials: Tools You Really Need',
    excerpt: 'Learn about the must-have kitchen tools every home cook should own',
    content: 'Having the right tools makes cooking much easier. Here are the essential items every kitchen needs...',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop',
    author: 'Food Blogger',
    date: '2024-01-05',
    category: 'Kitchen Tips',
    tags: ['tools', 'kitchen', 'essentials'],
    readingTime: 6
  }
];

export const galleryData = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
    alt: 'Gourmet Dessert',
    category: 'Dessert',
    title: 'Elegant Chocolate Dessert'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=400&fit=crop',
    alt: 'Fresh Beverages',
    category: 'Drinks',
    title: 'Refreshing Drinks'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
    alt: 'Pasta Dish',
    category: 'Meals',
    title: 'Italian Pasta'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop',
    alt: 'Sweet Snacks',
    category: 'Snacks',
    title: 'Delicious Snacks'
  }
];

export const videosData = [
  {
    id: '1',
    title: 'How to Make Pasta from Scratch',
    url: 'https://www.youtube.com/embed/REZfB4lZWEY',
    thumbnail: 'https://images.unsplash.com/photo-1612874742237-415b133f3f5d?w=300&h=200&fit=crop',
    description: 'Learn how to make fresh pasta at home',
    category: 'Tutorials',
    duration: '12:45'
  },
  {
    id: '2',
    title: 'Baking the Perfect Bread',
    url: 'https://www.youtube.com/embed/8sDZp5Dt0z8',
    thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop',
    description: 'Master the art of bread baking',
    category: 'Tutorials',
    duration: '18:30'
  }
];

export const documentsData = [
  {
    id: '1',
    title: 'Essential Cooking Techniques Guide',
    type: 'guide' as const,
    url: '/documents/cooking-guide.pdf',
    description: 'A comprehensive guide to mastering cooking techniques',
    category: 'Guides'
  },
  {
    id: '2',
    title: 'Nutrition Chart for Healthy Eating',
    type: 'chart' as const,
    url: '/documents/nutrition-chart.pdf',
    description: 'Complete nutrition information for common foods',
    category: 'Nutrition'
  }
];

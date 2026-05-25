export interface Recipe {
  id: string;
  title: string;
  image: string;
  cookingTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  category: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
  nutrition?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  videoUrl?: string;
  rating?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  description: string;
  category: string;
  duration: string;
}

export interface Document {
  id: string;
  title: string;
  type: 'pdf' | 'presentation' | 'guide' | 'chart';
  url: string;
  description: string;
  category: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

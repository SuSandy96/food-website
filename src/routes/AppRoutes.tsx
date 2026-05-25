import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { HomePage } from '../pages/Home/HomePage';
import { AboutPage } from '../pages/About/AboutPage';
import { RecipesPage } from '../pages/Recipes/RecipesPage';
import { BlogPage } from '../pages/Blog/BlogPage';
import { GalleryPage } from '../pages/Gallery/GalleryPage';
import { VideosPage } from '../pages/Videos/VideosPage';
import { ResourcesPage } from '../pages/Resources/ResourcesPage';
import { ContactPage } from '../pages/Contact/ContactPage';

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

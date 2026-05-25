import React from 'react';
import { HeroSection } from '../../components/layout/HeroSection';
import { RecipeCard } from '../../components/recipes/RecipeCard';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { recipesData, blogPostsData, galleryData } from '../../data';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const featuredRecipes = recipesData.slice(0, 3);
  const latestBlogPosts = blogPostsData.slice(0, 3);
  const galleryPreview = galleryData.slice(0, 4);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Recipes Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-4xl font-bold mb-12 text-center">Featured Recipes</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredRecipes.map((recipe: typeof featuredRecipes[0]) => (
              <motion.div key={recipe.id} variants={itemVariants}>
                <RecipeCard recipe={recipe} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/recipes">
              <Button>View All Recipes</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-4xl font-bold mb-12 text-center">Popular Categories</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {['Dessert', 'Main Course', 'Salad', 'Snacks'].map((category, index) => (
              <motion.div key={category} variants={itemVariants}>
                <Card className="text-center cursor-pointer hover:bg-primary hover:text-white transition-all duration-300">
                  <div className="text-4xl mb-4">
                    {['🍰', '🍝', '🥗', '🍪'][index]}
                  </div>
                  <h3 className="font-poppins font-bold">{category}</h3>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-4xl font-bold mb-12 text-center">Latest Blog Posts</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {latestBlogPosts.map((post: typeof latestBlogPosts[0]) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Card className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h3 className="font-poppins font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/blog">
              <Button>Read More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Food Gallery Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-4xl font-bold mb-12 text-center">Food Gallery</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {galleryPreview.map((image: typeof galleryPreview[0]) => (
              <motion.div key={image.id} variants={itemVariants}>
                <div className="overflow-hidden rounded-lg cursor-pointer group">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-poppins font-bold">
                      {image.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/gallery">
              <Button>View Gallery</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom max-w-2xl text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg opacity-90 mb-8">
              Get the latest recipes and cooking tips delivered to your inbox
            </p>
            <div className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none"
              />
              <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

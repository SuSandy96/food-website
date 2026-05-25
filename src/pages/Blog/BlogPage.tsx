import React, { useState } from 'react';
import { Card } from '../../components/common/Card';
import { blogPostsData } from '../../data';
import { motion } from 'framer-motion';

export const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', ...Array.from(new Set(blogPostsData.map(p => p.category)))];

  const filteredPosts = blogPostsData.filter(post => {
    const categoryMatch = selectedCategory === 'All' || post.category === selectedCategory;
    const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-light">
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">Food Blog</h1>
            <p className="text-gray-600 text-lg">
              Read articles about cooking tips, recipes, and food culture
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary mb-6"
            />

            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-white text-dark hover:bg-primary hover:text-white border border-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Blog Posts */}
          {filteredPosts.length > 0 ? (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden flex flex-col md:flex-row">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full md:w-64 h-64 md:h-auto object-cover"
                    />
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex gap-2 mb-3">
                          <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="font-poppins text-2xl font-bold mb-2">{post.title}</h3>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      </div>
                      <div className="flex justify-between items-center text-sm text-gray-500">
                        <div className="flex gap-4">
                          <span>By {post.author}</span>
                          <span>{post.date}</span>
                        </div>
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No blog posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

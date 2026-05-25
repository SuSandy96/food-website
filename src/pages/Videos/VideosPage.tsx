import React, { useState } from 'react';
import { videosData } from '../../data';
import { Card } from '../../components/common/Card';
import { motion } from 'framer-motion';

export const VideosPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(videosData.map(v => v.category)))];

  const filteredVideos = selectedCategory === 'All'
    ? videosData
    : videosData.filter(video => video.category === selectedCategory);

  return (
    <div className="min-h-screen bg-light">
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">Video Tutorials</h1>
            <p className="text-gray-600 text-lg">
              Watch cooking tutorials and food preparation guides
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-dark hover:bg-primary hover:text-white border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredVideos.map((video) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden flex flex-col h-full">
                  {/* Embedded Video */}
                  <div className="aspect-video bg-gray-900">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                        {video.category}
                      </span>
                      <span className="text-gray-500 text-sm">{video.duration}</span>
                    </div>
                    <h3 className="font-poppins font-bold text-lg mb-3">{video.title}</h3>
                    <p className="text-gray-600 flex-1">{video.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

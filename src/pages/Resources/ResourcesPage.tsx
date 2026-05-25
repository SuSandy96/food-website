import React, { useState } from 'react';
import { documentsData } from '../../data';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiSliders } from 'react-icons/fi';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(documentsData.map(d => d.category)))];

  const filteredDocuments = selectedCategory === 'All'
    ? documentsData
    : documentsData.filter(doc => doc.category === selectedCategory);

  const getIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return <FiFileText className="text-2xl text-primary" />;
      case 'chart':
        return <FiSliders className="text-2xl text-primary" />;
      default:
        return <FiFileText className="text-2xl text-primary" />;
    }
  };

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
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">Resources</h1>
            <p className="text-gray-600 text-lg">
              Download helpful guides, charts, and documents
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

          {/* Documents Grid */}
          {filteredDocuments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDocuments.map((doc) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Card className="flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-4">
                      {getIcon(doc.type)}
                    </div>

                    {/* Content */}
                    <h3 className="font-poppins font-bold text-lg mb-2">{doc.title}</h3>
                    <p className="text-gray-600 mb-4 flex-1">{doc.description}</p>

                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                        {doc.category}
                      </span>
                    </div>

                    {/* Download Button */}
                    <a href={doc.url} download>
                      <Button className="w-full flex items-center justify-center gap-2">
                        <FiDownload /> Download
                      </Button>
                    </a>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No resources found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

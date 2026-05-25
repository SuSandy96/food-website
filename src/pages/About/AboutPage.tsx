import React from 'react';
import { Card } from '../../components/common/Card';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="section-padding">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">About Food Blog</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your go-to source for delicious recipes, cooking tips, and food inspiration
            </p>
          </motion.div>

          {/* About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop"
                alt="Chef"
                className="rounded-lg shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="font-poppins text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Food Blog was founded with a passion for sharing culinary knowledge and inspiring people to cook more at home. We believe that cooking should be accessible to everyone, regardless of skill level.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our team of experienced chefs and food enthusiasts work tirelessly to create delicious recipes, detailed cooking guides, and food photography that will inspire your next meal.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a beginner cook or a seasoned chef, you'll find something new and exciting on Food Blog. Join our community and start your culinary journey today!
              </p>
            </motion.div>
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-light p-12 rounded-lg mb-16"
          >
            <h2 className="font-poppins text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-gray-700 text-center text-lg leading-relaxed max-w-3xl mx-auto">
              To inspire and empower people to cook delicious, healthy, and satisfying meals at home. We aim to make cooking educational, accessible, and enjoyable for everyone.
            </p>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-poppins text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Johnson', role: 'Head Chef' },
                { name: 'Michael Chen', role: 'Recipe Developer' },
                { name: 'Emma Davis', role: 'Food Photographer' }
              ].map((member, index) => (
                <Card key={index} className="text-center">
                  <div className="mb-4 h-40 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-4xl">
                    {['👩‍🍳', '👨‍🍳', '📷'][index]}
                  </div>
                  <h3 className="font-poppins font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

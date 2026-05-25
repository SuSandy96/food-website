import React, { useState } from 'react';
import { Input } from '../../components/common/Input';
import { Button } from '../../components/common/Button';
import { Card } from '../../components/common/Card';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend service
    console.log('Form data:', formData);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
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
            <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-gray-600 text-lg">
              Have a question or feedback? We'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary text-3xl">
                    <FiMail />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold">Email</h3>
                    <p className="text-gray-600">hello@foodblog.com</p>
                  </div>
                </div>
              </Card>

              <Card className="mt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary text-3xl">
                    <FiPhone />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </Card>

              <Card className="mt-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-primary text-3xl">
                    <FiMapPin />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold">Location</h3>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✓</div>
                    <h3 className="font-poppins font-bold text-2xl mb-2 text-primary">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <Input
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="mb-4"
                    />

                    <Input
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mb-4"
                    />

                    <Input
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="mb-4"
                    />

                    <div className="mb-6">
                      <label className="block text-sm font-medium text-dark mb-2">
                        Message <span className="text-accent">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your message..."
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </Card>
            </motion.div>
          </div>

          {/* Google Maps Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="aspect-video bg-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-4">🗺️</div>
                  <p className="text-gray-600">Google Maps Integration Placeholder</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

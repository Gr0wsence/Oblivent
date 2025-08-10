
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const typewriterTexts = [
    'Digital Marketing Agency',
    'Creative Design Studio', 
    'Your Growth Partner',
    'Brand Transformation Experts'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup Inc',
      text: 'Amazing work! They transformed our brand completely and increased our conversion rate by 300%.',
      rating: 5,
      image: '/testimonial1.jpg'
    },
    {
      name: 'Mike Chen',
      company: 'E-commerce Store',
      text: 'Professional, creative, and delivered beyond expectations. Highly recommended!',
      rating: 5,
      image: '/testimonial2.jpg'
    },
    {
      name: 'Emma Davis',
      company: 'Local Business',
      text: 'Their social media strategy helped us reach 10x more customers in just 3 months.',
      rating: 5,
      image: '/testimonial3.jpg'
    }
  ];

  const portfolioItems = [
    { id: 1, title: 'E-commerce Website', category: 'web', image: '/portfolio1.jpg' },
    { id: 2, title: 'Brand Identity', category: 'branding', image: '/portfolio2.jpg' },
    { id: 3, title: 'Social Media Campaign', category: 'social', image: '/portfolio3.jpg' },
    { id: 4, title: 'Video Advertisement', category: 'video', image: '/portfolio4.jpg' },
    { id: 5, title: 'Mobile App Design', category: 'web', image: '/portfolio5.jpg' },
    { id: 6, title: 'Logo Design', category: 'branding', image: '/portfolio6.jpg' },
  ];

  const blogPosts = [
    {
      title: '10 Digital Marketing Trends for 2024',
      excerpt: 'Discover the latest trends that will shape digital marketing this year.',
      date: 'Jan 15, 2024',
      image: '/blog1.jpg'
    },
    {
      title: 'How to Increase Website Conversion Rates',
      excerpt: 'Learn proven strategies to turn more visitors into customers.',
      date: 'Jan 10, 2024',
      image: '/blog2.jpg'
    },
    {
      title: 'The Power of Visual Branding',
      excerpt: 'Why visual identity is crucial for business success.',
      date: 'Jan 5, 2024',
      image: '/blog3.jpg'
    }
  ];

  // Typewriter effect
  useEffect(() => {
    const currentText = typewriterTexts[currentTextIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typewriterText.length < currentText.length) {
          setTypewriterText(currentText.slice(0, typewriterText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        if (typewriterText.length > 0) {
          setTypewriterText(typewriterText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typewriterText, currentTextIndex, isDeleting]);

  // Testimonial slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filteredPortfolio = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Oblivent
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact', 'Legal'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
              Get Free Quote
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            We Are Your{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our cutting-edge digital solutions. 
            We create stunning websites, powerful marketing campaigns, and memorable brands.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
              Start Your Project
            </button>
            <button className="border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive digital solutions to elevate your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Website Design',
                icon: '🎨',
                description: 'Beautiful, responsive websites that convert visitors into customers',
                features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
              },
              {
                title: 'Social Media Ads',
                icon: '📱',
                description: 'Targeted campaigns that reach your ideal customers',
                features: ['Facebook Ads', 'Instagram Ads', 'Google Ads']
              },
              {
                title: 'Video Editing',
                icon: '🎬',
                description: 'Professional video content that engages and converts',
                features: ['Motion Graphics', 'Color Grading', '4K Quality']
              },
              {
                title: 'Branding',
                icon: '✨',
                description: 'Complete brand identity that stands out from competition',
                features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Choose Us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Lightning Fast', description: 'Quick turnaround times without compromising quality' },
              { icon: '🎯', title: 'Results Driven', description: 'We focus on delivering measurable business results' },
              { icon: '💎', title: 'Premium Quality', description: 'High-end designs and development standards' },
              { icon: '🔧', title: '24/7 Support', description: 'Round the clock customer support and maintenance' },
              { icon: '📈', title: 'Growth Focused', description: 'Strategies designed to scale your business' },
              { icon: '🏆', title: 'Award Winning', description: 'Recognized excellence in digital marketing' }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="portfolio">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            
            <div className="flex justify-center space-x-4 mt-8">
              {['all', 'web', 'branding', 'social', 'video'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-purple-500 to-pink-500 p-8 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{item.title}</span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="bg-white text-black px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>

          <div className="relative">
            <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              
              <p className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonials[currentTestimonial].name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-white">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-400">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentTestimonial === index ? 'bg-purple-400' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Snippets */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" id="blog">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Insights</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 transition-all transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Blog Image</span>
                </div>
                <div className="p-6">
                  <p className="text-purple-400 text-sm mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <button className="text-purple-400 hover:text-purple-300 font-medium">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Stay <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Updated</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get the latest digital marketing tips and insights delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
            />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium hover:from-purple-700 hover:to-pink-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 py-16 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                Oblivent
              </h3>
              <p className="text-gray-300 mb-6 max-w-md">
                Your trusted partner for digital transformation. We create stunning digital experiences that drive results.
              </p>
              <div className="flex space-x-4">
                {['📘', '📷', '🐦', '💼'].map((icon, index) => (
                  <button key={index} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Oblivent. All rights reserved. Built with ❤️ on Replit.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

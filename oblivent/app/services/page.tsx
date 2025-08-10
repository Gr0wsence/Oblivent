
import ServiceCard from '../../components/ServiceCard';
import { Monitor, Megaphone, Video, Palette } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Website Design & Development',
      description: 'Custom websites that convert visitors into customers with modern design and seamless functionality.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading Speed', 'CMS Integration', 'E-commerce Solutions']
    },
    {
      icon: Megaphone,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that build brand awareness and drive engagement across all platforms.',
      features: ['Content Strategy', 'Ad Campaigns', 'Community Management', 'Analytics & Reporting', 'Influencer Partnerships']
    },
    {
      icon: Video,
      title: 'Video Production',
      description: 'Professional video content that tells your story and captivates your audience with stunning visuals.',
      features: ['Corporate Videos', 'Social Media Content', 'Product Demos', 'Animation', 'Post-Production']
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete branding solutions that establish your unique identity and make you stand out from competitors.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Schemes', 'Typography', 'Marketing Materials']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to accelerate your business growth and establish a powerful online presence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a customized solution that delivers exceptional results for your business.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

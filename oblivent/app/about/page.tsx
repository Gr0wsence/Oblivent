
import { Users, Target, Award, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Oblivent</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're a digital agency passionate about transforming businesses through innovative design and strategic digital solutions.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-4">
                At Oblivent, we believe every business deserves a powerful digital presence. We combine creativity with strategy to deliver exceptional results that drive growth and engagement.
              </p>
              <p className="text-gray-300">
                Our team of experts works tirelessly to understand your unique needs and create solutions that not only look amazing but perform exceptionally.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  10+ years of combined experience
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  100+ successful projects delivered
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  24/7 support and maintenance
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Data-driven approach to results
                </li>
              </ul>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Team Work', description: 'Collaborative approach to every project' },
              { icon: Target, title: 'Goal Oriented', description: 'Focused on achieving your business objectives' },
              { icon: Award, title: 'Quality First', description: 'Excellence in every detail and delivery' },
              { icon: Zap, title: 'Innovation', description: 'Cutting-edge solutions for modern challenges' }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

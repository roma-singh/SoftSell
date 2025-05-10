import React from 'react';
import { ShieldCheck, TrendingUp, Clock, Award } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="h-10 w-10 text-blue-500 dark:text-blue-400" />,
    title: 'Secure Transactions',
    description: 'Our platform uses bank-level security to protect your license data and financial information during every transaction.'
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-teal-500 dark:text-teal-400" />,
    title: 'Maximum Value',
    description: 'Our proprietary valuation algorithm ensures you get up to 75% more value compared to traditional software buyback programs.'
  },
  {
    icon: <Clock className="h-10 w-10 text-indigo-500 dark:text-indigo-400" />,
    title: 'Quick Turnaround',
    description: 'From submission to payment in as little as 48 hours. We value your time and make the process incredibly efficient.'
  },
  {
    icon: <Award className="h-10 w-10 text-amber-500 dark:text-amber-400" />,
    title: 'Industry Expertise',
    description: 'With 10+ years in software asset management, we have deep knowledge of license valuation across all major vendors.'
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section 
      id="why-choose-us" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Industry-leading benefits that set us apart from the competition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start p-6 rounded-lg bg-white dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex-shrink-0 mr-4">
                <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-600">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
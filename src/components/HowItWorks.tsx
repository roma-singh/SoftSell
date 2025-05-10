import React from 'react';
import { Upload, DollarSign, CreditCard } from 'lucide-react';

const steps = [
  {
    icon: <Upload className="h-12 w-12 text-blue-500 dark:text-blue-400" />,
    title: 'Upload License',
    description: 'Submit your software license details through our secure portal. We handle all major software vendors and license types.'
  },
  {
    icon: <DollarSign className="h-12 w-12 text-teal-500 dark:text-teal-400" />,
    title: 'Get Valuation',
    description: 'Our AI-powered system analyzes the market value of your license in real-time, ensuring you get the best possible offer.'
  },
  {
    icon: <CreditCard className="h-12 w-12 text-indigo-500 dark:text-indigo-400" />,
    title: 'Get Paid',
    description: 'Accept our offer and receive payment via your preferred method within 48 hours. Fast, secure, and hassle-free.'
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section 
      id="how-it-works" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our streamlined process makes selling software licenses simple and profitable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6 p-4 rounded-full bg-gray-50 dark:bg-gray-700">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
              <div className="mt-6 opacity-50">
                <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
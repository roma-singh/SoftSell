import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-blue-50 to-sky-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              <span className="text-blue-600 dark:text-blue-400">Maximize</span> the Value of Your Software Licenses
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed opacity-0 animate-fade-in animation-delay-300">
              Turn your unused software licenses into cash. Our transparent marketplace helps businesses sell licenses they no longer need at competitive rates.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in animation-delay-600">
              <button 
                onClick={scrollToContact}
                className="btn-primary flex items-center justify-center"
              >
                Get a Quote
                <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-secondary flex items-center justify-center"
              >
                Sell My Licenses
              </button>
            </div>
          </div>
          <div className="md:w-1/2 opacity-0 animate-fade-in animation-delay-500">
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transform transition-transform hover:scale-105">
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="aspect-square rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 flex items-center justify-center"
                    >
                      <div className="h-6 w-10 bg-blue-500 dark:bg-blue-400 rounded opacity-80" />
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-full" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-5/6" />
                  <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full w-4/6" />
                </div>
                <div className="flex justify-between mt-8">
                  <div className="w-1/2 pr-2">
                    <div className="h-8 bg-blue-500 dark:bg-blue-600 rounded" />
                  </div>
                  <div className="w-1/2 pl-2">
                    <div className="h-8 bg-teal-500 dark:bg-teal-600 rounded" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                +75% Value
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
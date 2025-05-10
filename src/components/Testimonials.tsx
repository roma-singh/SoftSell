import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    content: "SoftSell transformed our IT asset management approach. We recovered over Rs.50,000 from unused enterprise licenses that would have just expired. The process was smooth and their valuation was surprisingly generous.",
    author: "Aditi Singh",
    role: "CIO",
    company: "Acme Technologies"
  },
  {
    content: "As a growing startup, cash flow matters. SoftSell helped us recoup costs on software licenses we purchased but never fully utilized. Their team was professional and the whole process took less than a week.",
    author: "Divyanshu Sharma",
    role: "Finance Director",
    company: "Nexus Innovations"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section 
      id="testimonials" 
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from businesses who've sold with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-sm relative opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="absolute text-blue-200 dark:text-blue-900 h-24 w-24 -top-4 -left-4 z-0 opacity-40" />
              <div className="relative z-10">
                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="mr-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.author}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
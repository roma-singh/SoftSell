import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-blue-600 text-white p-1 rounded text-xl">S</span>
              <span className="text-2xl font-bold text-white">SoftSell</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              SoftSell helps businesses maximize the value of their unused software licenses through our secure marketplace and valuation technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="footer-link">About Us</a></li>
              <li><a href="#" className="footer-link">Careers</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-gray-400" />
                <a href="mailto:info@softsell.com" className="footer-link">info@softsell.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-gray-400" />
                <a href="tel:+18005551234" className="footer-link">+1 (800) 555-1234</a>
              </li>
              <li className="mt-6">
                <h5 className="text-white text-sm font-semibold mb-2">Office Location</h5>
                <address className="text-gray-400 not-italic">
                  123 Tech Park Drive<br />
                  San Francisco, CA 94107
                </address>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} SoftSell Inc. All rights reserved.
          </p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
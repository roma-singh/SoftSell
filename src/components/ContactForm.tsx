import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';

const licenseTypes = [
  'Enterprise Software',
  'Creative Suite',
  'Operating System',
  'Development Tools',
  'Database',
  'CRM',
  'Other'
];

type FormData = {
  name: string;
  email: string;
  company: string;
  licenseType: string;
  message: string;
};

type FormErrors = {
  [key in keyof FormData]?: string;
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'Please select a license type';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          licenseType: '',
          message: ''
        });
        
        // Reset success message after delay
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Get a quote for your software licenses or ask us any questions
            </p>
          </div>

          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-8 opacity-0 animate-fade-up">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
                  <svg className="w-8 h-8 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${errors.name ? 'border-red-500 dark:border-red-400' : ''}`}
                      placeholder="Divyanshu Sharma"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`form-input ${errors.email ? 'border-red-500 dark:border-red-400' : ''}`}
                      placeholder="divyanshu@gmail.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="form-label">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`form-input ${errors.company ? 'border-red-500 dark:border-red-400' : ''}`}
                      placeholder="Credex"
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="licenseType" className="form-label">License Type</label>
                    <select
                      id="licenseType"
                      name="licenseType"
                      value={formData.licenseType}
                      onChange={handleChange}
                      className={`form-select ${errors.licenseType ? 'border-red-500 dark:border-red-400' : ''}`}
                    >
                      <option value="">Select a license type</option>
                      {licenseTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.licenseType && <p className="text-red-500 text-sm mt-1">{errors.licenseType}</p>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`form-textarea ${errors.message ? 'border-red-500 dark:border-red-400' : ''}`}
                    placeholder="Tell us about the software licenses you want to sell..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>
                
                <div className="flex justify-end">
                  <button 
                    type="submit" 
                    className="btn-primary flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={18} className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
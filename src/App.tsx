import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Navbar />
        
        <main>
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        
        <Footer />
        
        <ChatWidget 
          isOpen={isChatOpen}
          onToggle={() => setIsChatOpen(!isChatOpen)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
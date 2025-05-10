import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

interface ChatWidgetProps {
  isOpen: boolean;
  onToggle: () => void;
}

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
};

// Example predefined responses
const aiResponses: Record<string, string> = {
  'default': "I'm here to help with any questions about selling your software licenses. What would you like to know?",
  'how': "Our process is simple: Upload your license details, receive a valuation based on current market rates, and get paid quickly once you accept our offer.",
  'value': "We typically offer 40-70% of the original purchase price, depending on the software type, remaining time on the license, and current market demand.",
  'payment': "We offer multiple payment options including direct bank transfer, PayPal, and even cryptocurrency. Payments are typically processed within 48 hours of accepting our offer.",
  'security': "Your security is our priority. We use bank-level encryption for all transactions and never share your information with third parties without your explicit consent.",
  'types': "We accept licenses from all major software vendors including Microsoft, Adobe, Oracle, SAP, Autodesk, and many others. Both perpetual and subscription licenses are eligible.",
  'time': "The entire process typically takes 2-5 business days from submission to payment, with many transactions completing in under 48 hours.",
};

const exampleQuestions = [
  "How does the process work?",
  "How much value can I get for my licenses?",
  "What payment methods do you offer?",
  "Is my license information secure?",
  "What types of licenses do you accept?",
  "How long does the process take?",
];

const generateResponse = (message: string): string => {
  const lowerCaseMsg = message.toLowerCase();
  
  if (lowerCaseMsg.includes('process') || lowerCaseMsg.includes('how does it work') || lowerCaseMsg.includes('steps')) {
    return aiResponses['how'];
  } else if (lowerCaseMsg.includes('value') || lowerCaseMsg.includes('worth') || lowerCaseMsg.includes('price') || lowerCaseMsg.includes('offer')) {
    return aiResponses['value'];
  } else if (lowerCaseMsg.includes('payment') || lowerCaseMsg.includes('pay') || lowerCaseMsg.includes('money')) {
    return aiResponses['payment'];
  } else if (lowerCaseMsg.includes('secure') || lowerCaseMsg.includes('security') || lowerCaseMsg.includes('privacy')) {
    return aiResponses['security'];
  } else if (lowerCaseMsg.includes('type') || lowerCaseMsg.includes('accept') || lowerCaseMsg.includes('vendor')) {
    return aiResponses['types'];
  } else if (lowerCaseMsg.includes('time') || lowerCaseMsg.includes('long') || lowerCaseMsg.includes('fast')) {
    return aiResponses['time'];
  }
  
  return aiResponses['default'];
};

const ChatWidget: React.FC<ChatWidgetProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm SoftSell's AI assistant. How can I help you with selling your software licenses today?",
      sender: 'ai',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI thinking and typing
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(userMessage.text),
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleExampleQuestion = (question: string) => {
    setInputValue(question);
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={onToggle}
        className={`fixed bottom-5 right-5 z-50 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
        aria-label="Toggle chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      {/* Chat widget */}
      <div 
        className={`fixed bottom-20 right-5 z-50 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl transition-all duration-300 transform ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat header */}
        <div className="bg-blue-600 text-white rounded-t-lg p-4 flex items-center justify-between">
          <div className="flex items-center">
            <Bot size={20} className="mr-2" />
            <h3 className="font-bold">SoftSell Assistant</h3>
          </div>
          <button 
            onClick={onToggle}
            className="text-white hover:text-blue-100"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>
        
        {/* Chat messages */}
        <div className="p-4 h-80 overflow-y-auto bg-gray-50 dark:bg-gray-700">
          {messages.map(message => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white dark:bg-gray-600 text-gray-800 dark:text-white'
                }`}
              >
                <p>{message.text}</p>
                <span className={`text-xs block mt-1 ${
                  message.sender === 'user' ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white dark:bg-gray-600 rounded-lg p-3 max-w-[80%]">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        {/* Example questions */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {exampleQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleQuestion(question)}
                  className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full px-2 py-1 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}
        
        {/* Chat input */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className={`p-2 rounded-r-lg bg-blue-600 text-white ${
                !inputValue.trim() || isTyping
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-700'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
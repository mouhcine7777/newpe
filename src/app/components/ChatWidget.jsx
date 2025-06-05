"use client";
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm Public Events AI assistant. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatWindowRef = useRef(null);
  const chatButtonRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isOpen &&
        chatWindowRef.current &&
        !chatWindowRef.current.contains(event.target) &&
        chatButtonRef.current &&
        !chatButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);
    
    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const generateResponse = async (userMessage) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error('Error:', error);
      return "I apologize, but I'm having trouble connecting right now. Please try again later.";
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setIsLoading(true);

    setMessages(prev => [...prev, { 
      id: Date.now(), 
      text: userMessage, 
      isBot: false 
    }]);

    const aiResponse = await generateResponse(userMessage);
    
    setMessages(prev => [...prev, {
      id: Date.now() + 1,
      text: aiResponse,
      isBot: true
    }]);

    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-['Montserrat']">
      {/* Chat Toggle Button */}
      <button
        ref={chatButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#D71B1B] to-[#FF4D4D] text-white p-4 rounded-full shadow-lg hover:bg-[#b51717] transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#D71B1B] to-[#FF4D4D] rounded-full opacity-30 blur-sm animate-pulse -z-10"></div>
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div 
          ref={chatWindowRef}
          className="absolute bottom-16 right-0 w-96 h-[600px] bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#D71B1B] to-[#FF4D4D] text-white p-6 relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-pink-200 rounded-bl-full opacity-20"></div>
            <h3 className="font-bold text-lg relative z-10">Public Events AI Assistant</h3>
            <p className="text-xs mt-1 opacity-80 relative z-10">Your interactive event assistant</p>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-white rounded-full opacity-50"></div>
          </div>

          {/* Messages Container with Fixed Height */}
          <div className="flex-1 overflow-hidden">
            <div className="h-full p-6 space-y-6 overflow-y-auto custom-scrollbar" style={{backgroundImage: 'radial-gradient(circle at 20% 25%, rgba(215, 27, 27, 0.03) 0%, transparent 50%)'}}>
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-2xl shadow-sm transition-all duration-300 ${
                      message.isBot
                        ? 'bg-white text-black border border-gray-100'
                        : 'bg-gradient-to-r from-[#D71B1B] to-[#FF4D4D] text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white text-black p-4 rounded-2xl border border-gray-100">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-[#D71B1B] rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-[#D71B1B] rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-[#D71B1B] rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="p-6 border-t border-gray-100 bg-gray-50" style={{backgroundImage: 'linear-gradient(to right, rgba(215, 27, 27, 0.03), transparent)'}}>
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#D71B1B] focus:border-transparent transition-all duration-300 shadow-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                className={`bg-gradient-to-r from-[#D71B1B] to-[#FF4D4D] text-white p-3 rounded-xl transition-all duration-300 shadow-md ${
                  isLoading 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:shadow-lg transform hover:scale-105'
                }`}
                disabled={isLoading}
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #D71B1B, #FF4D4D);
          border-radius: 3px;
          opacity: 0.7;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #b51717, #e63939);
        }
      `}</style>
    </div>
  );
};

export default ChatWidget;
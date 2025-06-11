import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { useGroqChat, Message } from '../services/groqService';

interface ChatProps {
  className?: string;
}

const Chat: React.FC<ChatProps> = ({ className = '' }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Message[]>([
    {
      type: 'bot',
      message: "Hello! I'm here to help you learn more about Benjamin Hinson. What would you like to know about his skills, experience, or projects?",
    },
  ]);
  const { sendMessage, loading, error } = useGroqChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || loading) return;

    // Add user message to chat history
    const userMessage: Message = { type: 'user', message: message.trim() };
    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');
    
    // Show loading indicator
    setChatHistory(prev => [...prev, { type: 'bot', message: '...' }]);
    
    try {
      // Send message to Groq API
      const botResponse = await sendMessage([...chatHistory, userMessage]);
      
      // Replace loading indicator with actual response
      setChatHistory(prev => [...prev.slice(0, -1), botResponse]);
    } catch (err) {
      // Replace loading indicator with error message
      setChatHistory(prev => [
        ...prev.slice(0, -1), 
        { type: 'bot', message: 'Sorry, I encountered an error. Please try again.' }
      ]);
    }
  };

  return (
    <div className={`flex flex-col bg-black/50 backdrop-blur-sm border border-blue-500/30 rounded-xl overflow-hidden shadow-lg ${className}`}>
      {/* Chat header */}
      <div className="p-4 border-b border-blue-500/30 bg-blue-900/20">
        <h3 className="text-xl font-semibold text-blue-200">Ask Me Anything</h3>
        <p className="text-blue-300/70 text-sm">Powered by Groq AI (llama-3.1-8b-instant model)</p>
      </div>
      
      {/* Chat messages */}
      <div 
        ref={chatContainerRef}
        className="flex-grow p-4 overflow-y-auto max-h-[400px] space-y-4"
      >
        {chatHistory.map((chat, index) => (
          <div
            key={index}
            className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                chat.type === 'user'
                  ? 'bg-blue-600 text-white rounded-br-none'
                  : 'bg-blue-900/40 border border-blue-500/30 text-blue-200 rounded-bl-none'
              }`}
            >
              {chat.message === '...' ? (
                <div className="flex space-x-1 justify-center items-center h-6">
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
              ) : (
                <div className="whitespace-pre-wrap">{chat.message}</div>
              )}
            </div>
          </div>
        ))}
        {error && (
          <div className="p-2 bg-red-900/20 border border-red-500/30 text-red-300 rounded text-sm">
            Error: {error}
          </div>
        )}
      </div>
      
      {/* Chat input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-blue-500/30 bg-blue-900/10">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask me anything about Benjamin's profile..."
            className="flex-grow px-4 py-2 bg-blue-900/20 border border-blue-500/30 rounded-lg text-blue-100 placeholder:text-blue-400/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !message.trim()}
            className={`p-2 rounded-lg ${
              loading || !message.trim()
                ? 'bg-blue-700/50 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-500'
            } text-white transition-colors duration-200`}
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;

import React, { useState } from 'react';
import { ChatBubble } from '../components/ChatBubble';
import { ChatHistory } from '../components/ChatHistory';
import { Plus, X, User, Bot, Send, Menu } from 'lucide-react';
import { chatHistory } from '../data/chatHistory';
import { useScrollToBottom } from '../hooks/useScrollToBottom';
import { useNavigate } from 'react-router-dom';

export const ChatPage = ({ messages, handleSendMessage, isTyping, messagesEndRef }) => {
  const [newMessage, setNewMessage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  useScrollToBottom(messagesEndRef, [messages, isTyping]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Sidebar toggle button for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-lg bg-white shadow border border-gray-200"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open chat history"
        style={{ display: sidebarOpen ? 'none' : 'block' }}
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
      {/* Sidebar/Chat History */}
      <aside className={`w-full md:w-80 bg-white shadow-lg border-r border-gray-200 flex flex-col z-40 md:relative fixed md:top-0 md:left-0 top-0 left-0 h-full md:h-auto transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}> 
        {/* Close button for mobile */}
        <button
          className="absolute top-4 right-4 md:hidden p-2 rounded-lg hover:bg-gray-100 z-50"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close chat history"
        >
          <X className="w-6 h-6 text-gray-600" />
        </button>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Chat History</h2>
          </div>
          <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all flex items-center justify-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Chat</span>
          </button>
        </div>
        <ChatHistory chatHistory={chatHistory} />
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">John Doe</p>
              <p className="text-xs text-gray-500">Premium Account</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col h-screen max-h-screen">
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">AI Assistant</h1>
                <p className="text-sm text-gray-500">Online now</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/dashboard')}
              className="mt-2 sm:mt-0 px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors w-full sm:w-auto"
            >
              Back to Dashboard
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-3 sm:p-6 space-y-3 sm:space-y-4 min-h-0">
          {messages.map((message) => (
            <ChatBubble key={message.id} message={message} />
          ))}

          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="max-w-xs lg:max-w-md px-4 py-2 rounded-2xl bg-white border border-gray-200 text-gray-900 shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce delay-150"></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="bg-white border-t border-gray-200 p-3 sm:p-6 flex-shrink-0">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (newMessage.trim()) {
                      handleSendMessage(newMessage.trim());
                      setNewMessage('');
                    }
                  }
                }}
                placeholder="Type your message..."
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none text-sm sm:text-base"
              />
            </div>
            <button
              onClick={() => {
                if (newMessage.trim()) {
                  handleSendMessage(newMessage.trim());
                  setNewMessage('');
                }
              }}
              disabled={!newMessage.trim()}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 sm:p-3 rounded-xl hover:from-purple-600 hover:to-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

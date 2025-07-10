import React from 'react';
import { BarChart3, MessageCircle, Home, Settings, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DashboardSidebar = ({ mobileMenuOpen, setMobileMenuOpen }) => {
  const navigate = useNavigate();
  return (
    <aside className={`bg-white shadow-lg border-r border-gray-200 w-64 min-h-screen fixed z-30 top-0 left-0 transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:relative md:translate-x-0 md:block`}>
      {/* Close button for mobile */}
      <button
        className="absolute top-4 right-4 md:hidden p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setMobileMenuOpen(false)}
        aria-label="Close sidebar"
        style={{ display: mobileMenuOpen ? 'block' : 'none' }}
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>
      <nav className="p-6 space-y-2 mt-10 md:mt-0">
        <button
          onClick={() => navigate('/dashboard')}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg bg-purple-50 text-purple-700 border border-purple-200"
        >
          <BarChart3 className="w-5 h-5" />
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => navigate('/chat')}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700"
        >
          <MessageCircle className="w-5 h-5" />
          <span>AI Chat</span>
        </button>
        <button
          onClick={() => navigate('/')}
          className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700"
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>
        <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700">
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
      </nav>
    </aside>
  );
};

import React from 'react';
import { motion } from 'framer-motion';

export const ChatBubble = ({ message }) => (
  <div
    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
  >
    <motion.div
      initial={{ opacity: 0, y: 20, rotateY: message.type === 'user' ? 30 : -30 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(139,92,246,0.10)', rotateY: message.type === 'user' ? 8 : -8 }}
      whileTap={{ scale: 0.98, rotateY: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 16 }}
      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl shadow-lg ${message.type === 'user'
        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
        : 'bg-white border border-gray-200 text-gray-900'} relative`}
      style={{
        perspective: 600,
        boxShadow: message.type === 'user'
          ? '0 4px 24px 0 rgba(168,139,250,0.18), 0 1.5px 6px 0 rgba(244,114,182,0.10)'
          : '0 2px 12px 0 rgba(139,92,246,0.08)'
      }}
    >
      <p className="text-sm drop-shadow-sm">{message.content}</p>
      <p
        className={`text-xs mt-1 ${message.type === 'user'
          ? 'text-purple-100'
          : 'text-gray-500'}`}
      >
        {message.timestamp}
      </p>
      {/* 3D light reflection effect */}
      <span className={`absolute top-0 left-0 w-1/2 h-1/3 rounded-tl-2xl ${message.type === 'user' ? 'bg-white/10' : 'bg-purple-200/10'} blur-lg pointer-events-none`} />
    </motion.div>
  </div>
);

import React from 'react';

export const ChatBubble = ({ message }) => (
  <div
    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
  >
    <div
      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${message.type === 'user'
        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
        : 'bg-white border border-gray-200 text-gray-900 shadow-sm'}`}
    >
      <p className="text-sm">{message.content}</p>
      <p
        className={`text-xs mt-1 ${message.type === 'user'
          ? 'text-purple-100'
          : 'text-gray-500'}`}
      >
        {message.timestamp}
      </p>
    </div>
  </div>
);

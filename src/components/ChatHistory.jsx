import React from 'react';

export const ChatHistory = ({ chatHistory, onSelectChat }) => (
  <div className="flex-1 overflow-y-auto p-4 space-y-2">
    {chatHistory.map((chat) => (
      <div
        key={chat.id}
        className="p-3 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all"
        onClick={() => onSelectChat && onSelectChat(chat)}
      >
        <h3 className="font-medium text-gray-900 text-sm mb-1">{chat.title}</h3>
        <p className="text-xs text-gray-500 mb-2">{chat.preview}</p>
        <span className="text-xs text-gray-400">{chat.time}</span>
      </div>
    ))}
  </div>
);

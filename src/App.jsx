
import React, { useState, useRef } from 'react';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { ChatPage } from './pages/ChatPage';
import { initialMessages } from './data/initialMessages';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [messages, setMessages] = useState(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSendMessage = (newContent) => {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      content: newContent,
      timestamp,
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // simple AI response simulation
    setTimeout(() => {
      const aiMessage = {
        id: userMessage.id + 1,
        type: 'assistant',
        content: 'I understand your question. Let me provide you with a comprehensive analysis based on the latest data and trends...',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const sharedProps = {
    setCurrentPage,
  };

  return (
    <>
      {currentPage === 'landing' && <LandingPage {...sharedProps} />}
      {currentPage === 'dashboard' && <DashboardPage {...sharedProps} />}
      {currentPage === 'chat' && (
        <ChatPage
          {...sharedProps}
          messages={messages}
          handleSendMessage={handleSendMessage}
          isTyping={isTyping}
          messagesEndRef={messagesEndRef}
        />
      )}
    </>
  );
};

export default App;

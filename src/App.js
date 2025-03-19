import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Speakers from './pages/speakers';
import Events from './pages/events';
import Chat from './components/chat';
import './styles/global.css'; // Import global styles

const App = () => {
  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      const theme = hour >= 6 && hour < 18 ? 'day' : 'night';
      document.documentElement.setAttribute('data-theme', theme);
    };

    updateTheme();
    window.addEventListener('resize', updateTheme); // Optional: Update on resize
    return () => window.removeEventListener('resize', updateTheme);
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default App;
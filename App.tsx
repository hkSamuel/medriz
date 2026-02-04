
import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { BackgroundAnimation } from './components/BackgroundAnimation';
import Home from './pages/Home';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import GamePage from './pages/GamePage';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-black border-b-4 border-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-black italic tracking-tighter group">
          MED <span className="text-[#39ff14] group-hover:text-fuchsia-500 transition-colors">RIZ</span> TIMELINE
        </Link>
        <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm font-black uppercase">
          <Link to="/" className={`${isActive('/') ? 'text-[#39ff14]' : 'hover:text-[#39ff14]'}`}>Home</Link>
          <Link to="/article/ancient" className={`${location.pathname.includes('/ancient') ? 'text-yellow-400' : 'hover:text-yellow-400'}`}>Ancient</Link>
          <Link to="/article/switch-on" className={`${location.pathname.includes('/switch-on') ? 'text-blue-400' : 'hover:text-blue-400'}`}>Science</Link>
          <Link to="/article/modern" className={`${location.pathname.includes('/modern') ? 'text-red-500' : 'hover:text-red-500'}`}>Modern</Link>
          <Link to="/article/future" className={`${location.pathname.includes('/future') ? 'text-cyan-400' : 'hover:text-cyan-400'}`}>Future</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-purple-500' : 'hover:text-purple-500'}`}>About</Link>
          <Link to="/game" className={`px-4 py-2 border-2 transition-all transform hover:scale-110 active:scale-95 ${isActive('/game') ? 'bg-white text-black border-black' : 'animate-game-btn'}`}>
            🕹️ Game
          </Link>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="relative min-h-screen">
        <BackgroundAnimation />
        <Navbar />
        <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </main>
        
        <footer className="relative z-10 py-10 border-t-4 border-white text-center mt-10">
          <p className="font-bold uppercase tracking-widest text-gray-500">
            Learn our past, know our future @ 2026
          </p>
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
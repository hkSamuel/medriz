
import React from 'react';
import { Link } from 'react-router-dom';

const ARTICLES = [
  { id: 'ancient', title: 'Ancient Glow-Up', sub: 'Herbs & Hippocrates', color: 'bg-yellow-400', icon: '🏺', time: '10,000 BC - 500 AD' },
  { id: 'switch-on', title: 'Science Switch-On', sub: 'Renaissance & Germs', color: 'bg-blue-500', icon: '🔬', time: '1400 - 1899' },
  { id: 'modern', title: 'Power-Up Era', sub: 'Drugs & Scans', color: 'bg-red-500', icon: '💊', time: '1900 - 1999' },
  { id: 'future', title: 'Full Sci-Fi', sub: 'AI & Gene Editing', color: 'bg-cyan-400', icon: '🤖', time: '2000 - 2026+' },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="text-center py-20 space-y-6">
        <h1 className="text-6xl md:text-9xl font-black leading-none tracking-tighter uppercase italic">
          History <br />
          <span className="text-black bg-[#39ff14] px-4">Got Riz</span>
        </h1>
        <p className="text-xl md:text-3xl font-bold max-w-2xl mx-auto uppercase">
          Forget dusty textbooks. We're tracking medicine's glow-up from herbs to cyborgs. No cap.
        </p>
      </section>

      {/* Timeline Section */}
      <div className="relative max-w-4xl mx-auto px-4">
        {/* The Vertical Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-2 bg-[#39ff14] -translate-x-1/2 z-0 hidden md:block"></div>
        <div className="absolute left-8 md:hidden top-0 bottom-0 w-2 bg-[#39ff14] z-0"></div>

        {/* Sticky Time Traveler / Spaceship */}
        <div className="sticky top-32 z-30 pointer-events-none hidden md:block" style={{ marginLeft: 'calc(50% - 40px)' }}>
          <div className="text-6xl animate-bounce">🛸</div>
        </div>
        <div className="sticky top-32 z-30 pointer-events-none md:hidden ml-1">
          <div className="text-5xl animate-bounce">🛸</div>
        </div>

        {/* Timeline Items */}
        <div className="space-y-24 relative z-10">
          {ARTICLES.map((art, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={art.id} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* Spacer for side-by-side on desktop */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 bg-black border-4 border-[#39ff14] rounded-full -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className={`w-4 h-4 rounded-full ${art.color}`}></div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                  <Link 
                    to={`/article/${art.id}`}
                    className={`block sharp-card ${art.color} p-6 md:p-8 text-black group transition-transform hover:scale-105`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-black uppercase tracking-widest bg-black text-white px-2 py-1">
                        {art.time}
                      </span>
                      <span className="text-4xl group-hover:rotate-12 transition-transform">{art.icon}</span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-black uppercase mb-2 leading-none italic">{art.title}</h3>
                    <p className="font-bold opacity-90 uppercase text-sm mb-4">{art.sub}</p>
                    <span className="inline-block bg-black text-white px-4 py-2 text-xs font-bold uppercase border-2 border-black hover:bg-transparent hover:text-black transition-colors">
                      Read More →
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Game CTA Section */}
      <section className="bg-fuchsia-600 border-4 border-white p-10 mt-20 relative overflow-hidden group max-w-5xl mx-auto">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <h2 className="text-5xl font-black uppercase mb-4 italic">Test Your Riz?</h2>
            <p className="text-xl font-bold uppercase mb-6">Play the medical matching game. Can you handle the eras or will the germs take over?</p>
            <Link to="/game" className="inline-block bg-black text-white px-8 py-4 font-bold uppercase border-2 border-white hover:bg-white hover:text-black transition-colors">
              Play Game →
            </Link>
          </div>
          <div className="text-9xl group-hover:rotate-12 transition-transform select-none">🎮</div>
        </div>
      </section>
    </div>
  );
};

export default Home;

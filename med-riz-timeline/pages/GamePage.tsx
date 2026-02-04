
import React, { useState, useEffect, useMemo } from 'react';

interface GameItem {
  id: string;
  text: string;
  type: 'event' | 'era';
  matchId: string;
}

const GAME_PAIRS = [
  {
    eventId: 'e1',
    eventText: "Hippocrates pulling up to say sickness is biology, not demons.",
    eraId: 'era1',
    eraText: "10,000 BC - 500 AD",
    matchId: '1'
  },
  {
    eventId: 'e2',
    eventText: "Vesalius dissecting humans to prove the old 'TopG' Roman books were cap.",
    eraId: 'era2',
    eraText: "1400 - 1899",
    matchId: '2'
  },
  {
    eventId: 'e3',
    eventText: "Alexander Fleming finding life-saving mold in a messy petri dish.",
    eraId: 'era3',
    eraText: "1900 - 1999",
    matchId: '3'
  },
  {
    eventId: 'e4',
    eventText: "Nanobots swimming in your blood to ratio viruses in real-time.",
    eraId: 'era4',
    eraText: "2000 - 2026+",
    matchId: '4'
  }
];

const GermStorm: React.FC = () => {
  const [germs] = useState(() => Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.5,
    size: 40 + Math.random() * 60,
    speed: 1 + Math.random() * 2
  })));

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none overflow-hidden bg-green-900/40 backdrop-blur-sm animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-9xl font-black text-[#39ff14] uppercase italic drop-shadow-2xl z-10 rotate-12">
          WEAAAKKK
        </h2>
      </div>
      {germs.map((germ) => (
        <div
          key={germ.id}
          className="absolute top-[-100px] text-6xl animate-bounce"
          style={{
            left: `${germ.left}%`,
            fontSize: `${germ.size}px`,
            transition: `top ${germ.speed}s linear`,
            animation: `fall ${germ.speed}s linear infinite`,
            animationDelay: `${germ.delay}s`
          }}
        >
          🦠
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const GamePage: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [selectedEra, setSelectedEra] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<Set<string>>(new Set());
  const [showGerms, setShowGerms] = useState(false);
  const [score, setScore] = useState(0);

  // Shuffle items for the game
  const events = useMemo(() => 
    GAME_PAIRS.map(p => ({ id: p.eventId, text: p.eventText, matchId: p.matchId }))
    .sort(() => Math.random() - 0.5)
  , []);
  
  const eras = useMemo(() => 
    GAME_PAIRS.map(p => ({ id: p.eraId, text: p.eraText, matchId: p.matchId }))
    .sort(() => Math.random() - 0.5)
  , []);

  const handleEventClick = (id: string, matchId: string) => {
    if (matchedIds.has(matchId)) return;
    setSelectedEvent(id === selectedEvent ? null : id);
  };

  const handleEraClick = (id: string, matchId: string) => {
    if (matchedIds.has(matchId)) return;
    setSelectedEra(id === selectedEra ? null : id);
  };

  useEffect(() => {
    if (selectedEvent && selectedEra) {
      const event = GAME_PAIRS.find(p => p.eventId === selectedEvent);
      const era = GAME_PAIRS.find(p => p.eraId === selectedEra);

      if (event && era && event.matchId === era.matchId) {
        // Correct match!
        setMatchedIds(prev => new Set([...prev, event.matchId]));
        setScore(s => s + 1);
        setSelectedEvent(null);
        setSelectedEra(null);
      } else {
        // Wrong match! Trigger Germ Storm
        setShowGerms(true);
        setTimeout(() => setShowGerms(false), 2000);
        setSelectedEvent(null);
        setSelectedEra(null);
      }
    }
  }, [selectedEvent, selectedEra]);

  const resetGame = () => {
    setMatchedIds(new Set());
    setScore(0);
    setSelectedEvent(null);
    setSelectedEra(null);
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-12">
      {showGerms && <GermStorm />}

      <div className="text-center space-y-4">
        <h1 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter">
          Era <span className="text-[#39ff14]">Matcher</span>
        </h1>
        <p className="text-xl md:text-2xl font-bold uppercase text-gray-400">
          Match the medical event to its historical era. If you fail, there will be a big trouble:)
        </p>
        <div className="flex justify-center gap-8 py-4">
          <div className="bg-white text-black px-6 py-2 font-black text-2xl uppercase border-4 border-[#39ff14]">
            Score: {score}/4
          </div>
          {matchedIds.size === 4 && (
            <button 
              onClick={resetGame}
              className="bg-[#39ff14] text-black px-6 py-2 font-black text-2xl uppercase hover:bg-white transition-colors border-4 border-black"
            >
              Play Again
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Events Column */}
        <div className="space-y-4">
          <h2 className="text-3xl font-black uppercase italic mb-6 border-b-4 border-[#39ff14] inline-block">Medical Scenarios</h2>
          {events.map((e) => {
            const isMatched = matchedIds.has(e.matchId);
            const isSelected = selectedEvent === e.id;
            return (
              <button
                key={e.id}
                disabled={isMatched}
                onClick={() => handleEventClick(e.id, e.matchId)}
                className={`w-full text-left p-6 border-4 font-bold text-lg md:text-xl transition-all uppercase
                  ${isMatched ? 'bg-zinc-800 border-zinc-700 opacity-30 line-through text-gray-500' : 
                    isSelected ? 'bg-[#39ff14] border-black text-black scale-105' : 
                    'bg-black border-white hover:border-[#39ff14] hover:bg-zinc-900'}
                `}
              >
                {isMatched ? '✅ Correct' : e.text}
              </button>
            );
          })}
        </div>

        {/* Eras Column */}
        <div className="space-y-4">
          <h2 className="text-3xl font-black uppercase italic mb-6 border-b-4 border-fuchsia-500 inline-block">Time Eras</h2>
          {eras.map((era) => {
            const isMatched = matchedIds.has(era.matchId);
            const isSelected = selectedEra === era.id;
            return (
              <button
                key={era.id}
                disabled={isMatched}
                onClick={() => handleEraClick(era.id, era.matchId)}
                className={`w-full text-center p-6 border-4 font-black text-2xl md:text-3xl transition-all
                  ${isMatched ? 'bg-zinc-800 border-zinc-700 opacity-30 text-gray-500' : 
                    isSelected ? 'bg-fuchsia-500 border-black text-black scale-105' : 
                    'bg-black border-white hover:border-fuchsia-500 hover:bg-zinc-900'}
                `}
              >
                {era.text}
              </button>
            );
          })}
        </div>
      </div>

      {matchedIds.size === 4 && (
        <div className="text-center pt-10 animate-bounce">
          <div className="inline-block bg-[#39ff14] text-black text-5xl font-black p-8 border-8 border-white rotate-2">
            VIBE CHECK: PASSED ✅
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePage;

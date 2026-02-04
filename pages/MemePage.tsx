
import React from 'react';

const MEMES = [
  { id: 1, text: "Plague doctor showing up with a bird mask: 'I have arrived to fix your vibe'", emoji: "🩺🎭" },
  { id: 2, text: "Surgeons in 1500: 'Oops, dropped my saw. Anyway...'", emoji: "🪚🩸" },
  { id: 3, text: "Your immune system after seeing 1 bacteria: 'IT'S GO TIME! GOATED!'", emoji: "🦠⚔️" },
  { id: 4, text: "Vaccines entering the chat: 'Ratioed the Polio virus'", emoji: "💉📈" },
];

const MemePage: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-7xl font-black uppercase italic mb-4 text-pink-500">
          MEME & <span className="text-white">MORE</span>
        </h1>
        <p className="text-2xl font-bold uppercase text-gray-400">Low Effort Memes, High Quality History.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MEMES.map(meme => (
          <div key={meme.id} className="bg-zinc-900 border-4 border-white p-8 hover:bg-white hover:text-black transition-all group cursor-default">
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{meme.emoji}</div>
            <p className="text-2xl font-black uppercase leading-tight italic">"{meme.text}"</p>
          </div>
        ))}
      </div>

      <div className="bg-[#39ff14] text-black p-12 border-4 border-black mt-20">
        <h2 className="text-4xl font-black uppercase mb-4 italic">And More?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black text-white p-6 border-2 border-white">
            <h3 className="font-black uppercase text-xl mb-2">Quiz Mode</h3>
            <p className="font-bold uppercase text-sm">Test your med rizz knowledge. [Coming Soon]</p>
          </div>
          <div className="bg-black text-white p-6 border-2 border-white">
            <h3 className="font-black uppercase text-xl mb-2">Community Glow-up</h3>
            <p className="font-bold uppercase text-sm">Share your own historical medical facts. [Coming Soon]</p>
          </div>
          <div className="bg-black text-white p-6 border-2 border-white">
            <h3 className="font-black uppercase text-xl mb-2">Doctor's Lounge</h3>
            <p className="font-bold uppercase text-sm">Ask real med students anything. [Coming Soon]</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center pt-10">
        <div className="bg-white text-black text-4xl font-black px-10 py-5 rotate-3 hover:-rotate-3 transition-transform cursor-pointer border-4 border-black">
          VIBE CHECK PASSED ✅
        </div>
      </div>
    </div>
  );
};

export default MemePage;

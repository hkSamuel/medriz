
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12 py-10">
      <section className="relative">
        <h1 className="text-7xl font-black uppercase italic mb-8">
          The Squad <br />
          <span className="text-[#39ff14] bg-black border-2 border-[#39ff14] px-2">Behind the Riz</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="sharp-card bg-zinc-900 p-8 border-4 border-white">
            <h2 className="text-3xl font-black uppercase text-[#39ff14] mb-4">Our Mission</h2>
            <p className="text-lg font-bold leading-relaxed">
              We are a group of medical students from the University of Hong Kong that want you to learn medical history in a more interesting way. Learn our past, know our future. Let's goooooo!.
            </p>
          </div>
          <div className="sharp-card bg-zinc-900 p-8 border-4 border-white">
            <h2 className="text-3xl font-black uppercase text-fuchsia-500 mb-4">Who is this for?</h2>
            <p className="text-lg font-bold leading-relaxed">
              Anyone (especially teens) who thinks history of medicine is goated. 
              Whether you're into history or medicine, we've got you covered.
              
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

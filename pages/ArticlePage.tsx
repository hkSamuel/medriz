
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ARTICLE_CONTENT: Record<string, any> = {
  'ancient': {
    title: "Ancient Medicine's OG Glow-Up",
    subtitle: "Ancient Vibes: Herbs & Spirits",
    color: 'text-yellow-400',
    bg: 'bg-yellow-400',
    didYouKnow: "Ancient Egyptian surgeons used to drill holes in people's skulls (trepanning) to let out 'demons'. Imagine having a headache and the doctor says 'Chat, we gotta open the hood.' Absolute madness. -1000 aura for the patient.",
    content: [
      "Ancient medicine was straight up mid but also kinda bussin' in its own way? Like, back in the day, people were fr convinced that getting sick was some kind of curse from the gods or literally demons living inside you. No cap.",
      "Egyptian doctors were out here mixing herbs and doing ritual sacrifices like, 'yeah this gonna work' and tbh? Sometimes it did. They used honey (which actually slaps for wounds), willow bark (literally proto-aspirin), and they were lowkey organized about it. China had acupuncture mapped out before Europe even knew germs existed—aura was different back then, you know?",
      "But then Hippocrates pulled up in ancient Greece like, 'Chat, hear me out... what if illness is just biology and not demonic possession?' That was THE plot twist.",
      "Bro literally said the body was balanced between four humors—blood, phlegm, yellow bile, black bile—and if you were sick, it was just an imbalance. Giving anatomy, giving science, giving reasoning. Hippocrates started a whole medical school (Kos Island—that's the real founding father energy) and dropped the Hippocratic Oath, which is still the blueprint doctors use today.",
      "Our homeboy fundamentally changed medicine's aura from 'vibes-based healing' to 'let's observe, document, and actually understand the body.' The glow-up was REAL."
    ]
  },
  'switch-on': {
    title: "The Science Switch-On",
    subtitle: "Renaissance to 19th Century: When Medicine Got Serious",
    color: 'text-blue-400',
    bg: 'bg-blue-400',
    didYouKnow: "Before germ theory dropped, surgeons used to flex their skills by wearing blood-stained coats. The dirtier the coat, the more 'experienced' you looked. It was giving major main character energy but also giving 'I am literally a walking biohazard.' The bacteria were feastin' fr.",
    content: [
      "Medieval medicine was giving 'lost in the sauce,' but the Renaissance? Renaissance said 'lock in' and started questioning everything. Leonardo da Vinci was sketching the heart and lungs with such precision it's giving main character energy.",
      "But the REAL one who ate and left no crumbs was Andreas Vesalius (1543), a Flemish anatomist who actually dissected human bodies instead of trusting some ancient Roman dude's notes written from dead animals. He published this absolute UNIT of a book (De Humani Corporis Fabrica) that corrected centuries of medical cap—basically proving Galen(the original TopG) was cooked.",
      "Then enters William Harvey (1628), the sigma among sigmas. Bro conducted experiments so clean, so precise, that he proved the heart is literally a pump and blood circulates in a loop. Galen had said blood is made in the liver and gets consumed—cap af. Harvey was like, 'Nah fam, mathematically that's impossible,' and he proved it with rope-tying experiments and vivisections.",
      "Then the 1700s-1800s hit and the glow-up accelerated. Pasteur and Koch dropped germ theory (1870s-1880s)—the plot twist that disease comes from microorganisms, not bad air or imbalanced humors. That was genuinely fire.",
      "Edward Jenner (1796) invented the vaccine by using cowpox to prevent smallpox—that's literally biological hacking, bestie. Joseph Lister said, 'What if we just... sterilized surgical fields?' and suddenly surgery didn't mean 'probably dying of infection' anymore. +10,000 aura points.",
      "By 1895, X-rays dropped (Röntgen) and surgery could finally be done under anesthesia (chloroform). The collective aura of medical science? Skyrocketing. That's not just a W, that's a whole franchise winning streak. 📈"
    ]
  },
  'modern': {
    title: "Super-Drugs, Scans and Surgery",
    subtitle: "20th Century: The Power-Up Era",
    color: 'text-red-500',
    bg: 'bg-red-500',
    didYouKnow: "Penicillin was discovered because Alexander Fleming was lowkey messy and left a petri dish out while he went on vacation. He came back to find the mold killing bacteria. Imagine being so goated that your laundry pile discovers a life-saving drug. Unmatched rizz.",
    content: [
      "The 1900s were literally medicine's anime arc. Alexander Fleming (1928) was just vibing in his lab when he noticed penicillin mold killed bacteria. That's not luck, that's destiny, fam.",
      "Enter Albert Alexander, an Oxford policeman who scratched his face pruning roses (-999 aura). His face got infected and was legitimately falling apart—abscess city. Doctors were about to remove his eye. Then they gave him penicillin, and within 24 hours he started healing. Penicillin was the real cheat code. By D-Day, infections that meant amputation? Cured. The aura was unmatched. 💊",
      "Selman Waksman discovered streptomycin (1944)—tuberculosis, the world's killer for centuries, suddenly had a counter. Infections were cooked.",
      "Meanwhile, others said 'Chat, why not get surgicaalllll?' Christiaan Barnard did the first human heart transplant (1967)—that's not a surgery, that's a statement. Cardiac bypass machines let surgeons operate on stationary hearts.",
      "Imaging tech ascended. CT scans (1971) let doctors see inside without cutting. MRI (1970s) was even more insane—seeing your organs in 3D without surgery? That's absolutely bussin', no cap.",
      "Chemotherapy emerged from mustard gas research (kinda dark backstory ngl), but suddenly cancer cells could be targeted. Sidney Farber showed leukemia could be induced into remission (1948)—proof cancer wasn't an immediate death sentence. Medicine went from 'let's hope this works' to 'we can literally edit your cells, transplant organs, and bomb cancer into oblivion.' Peak 20th century.. 🔥"
    ]
  },
  'future': {
    title: "AI Docs, Genes and Future Tech",
    subtitle: "21st Century: Medicine Goes Full Sci-Fi",
    color: 'text-cyan-400',
    bg: 'bg-cyan-400',
    didYouKnow: "Scientists are currently working on nanobots that can literally swim through your bloodstream to fix things. It's giving 'Magic School Bus' vibes but with 100% more rizz. Soon, your immune system will have a mechanical squad to help it ratio viruses. Absolute cinema.",
    content: [
      "Okay so 2024-2026 medicine is literally snatched. We're in the 'mind is blown' era.",
      "CRISPR-Cas9 (2012 onwards) is the main character. Jennifer Doudna and Emmanuelle Charpentier basically dropped the genetic cheat code—molecular scissors that edit DNA like it's Canva for your genome. Sickle cell patients? Cured. Thalassemia? No cap, fixed. That's not medicine, that's resurrection. The aura went psycho-insane.",
      "Then AI walked in and said, 'I'm helping too, bestie.' AI algorithms now read X-rays faster than radiologists. Google's AlphaFold solved protein folding (2020)—a 50-year unsolved problem—in literally months. That's OP energy.",
      "Telemedicine said 'gates open, barriers down.' During COVID, virtual doctor visits went crazy. That's giving accessibility, no joke.",
      "CAR-T cell therapy (2017+) is where it gets truly unhinged. Scientists literally reprogram your immune cells to hunt cancer like heat-seeking missiles. 85%+ cure rates? That's a universe-altering W.",
      "3D printing organs—yep, scientists are printing hearts and lungs from your own cells. Organ transplant waitlists? Potentially obsolete. Aura? Astronomical.",
      "Robotic surgery (da Vinci robots) is performing with precision that makes human hands look mid. Surgeons operate from across the globe now. Literally sci-fi. 🤖",
      "Precision medicine treats your specific genes, not generic 'cancer.' Tumor DNA gets sequenced; your drug is personalized. The collective vibe in 2025? We're not just treating disease—we're preventing it, predicting it, and editing it at a molecular level. It’s absolute cinema.. 🧬⚡🔬"
    ]
  }
};

const ArticlePage: React.FC = () => {
  const { id } = useParams();
  const article = ARTICLE_CONTENT[id || ''] || ARTICLE_CONTENT['ancient'];

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-block mb-8 text-xl font-bold uppercase hover:underline">← Back to Timeline</Link>
      
      <div className={`p-8 border-4 border-white mb-10 ${article.bg} text-black`}>
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-none mb-4">{article.title}</h1>
        <p className="text-lg md:text-xl font-bold uppercase opacity-90">{article.subtitle}</p>
      </div>

      <div className="bg-black border-4 border-white p-6 md:p-12 relative">
        <div className="prose prose-invert prose-xl max-w-none font-medium text-gray-100 leading-relaxed space-y-8">
          {article.content.map((p: string, i: number) => (
            <p key={i} className="text-xl md:text-2xl font-bold">
              {p}
            </p>
          ))}
        </div>
        
        <div className={`absolute -top-4 -right-4 w-12 h-12 ${article.bg} border-4 border-white flex items-center justify-center font-black text-black text-2xl`}>
          !
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white text-black p-6 border-4 border-black">
          <h4 className="font-black uppercase text-xl mb-2">Did You Know?</h4>
          <p className="font-bold uppercase text-sm leading-tight">
            {article.didYouKnow}
          </p>
        </div>
        <div className={`p-6 border-4 border-black ${article.bg} text-black`}>
          <h4 className="font-black uppercase text-xl mb-2">Keep Scrolling</h4>
          <p className="font-bold uppercase text-sm">Don't stop the glow-up. Check out the other eras of medical rizz.</p>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;

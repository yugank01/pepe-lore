import React from "react";
import pepe1 from "../assets/pepe1.svg";
import pepe2 from "../assets/pepe2.svg";
import pepe3 from "../assets/pepe3.svg";

const PepeLore = () => {
  return (
    <section className="bg-[#0d1126] text-white px-6 py-16 text-center">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-9xl font-extrabold mb-4">PEPE LORE</h1>
        <p className="text-sm md:text-base text-white font-medium max-w-3xl mx-auto mb-28 leading-relaxed">
          Everyone knows Pepe – but few know the lore.
          <br />
          Born from Matt Furie’s feel good man comic, co-opted, rejected,
          revived — and now immortalized in crypto. Pepe isn’t just a meme. He’s
          a myth, shaped by the internet and remixed through time.
          <br />
          This is Pepe Lore — the story behind the frog.
        </p>

        {/* $LORE label */}

        {/* Lore box */}
        <div className="bg-white text-black p-4 md:p-6 border-2 border-lime-500 shadow-lg">
          <div className="bg-black relative -top-20 text-white px-8 py-2 inline-block font-bold text-4xl md:text-7xl rotate-[-2deg] border-2 border-lime-400 shadow-lg shadow-lime-300">
            $LORE
          </div>
          {/* Upper text */}
          <div className="flex w-full justify-center items-center text-left">
            <p className="text-sm font-semibold mb-4 relative -top-8 max-w-3xl border p-2 rounded-lg">
              This isn’t a tribute. It’s a continuation. <br />
              <span className="font-semibold">
                The community took Rare Pepes and gave them rhythm. Mo Beats’
                Righteous became a soundtrack. And together, it became a new
                mythology — not owned, just known.
              </span>
            </p>
          </div>

          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
            <img src={pepe1} alt="Pepe 1" className="rounded" />
            <img src={pepe2} alt="Pepe 2" className="rounded" />
            <img src={pepe3} alt="Pepe 3" className="rounded" />
          </div>

          {/* Bottom text */}
          <div className="flex w-full justify-center items-center text-left">
            <p className="text-sm font-semibold border p-2 rounded-lg">
              Why this coin?
              <br />
              <span className="font-semibold">
                Because Lore can’t be bought. It’s passed down. <br />
                Pepe Lore isn’t a claim. It’s an alignment. A digital relic
                carried forward by those who get it. The mystery is part of the
                magic.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PepeLore;

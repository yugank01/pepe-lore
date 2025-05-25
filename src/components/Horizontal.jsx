import React from 'react';

const Horizontal = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-black text-white py-2">
      <div className="inline-block animate-marquee">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="mx-6 font-bold text-sm md:text-base">
            Pepe Lore
          </span>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }

          .animate-marquee {
            display: inline-block;
            white-space: nowrap;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Horizontal;

import React from 'react';

const Tokenomics = () => {
  const tokenAddress = 'CA - ';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress);
    alert('Address copied to clipboard!');
  };

  return (
    <div className="max-w-5xl mx-auto bg-white border-4 border-black rounded-md shadow-lg">
      {/* Title */}
      <div className="relative -top-6 flex justify-center">
        <div className="bg-black text-white px-6 py-2 text-3xl sm:text-5xl font-extrabold rotate-[-2deg] shadow-lime-400 shadow-md">
          TOKENOMICS
        </div>
      </div>

      {/* Token Info + Distribution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 pb-4">
        {/* Token Info */}
        <div className="bg-lime-400 border border-black rounded-md p-4">
          <div className="bg-black relative -top-[1.75rem] -left-3 text-white inline-block px-2 py-1 text-sm font-bold">
            TOKEN INFO
          </div>
          <div className="text-sm font-medium space-y-3">
            <p>
              <span className="font-bold">Ticker</span><br />
              $Lore
            </p>
            <p>
              <span className="font-bold">Network</span><br />
              ETH
            </p>
            <p>
              <span className="font-bold">Total Supply</span><br />
              1,000,000,000
            </p>
          </div>
        </div>

        {/* Distribution */}
        <div className="bg-lime-400 border border-black rounded-md p-4 flex flex-col items-center justify-center">
          <div className="bg-black relative -top-[1.75rem] -left-3 text-white inline-block px-2 py-1 text-sm font-bold mb-2 self-start">
            DISTRIBUTION
          </div>
          <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-3">
            <div className="w-full h-full rounded-full border-[20px] border-black" />
          </div>
          <div className="text-sm text-center">
            <span className="inline-block w-3 h-3 bg-black rounded-full mr-2 align-middle"></span>
            community own (100%)
          </div>
        </div>
      </div>

      {/* Token Address */}
      <div className="bg-lime-400 border border-black rounded-md p-4 mx-6 mb-6">
        <div className="bg-black relative -top-[1.75rem] -left-3 text-white inline-block px-2 py-1 text-sm font-bold mb-2">
          TOKEN ADDRESS
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-black rounded px-3 py-2">
          <p className="text-sm font-mono break-all mb-2 sm:mb-0">
            {tokenAddress}
          </p>
          <button
            className="bg-black text-white px-3 py-1 text-xs font-bold cursor-pointer rounded shadow-[#e6a95e] shadow hover:bg-gray-800"
            onClick={copyToClipboard}
          >
            COPY ADDRESS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;

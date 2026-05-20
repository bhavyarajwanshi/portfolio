import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div className="flex items-center font-mono text-sm my-2 select-none">
      {/* 1. Identity Block */}
      <div className="bg-[#ff0033] text-[#08080a] px-2 py-0.5 font-bold rounded-l flex items-center h-6">
        👁️ {config.ps1_username}
      </div>
      
      {/* Arrow Separator 1 */}
      <div 
        className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[10px] border-l-[#ff0033] bg-[#1a1a24]"
      />

      {/* 2. Domain Context Block */}
      <div className="bg-[#1a1a24] text-[#e4e4e7] px-3 py-0.5 font-semibold flex items-center h-6">
        {config.ps1_hostname}
      </div>

      {/* Arrow Separator 2 */}
      <div 
        className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[10px] border-l-[#1a1a24] bg-[#111116]"
      />

      {/* 3. Active Telemetry Tracking Flag */}
      <div className="bg-[#111116] text-[#ff0033] px-3 py-0.5 text-xs font-semibold flex items-center h-6">
        ops:(<span className="text-zinc-400 font-bold mx-0.5">shadow-mode</span>)
      </div>

      {/* Final Closing Arrow */}
      <div 
        className="w-0 h-0 border-y-[12px] border-y-transparent border-l-[10px] border-l-[#111116]"
      />
      
      {/* The Dollar Sign prompt symbol - explicitly bright and spaced right */}
      <span className="text-[#ff0033] font-extrabold ml-3 mr-1 animate-pulse">$</span>
    </div>
  );
};

export default Ps1;
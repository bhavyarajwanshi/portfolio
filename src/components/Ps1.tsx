import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div className="flex items-center space-x-0 font-mono text-sm my-2 select-none">
      {/* Ninja Identity Block (Sharingan Crimson) */}
      <span className="bg-[#ff0033] text-[#08080a] px-2 py-0.5 font-bold rounded-l">
        👁️ {config.ps1_username}
      </span>
      
      {/* Chevron Segment Separator 1 */}
      <span className="text-[#ff0033] bg-[#1a1a24] font-bold">
        {"\uE0B0"}
      </span>

      {/* Domain Context Block (Stealth Gray) */}
      <span className="bg-[#1a1a24] text-[#e4e4e7] px-3 py-0.5 font-semibold">
        {config.ps1_hostname}
      </span>

      {/* Chevron Segment Separator 2 */}
      <span className="text-[#1a1a24] bg-[#111116] font-bold">
        {"\uE0B0"}
      </span>

      {/* Active Telemetry Tracking Flag */}
      <span className="bg-[#111116] text-[#ff0033] px-2 py-0.5 text-xs font-semibold">
        ops:(<span className="text-zinc-400 font-bold">shadow-mode</span> {"\uE245"})
      </span>

      {/* Closing Arrow */}
      <span className="text-[#111116] mr-2 font-bold">
        {"\uE0B0"}
      </span>
      
      <span className="text-[#e4e4e7] font-bold mr-1">†</span>
    </div>
  );
};

export default Ps1;
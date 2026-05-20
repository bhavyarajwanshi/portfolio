import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import config from '../../config.json';
import { Input } from '../components/input';             // Points directly to the input.tsx file
import { History } from '../components/history/History'; // Points to history folder -> History.tsx file
import { banner } from '../utils/bin';

export default function Home() {
  const [isBooting, setIsBooting] = useState(true);
  const [bootLogs, setBootLogs] = useState<string[]>([]);
  
  // Terminal tracking states from template core
  const [history, setHistory] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const logs = [
    "🐦 [CROWS] Manifesting shadow routing vectors...",
    "👁️ [GENJUTSU] Piercing template layers to reveal core configurations...",
    "📦 [K3S] Orchestrating silent container runtimes within the shadows...",
    "📊 [METRICS] Aggregating cloud telemetry streams directly into Tsukuyomi arrays...",
    "🩸 [UCHIHA] Firewall perimeters active. Accessing Bhavya's terminal..."
  ];

  // Auto-scroll logic for terminal history execution
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history, isBooting]);

  // Loading Sequence Engine
  useEffect(() => {
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setBootLogs((prev) => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        // Load initial system banner on launch complete
        setHistory([banner()]);
        setTimeout(() => setIsBooting(false), 500);
      }
    }, 350);

    return () => clearInterval(interval);
  }, []);

  // Screen 1: The Crimson Log Stream
  if (isBooting) {
    return (
      <div className="p-8 font-mono text-sm text-[#ff0033] bg-[#08080a] min-h-screen selection:bg-zinc-800 flex items-center justify-center">
        <div className="max-w-xl w-full space-y-2">
          {bootLogs.map((log, index) => (
            <div key={index} className="opacity-0 translate-y-1 animate-[fadeIn_0.2s_ease-out_forwards]">{log}</div>
          ))}
          <div className="w-2 h-4 bg-[#ff0033] animate-pulse inline-block mt-2"></div>
        </div>
      </div>
    );
  }

  // Screen 2: The Core Interactive Workspace Shell
  return (
    <>
      <Head>
  <title>{config.title}</title>
  {/* Hardcoded Embedded Sharingan Base64 - bypasses the local asset file cache completely */}
  <link 
    rel="icon" 
    type="image/svg+xml" 
    href="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='46' fill='%23b91c1c'/><circle cx='50' cy='50' r='32' fill='none' stroke='%23000000' stroke-width='3'/><path d='M 50 18 C 35 30, 35 45, 50 50 C 65 45, 65 30, 50 18 Z' fill='%23000000'/><path d='M 22 66 C 36 54, 50 58, 50 50 C 50 42, 36 30, 22 66 Z' fill='%23000000'/><path d='M 78 66 C 64 54, 50 58, 50 50 C 50 42, 64 30, 78 66 Z' fill='%23000000'/><circle cx='50' cy='50' r='10' fill='%23000000'/><circle cx='50' cy='50' r='3' fill='%23b91c1c'/></svg>" 
  />
</Head>

      {/* Main Page Canvas Backdrop */}
      <div 
        className="min-h-screen bg-[#050507] p-4 md:p-8 flex items-center justify-center font-mono select-none"
        onClick={() => {
          document.getElementById('prompt')?.focus();
        }}
      >
        {/* HARDWARE WINDOW CONSOLE CARD CONTAINER */}
        <div className="w-full max-w-5xl h-[88vh] bg-[#09090b] border border-zinc-800 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          
          {/* SIMULATED SYSTEM WINDOW BAR */}
          <div className="bg-[#111113] border-b border-zinc-900 px-4 py-3 flex items-center justify-between text-xs">
            {/* Native Window Action Nodes */}
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
            </div>
            
            {/* Custom Infrastructure Metadata with Natively Inlined Sharingan Vector */}
            <div className="flex items-center space-x-2 font-semibold tracking-wider text-[11px]">
              <svg 
                viewBox="0 0 100 100" 
                className="w-4 h-4 animate-[spin_10s_linear_infinite]"
              >
                {/* Outermost Crimson Iris Base */}
                <circle cx="50" cy="50" r="46" fill="#b91c1c" />
                {/* Core Obsidian Ring Foundation */}
                <circle cx="50" cy="50" r="32" fill="none" stroke="#000000" strokeWidth="3" />
                
                {/* Eternal Mangekyou Symmetric Blades */}
                <path d="M 50 18 C 35 30, 35 45, 50 50 C 65 45, 65 30, 50 18 Z" fill="#000000" />
                <path d="M 22 66 C 36 54, 50 58, 50 50 C 50 42, 36 30, 22 66 Z" fill="#000000" />
                <path d="M 78 66 C 64 54, 50 58, 50 50 C 50 42, 64 30, 78 66 Z" fill="#000000" />
                
                {/* Center Tomoe Node Eye Aperture */}
                <circle cx="50" cy="50" r="10" fill="#000000" />
                <circle cx="50" cy="50" r="3" fill="#b91c1c" />
              </svg>
              
              <span style={{ color: '#e4e4e7' }} className="font-bold">
                TSUKUYOMI SECURE SHELL v2.4.0
              </span>
            </div>
            
            {/* Cluster Node Environment Tag */}
            {/* FIXED: Added explicit inline text style here to force bright crimson visibility */}
            <div 
              style={{ color: '#ff0033' }} 
              className="text-[10px] bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 font-bold tracking-tight"
            >
              SHADOW-MODE
            </div>
          </div>

          {/* INTERNAL VIEWPORT PORTAL EXECUTION STREAM */}
          <div 
            ref={containerRef}
            className="flex-1 p-6 overflow-y-auto overflow-x-hidden text-[#e4e4e7] bg-[#08080a] pr-2 scrollbar-thin scrollbar-thumb-zinc-800"
          >
            {/* Historical Command Streams */}
            <History history={history} />
            
            {/* Main Active Input Pipeline Prompt Component */}
            <Input
              inputVal={inputVal}
              setInputVal={setInputVal}
              setHistory={setHistory}
              history={history}
            />
          </div>
          
        </div>
      </div>
    </>
  );
}
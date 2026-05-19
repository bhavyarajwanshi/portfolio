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
      </Head>

      <div 
        className="p-6 font-mono text-sm overflow-hidden min-h-screen bg-[#08080a] text-[#e4e4e7] selection:bg-zinc-800"
        onClick={() => {
          document.getElementById('prompt')?.focus();
        }}
      >
        <div 
          ref={containerRef}
          className="max-w-4xl mx-auto h-[92vh] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-800"
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
    </>
  );
}
import React from 'react';
import { commandExists } from '../utils/commandExists';
import { shell } from '../utils/shell';
import { handleTabCompletion } from '../utils/tabCompletion';
import { Ps1 } from './Ps1';

export const Input = ({
  inputVal,        
  setInputVal,     
  history,
  setHistory,
}) => {
  const [lastCommandIndex, setLastCommandIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Auto-focus terminal on body click events
  React.useEffect(() => {
    const handleBodyClick = () => inputRef.current?.focus();
    document.body.addEventListener('click', handleBodyClick);
    return () => document.body.removeEventListener('click', handleBodyClick);
  }, []);

  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commands: string[] = history
      .map((entry: any) => typeof entry === 'object' && entry !== null ? entry.command : null)
      .filter((cmd: string | null): cmd is string => !!cmd);

    // Ctrl + C: Safe terminal line cancellation
    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault();
      setHistory((prev: any) => [...prev, { command: inputVal, output: '' }]);
      setInputVal('');
      setLastCommandIndex(0);
      return;
    }

    // Ctrl + L: Clear terminal screen
    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      setHistory([]);
      return;
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      handleTabCompletion(inputVal, setInputVal);
    }

    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault();
      setLastCommandIndex(0);
      
      // If the user typed 'clear' manually, trigger the reset directly before invoking the shell routing engine
      if (inputVal.trim().toLowerCase() === 'clear') {
        setHistory([]);
        setInputVal('');
        return;
      }
      
      /* FIXED: Passing exactly 3 arguments to mirror your updated shell.ts signature */
      await shell(inputVal, setHistory, setInputVal);
      
      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      }, 50);
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (!commands.length) return;
      
      const index = lastCommandIndex + 1;
      if (index <= commands.length) {
        setLastCommandIndex(index);
        setInputVal(commands[commands.length - index]);
      }
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      if (!commands.length) return;
      
      const index = lastCommandIndex - 1;
      if (index > 0) {
        setLastCommandIndex(index);
        setInputVal(commands[commands.length - index]);
      } else {
        setLastCommandIndex(0);
        setInputVal('');
      }
    }
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(value);
  };

  // Safe manual line reset function
  const resetInputLine = () => {
    setInputVal('');
    setLastCommandIndex(0);
    inputRef.current?.focus();
  };

  return (
    <div className="flex flex-row space-x-2 items-center select-none w-full relative group">
      <label htmlFor="prompt" className="flex-shrink-0">
        <Ps1 />
      </label>

      <div className="flex-grow flex items-center relative">
        <input
          ref={inputRef}
          id="prompt"
          type="text"
          className={`bg-transparent focus:outline-none w-full font-mono pr-8 ${
            commandExists(inputVal) || inputVal === ''
              ? 'text-[#ff0033] font-bold' 
              : 'text-zinc-500'            
          }`}
          value={inputVal}
          onChange={onChange}
          autoFocus
          onKeyDown={onSubmit}
          autoComplete="off"
          spellCheck="false"
        />

        {/* UI REFACTOR: Interactive touch reset trigger for mobile screens */}
        {inputVal && (
          <button
            type="button"
            onClick={resetInputLine}
            className="absolute right-0 text-zinc-500 hover:text-[#ff0033] transition-colors p-1 text-[12px] font-mono"
            title="Clear line"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
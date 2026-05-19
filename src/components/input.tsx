import React from 'react';
import { commandExists } from '.././utils/commandExists';
import { shell } from '.././utils/shell';
import { handleTabCompletion } from '.././utils/tabCompletion';
import { Ps1 } from './Ps1';

export const Input = ({
  inputVal,        // Mapped to parent state hook
  setInputVal,     // Mapped to parent state hook
  history,
  setHistory,
}) => {
  // Keeping track of input state references internally for navigation
  const [lastCommandIndex, setLastCommandIndex] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Defensive check: filter out raw initialization strings, only map actual past execution objects
    const commands: string[] = history
      .map((entry: any) => typeof entry === 'object' ? entry.command : null)
      .filter((cmd: string | null): cmd is string => !!cmd);

    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault();
      setInputVal('');
      setLastCommandIndex(0);
    }

    if (event.key === 'l' && event.ctrlKey) {
      event.preventDefault();
      setHistory([]);
    }

    if (event.key === 'Tab') {
      event.preventDefault();
      handleTabCompletion(inputVal, setInputVal);
    }

    if (event.key === 'Enter' || event.code === '13') {
      event.preventDefault();
      setLastCommandIndex(0);
      
      // Pass the active input pipeline down to the central execution engine
      await shell(inputVal, setHistory, () => setHistory([]), setInputVal);
      
      // Smooth dynamic scrolling down to the bottom viewport boundary
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

  return (
    <div className="flex flex-row space-x-2 items-center select-none">
      <label htmlFor="prompt" className="flex-shrink">
        <Ps1 />
      </label>

      <input
        ref={inputRef}
        id="prompt"
        type="text"
        className={`bg-transparent focus:outline-none flex-grow font-mono ${
          commandExists(inputVal) || inputVal === ''
            ? 'text-[#ff0033] font-bold' // Valid commands turn Sharingan Crimson
            : 'text-zinc-500'            // Untyped text turns stealth gray
        }`}
        value={inputVal}
        onChange={onChange}
        autoFocus
        onKeyDown={onSubmit}
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
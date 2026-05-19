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

  const onSubmit = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Safely filter history items. Only parse objects, ignore raw banner strings.
    const commands: string[] = history
      .map((entry: any) => typeof entry === 'object' && entry !== null ? entry.command : null)
      .filter((cmd: string | null): cmd is string => !!cmd);

    // Ctrl + C: Safe terminal line cancellation
    if (event.key === 'c' && event.ctrlKey) {
      event.preventDefault();
      // Append a blank execution line so it visually skips to the next prompt like a real terminal
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
      
      await shell(inputVal, setHistory, () => setHistory([]), setInputVal);
      setInputVal(''); // Clean out prompt input after submission
      
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
    </div>
  );
};

export default Input;
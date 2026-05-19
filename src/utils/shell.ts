import React from 'react';
import * as bin from './bin';

export const shell = async (
  command: string,
  setHistory: React.Dispatch<React.SetStateAction<any[]>>, // Fixed type mapping to expect array updates
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const args = command.trim().split(' ');
  const baseCommand = args[0].toLowerCase();

  if (baseCommand === 'clear') {
    clearHistory();
    setCommand('');
    return;
  }

  // Handle empty Enter keystrokes safely without crashing
  if (command.trim() === '') {
    setHistory((prev) => [...prev, { command: '', output: '' }]);
    setCommand('');
    return;
  }

  // Handle Unrecognized Command Errors
  if (Object.keys(bin).indexOf(baseCommand) === -1) {
    setHistory((prev) => [
      ...prev,
      {
        command,
        output: `shell: command not found: ${baseCommand}. Try 'help' to get started.`,
      },
    ]);
    setCommand('');
    return;
  }

  // Handle Successful Command Execution Pipeline
  try {
    const output = await bin[baseCommand](args.slice(1));
    setHistory((prev) => [
      ...prev,
      {
        command,
        output,
      },
    ]);
  } catch (error) {
    setHistory((prev) => [
      ...prev,
      {
        command,
        output: `shell: internal execution error processing '${baseCommand}'`,
      },
    ]);
  }

  setCommand('');
};
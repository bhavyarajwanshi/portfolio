import * as bin from './bin';

export const commandExists = (command: string) => {
  const commands = ['clear', ...Object.keys(bin)];
  
  // Safety check: if command is undefined or null, return false instead of crashing
  if (!command) {
    return false;
  }

  return commands.indexOf(command.split(' ')[0].toLowerCase()) !== -1;
};
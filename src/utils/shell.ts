import React from 'react';
import * as bin from './bin';

const test = []

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
  isStarted: boolean,
  setIsStarted: (value: boolean) => void,
  setAnswerCount: React.Dispatch<React.SetStateAction<number>>,
  history: string[]
) => {
  const args = command.split(' ');
  args[0] = args[0].toLowerCase();
  test.push(command)

  // console.log('command', command)
  // console.log('history', history)
  // if test > 5
  // if (test.length > 4) {
    
  //   // setCommand(Math.random().toString())
  //   // const output = await bin['start'](args.slice(1), isStarted);
  //   // setHistory(output);
  //   setInterval(async () => {
  //     const output = await bin['start'](args.slice(1), isStarted);
  //     setHistory(output);
  //     console.log(history)
  //     // setCommand(Math.random().toString())
  //   },1000)
  // }
  // if game start
  if (isStarted) {
    const output = await bin['start'](args.slice(1), isStarted);
    setHistory(output);
    test.push(output)
    setAnswerCount(prev => prev + 1)
  }
  // if game is not start
  else if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    setHistory(
      `shell: command not found: ${args[0]}. Try 'help' to get started.`,
    );
  } else {
    //console.log('shell', isStarted)
    const output = await bin[args[0]](args.slice(1), isStarted);
    setHistory(output);
    test.push(output)
  }
  //console.log(test)
  setCommand('');
};

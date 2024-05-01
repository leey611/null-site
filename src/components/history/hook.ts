import React from 'react';
import { History } from './interface';

export const useHistory = (defaultValue: Array<History>) => {
  const [history, setHistory] = React.useState<Array<History>>(defaultValue);
  const [command, setCommand] = React.useState<string>('');
  const [lastCommandIndex, setLastCommandIndex] = React.useState<number>(0);
  const [isStarted, setIsStarted] = React.useState<boolean>(false)
  const [answerCount, setAnswerCount] = React.useState<number>(0);

  return {
    history,
    command,
    lastCommandIndex,
    isStarted,
    answerCount,
    setHistory: (value: string) =>
      setHistory([
        ...history,
        {
          id: history.length,
          date: new Date(),
          command,
          output: value,
        },
      ]),
    setCommand,
    setLastCommandIndex,
    setIsStarted,
    setAnswerCount,
    clearHistory: () => setHistory([]),
  };
};

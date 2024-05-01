import Head from 'next/head';
import React from 'react';
import config from '../../config.json';
import { Input } from '../components/input';
import { useHistory } from '../components/history/hook';
import { History } from '../components/history/History';
import { banner } from '../utils/bin';
import * as bin from '../utils/bin'

interface IndexPageProps {
  inputRef: React.MutableRefObject<HTMLInputElement>;
}

const IndexPage: React.FC<IndexPageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const {
    history,
    command,
    lastCommandIndex,
    answerCount,
    isStarted,
    setCommand,
    setHistory,
    setAnswerCount,
    setIsStarted,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView();
      inputRef.current.focus({ preventScroll: true });
    }
    let intervalId 

    if (answerCount > 4 && isStarted) {
      intervalId = setInterval(async () => {
        const autoOutput = await bin['start'](null, isStarted)
        setCommand('null')
        setHistory(autoOutput)
        setAnswerCount(prev => prev + 1)
      }, 500)
     
    }
    console.log('length', history.length)
    if (answerCount > 30 && isStarted) {
      clearInterval(intervalId)
      setHistory(bin['ending']())
      setIsStarted(false)
      setAnswerCount(0)
      
    }
    return () => {
      clearInterval(intervalId)
      setCommand('')
    }
  }, [history]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} isStarted={isStarted}/>

          <Input
            inputRef={inputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            answerCount={answerCount}
            isStarted={isStarted}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            setAnswerCount={setAnswerCount}
            setIsStarted={setIsStarted}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default IndexPage;

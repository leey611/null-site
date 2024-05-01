import React from 'react';
import { History as HistoryInterface } from './interface';
import { Ps1 } from '../Ps1';
import { getRandomTextAnimation } from '../../utils/bin';

export const History: React.FC<{ history: Array<HistoryInterface>, isStarted: boolean }> = ({
  history,
  isStarted
}) => {
  let rid = Math.random()
  React.useEffect(() => {
    if (isStarted) {
      const elem = document.querySelectorAll(".gameStart")[history.length-1]
      elem.classList.add(getRandomTextAnimation())
     //document.querySelectorAll(".gameStart")[history.length-1].style.color = `rgb(255,255,${Math.random()*10})`
      
    }
    
  }, [history.length]);
  return (
    <>
      {history.map((entry: HistoryInterface, index: number) => (
        <div key={entry.command + index}>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <Ps1 />
            </div>

            <div className="flex-grow">{entry.command}</div>
          </div>

          <p
            className={`whitespace-pre-wrap mb-2 ${isStarted ? 'gameStart' : ''}`}
            style={{ lineHeight: 'normal' }}
            dangerouslySetInnerHTML={{ __html: entry.output }}
          />
        </div>
      ))}
    </>
  );
};

export default History;

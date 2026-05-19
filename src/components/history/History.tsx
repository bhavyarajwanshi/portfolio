import React from 'react';
import { History as HistoryInterface } from './interface';
import { Ps1 } from '../Ps1';

export const History: React.FC<{ history: Array<any> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: any, index: number) => {
        // Safe check: If the history item is just a raw string (like our system initialization banner)
        if (typeof entry === 'string') {
          return (
            <div key={'banner-' + index}>
              <p
                className="whitespace-pre-wrap mb-4 font-mono"
                style={{ lineHeight: 'normal' }}
                dangerouslySetInnerHTML={{ __html: entry }}
              />
            </div>
          );
        }

        // Standard interactive command entry block parsing
        return (
          <div key={(entry?.command || '') + index}>
            <div className="flex flex-row space-x-2 items-center">
              <div className="flex-shrink">
                <Ps1 />
              </div>
              <div className="flex-grow font-mono">{entry?.command}</div>
            </div>

            <p
              className="whitespace-pre-wrap mb-4 mt-1 font-mono"
              style={{ lineHeight: 'normal' }}
              dangerouslySetInnerHTML={{ __html: entry?.output || '' }}
            />
          </div>
        );
      })}
    </>
  );
};

export default History;
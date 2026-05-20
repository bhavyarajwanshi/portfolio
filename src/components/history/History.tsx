import React from 'react';
import { History as HistoryInterface } from './interface';
import { Ps1 } from '../Ps1';
import { Typewriter } from '../Typewriter'; // Import the new animator utility

export const History: React.FC<{ history: Array<any> }> = ({
  history,
}) => {
  return (
    <>
      {history.map((entry: any, index: number) => {
        // Track if this item is the absolute latest addition to the terminal array
        const isLatestEntry = index === history.length - 1;

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
            >
              {isLatestEntry ? (
                /* Dynamic progressive reveal for the active command response */
                <Typewriter text={entry?.output || ''} speed={2} />
              ) : (
                /* Instant render fallback for historical rows */
                <span dangerouslySetInnerHTML={{ __html: entry?.output || '' }} />
              )}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default History;
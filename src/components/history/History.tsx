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
            <div key={'banner-' + index} className="w-full overflow-x-hidden">
              <p
                /* FIXED: Added overflow protection, break-all, and fluid text scaling on mobile viewports */
                className="whitespace-pre-wrap mb-4 font-mono text-[11px] sm:text-[14px] break-all sm:break-normal overflow-x-hidden"
                style={{ lineHeight: 'normal' }}
                dangerouslySetInnerHTML={{ __html: entry }}
              />
            </div>
          );
        }

        // Standard interactive command entry block parsing
        return (
          <div key={(entry?.command || '') + index} className="w-full overflow-x-hidden">
            {/* FIXED: Allowed the layout row to flex-wrap if the prompt path (PS1) is too long for small phone widths */}
            <div className="flex flex-wrap sm:flex-row space-x-0 sm:space-x-2 items-start sm:items-center w-full">
              <div className="flex-shrink-0 max-w-full">
                <Ps1 />
              </div>
              <div className="flex-grow font-mono text-[12px] sm:text-[14px] break-all pl-1 sm:pl-0">
                {entry?.command}
              </div>
            </div>

            <p
              /* FIXED: Implemented safety wrappers, micro font-scaling, and hard character line-breaks for output text arrays */
              className="whitespace-pre-wrap mb-4 mt-2 font-mono text-[12px] sm:text-[14px] break-all overflow-x-hidden w-full block"
              style={{ lineHeight: 'normal' }}
            >
              {isLatestEntry ? (
                /* Dynamic progressive reveal for the active command response */
                <Typewriter text={entry?.output || ''} speed={2} />
              ) : (
                /* Instant render fallback for historical rows */
                <span className="break-all block w-full" dangerouslySetInnerHTML={{ __html: entry?.output || '' }} />
              )}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default History;
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 1 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    setDisplayedText(''); // Reset on change
    
    // Changing this to 4 balances the speed perfectly for large ASCII text blocks
    const chunkSize = 2; 

    const timer = setInterval(() => {
      if (i < text.length) {
        // Grab a clean 4-character chunk of text
        const nextChunk = text.substring(i, i + chunkSize);
        setDisplayedText((prev) => prev + nextChunk);
        i += chunkSize;
      } else {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <span dangerouslySetInnerHTML={{ __html: displayedText }} />;
};
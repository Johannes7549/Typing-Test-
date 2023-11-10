import React from 'react';
import { useState,useEffect } from 'react';
import Context from './Context';
import modal from './Modal';

const TextDisplay = (props) => {
    let ctx = React.useContext(Context);
    return (
        <p>
          {props.text.split(' ').map((word, wordIndex) => {
            const userInputWords = props.userInput.trim().split(' ');
    
            return (
              <React.Fragment key={wordIndex}>
                {word.split('').map((char, charIndex) => {
                  let color = 'blue';
                  if (wordIndex < userInputWords.length) {
                    if (charIndex < userInputWords[wordIndex].length) {
                     if (char === userInputWords[wordIndex][charIndex] ){
                        color = 'green';
                        ctx.correct++;
                      } else {
                        color = 'red';
                        ctx.incorrect++;

                     }
                    }
                    if (userInputWords[wordIndex].length > word.length) {
                      color = 'red';
                    }
                  }
    
                  return <span key={charIndex} style={{ color: color }}>{char}</span>;
                })}
                <span> </span>
              </React.Fragment>
            );
          })}

        </p>

    );
}

export default TextDisplay;

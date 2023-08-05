import React, { useState } from 'react';
import Accordion from '../../components/Accordion/Accordion';

export default function FaqQuestion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='question-container'>
      <div className={`question-wrapper ${isOpen ? 'open' : 'closed'}`}>
        <h1 className='question'>{question}</h1>
        <button className={`toggle-button ${isOpen ? 'up' : 'down'}`} onClick={() => setIsOpen(!isOpen)}></button>
      </div>
      <Accordion isOpen={isOpen}>
        <h2 className='answer'>{answer}</h2>
      </Accordion>
    </div>
  );
}

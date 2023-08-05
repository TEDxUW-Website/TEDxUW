import React from 'react';

import './Accordion.css';

const Accordion = ({ children, isOpen }) => {
  return (
    isOpen && (
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    )
  );
};

export default Accordion;

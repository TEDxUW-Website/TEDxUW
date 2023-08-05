import React, { useState, useEffect } from 'react';

import Accordion from '../../components/Accordion/Accordion';

import TeamMemberCard from '../../components/TeamMemberCard';

import people from '../../data/people';

export default function EvenRowGroup({ persons, even }) {
  const [whichProfileOpen, setWhichProfileOpen] = useState(null);

  const [accordianIsOpen, setAccordianIsOpen] = useState(false);

  const [program, setProgram] = useState('');
  const [freeTime, setFreeTime] = useState('');

  function toggleAccordian(open) {
    setAccordianIsOpen(open);
  }

  function setPersonInfo(personProgram, personFreeTime) {
    setProgram(personProgram);

    setFreeTime(personFreeTime);
  }

  function setMyProfileOpen(personIndex) {
    setWhichProfileOpen(personIndex);
  }

  return (
    <>
      <div className={even ? 'grid-container-even' : 'grid-container-odd'}>
        {persons.map((person, index) => {
          const { title, program, picture, linkedin, freeTime } =
            people[person];

          return (
            <TeamMemberCard
              name={person}
              program={program}
              role={title}
              picture={picture}
              linkedin={linkedin}
              freeTime={freeTime}
              myIndex={index}
              reading={whichProfileOpen === index}
              toggleAccordian={toggleAccordian}
              setPersonInfo={setPersonInfo}
              setMyProfileOpen={setMyProfileOpen}
              className='grid-item'
            />
          );
        })}
      </div>
      <Accordion isOpen={accordianIsOpen}>
        <p style={{color: 'white', fontFamily: 'inter', fontSize: '20px', fontWeight: '700'}}>Q: What year & program are you in?</p>
        <p style={{color: 'white', fontFamily: 'inter', fontSize: '20px', fontWeight: '400'}}>A: {program}</p>
        <p style={{color: 'white', fontFamily: 'inter', fontSize: '20px', fontWeight: '700'}}>Q: What do you like to do in your free time?</p>
        <p style={{color: 'white', fontFamily: 'inter', fontSize: '20px', fontWeight: '400'}}>A: {freeTime}</p>
      </Accordion>
    </>
  );
}

import React, { useState } from 'react';
import aboutLinkedin from '../res/images/logos/aboutLinkedin.svg';

export default function TeamMemberCard({
  name,
  program,
  role,
  picture,
  linkedin,
  freeTime,
  myIndex,
  reading,
  toggleAccordian,
  setPersonInfo,
  setMyProfileOpen,
  className,
}) {
  return (
    <div className={className}>
      <img
        src={picture}
        style={{ borderBottomLeftRadius: 50, borderTopRightRadius: 50 }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ padding: '10px 0' }}>
          <h1
            style={{
              display: 'inline-block',
              fontFamily: 'inter',
              fontWeight: 700,
              color: '#D43F2E',
              marginRight: '10px',
            }}
          >
            {name}
          </h1>
          <a href={linkedin} target='_blank' rel='noopener noreferrer'>
            <img
              style={{ width: '24px' }}
              alt=''
              src={aboutLinkedin}
              onMouseOut={(e) => (e.currentTarget.src = aboutLinkedin)}
            />
          </a>
        </div>
        <h3
          style={{
            fontFamily: 'inter',
            fontWeight: 200,
            color: '#FFFFFF',
            paddingBottom: '10px',
          }}
        >
          {role}
        </h3>
        <span
          className='button'
          style={{
            fontFamily: 'inter',
            fontWeight: 200,
            color: '#FFFFFF',
            borderBottom: '1px solid #FFFFFF',
          }}
          onClick={() => {
            if (reading) {
              setMyProfileOpen(null);
            } else {
              setMyProfileOpen(myIndex);
            }
            toggleAccordian(!reading);
            setPersonInfo(program, freeTime);
          }}
        >
          {reading ? 'Read Less' : 'Read More'}
        </span>
      </div>
    </div>
  );
}

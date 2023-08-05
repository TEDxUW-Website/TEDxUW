import React from 'react';
import {
  StyledTitle,
  StyledDescription,
  StyledMoreQuestionsDiv,
  StyledFAQContainer,
  StyledDivider,
} from './styles';
import { Divider, Container } from 'semantic-ui-react';
import Accordion from '../../components/Accordion/Accordion';
import Header from '../../components/Header/Header';
import SectionMain from '../../components/SectionMain';

import './Faq.css'

import faqs from '../../data/faqs.js'

import windmill from '../../res/images/windmillbg.svg';
import FaqQuestion from './FaqQuestion';

const Faq = () => (
  <>
    <Header />
    <div style={{ height: '105px', background: '#fff' }}></div>
    <SectionMain
      mainTitle='FAQs'
      subTitle='Got a burning question? Check out our Frequently Asked Questions.'
      bgImg={windmill}
    />
    <div className='container'>
      {faqs.map((faq) => {return <FaqQuestion question={faq.question} answer={faq.answer} />})}
    </div>
  </>
);

export default Faq;

import './faq.scss'
import React, { useState } from 'react';
import { faqdata } from '../../../constant/index';

 function Faq() {
    const [openIndex, setOpenIndex] = useState(-1);
  
    const toggleAccordion = (index:any) => {
      if (openIndex === index) {
        setOpenIndex(-1);
      } else {
        setOpenIndex(index);
      }
    };
 
    return (

      <div className="FaqMainContainer">
        <div className="FaqMainDiv">
        <h2 className='faqHeading'>FAQ's</h2>
          {faqdata.map((item, i) => (
            <div className="item" key={i}>
              <div className="ques" onClick={() => toggleAccordion(i)}>
              
                <h2>{item.question}</h2>
                <span className={`icon ${openIndex === i ? 'minus' : 'plus'}`}></span>
              </div>
              <div className={`ans ${openIndex === i ? 'open' : ''}`}>
                <h3>{item.answer}</h3>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    );
  }




export default Faq;
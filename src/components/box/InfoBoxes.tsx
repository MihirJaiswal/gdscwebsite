import React from 'react';
import { AboutData } from '../../../constant';
import aboutStyle from './InfoBoxes.scss';

interface InfoBoxProps {
  title: string;
  subtitle: string;
  aboutimg: string;
}

const About = ({ title, subtitle, aboutimg }: InfoBoxProps) => {
  return (
    <div>
      <div className={aboutStyle.about}>
        <div className={aboutStyle.leftabout}>
          <h1 className={aboutStyle.abouttitle}>{title}</h1>
          <p className={aboutStyle.aboutpara}>{subtitle}</p>
        </div>
        <div className={aboutStyle.rightabout}>
          <img className={aboutStyle.aboutimg} src={aboutimg} alt={title} />
        </div>
      </div>
    </div>
  );
};

const AboutContainer = () => {
  return (
    <div>
      {AboutData.map((data, index) => (
        <About
          key={index}
          title={data.title}
          subtitle={data.subtitle}
          aboutimg={data.aboutimg}
        />
      ))}
    </div>
  );
};

export default AboutContainer;

import React from 'react';
import { cardData } from '../../constant/index';

interface CardProps {
  imageSrc: string;
  title: string;
  content: string;
  authorName: string;
  authorDate: string;
  authorAvatar: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, content, authorName, authorDate, authorAvatar }) => {
  return (
    <div className="border border-gray-400 bg-white rounded-lg flex flex-col justify-between">
      <img src={imageSrc} alt="Card" className="w-full mb-3" />
      <div className="p-4 pt-2">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"
              ></path>
            </svg>
            Members only
          </p>
          <a href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">
            {title}
          </a>
          <p className="text-gray-700 text-sm">{content}</p>
        </div>
        <div className="flex items-center">
          <a href="#">
            <img className="w-10 h-10 rounded-full mr-4" src={authorAvatar} alt={`Avatar of ${authorName}`} />
          </a>
          <div className="text-sm">
            <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">
              {authorName}
            </a>
            <p className="text-gray-600">{authorDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardListProps {
  data: CardProps[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        {data.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};




const Event: React.FC = () => {
  return <CardList data={cardData} />;
};

export default Event;

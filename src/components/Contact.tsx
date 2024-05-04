import React from 'react';
import img from '../../public/contact.png'
import Image from 'next/image';

const Contact = () => {
  return (
    <div className="p-8 mt-24 h-[55vh]">
      <h2 className="container text-xl font-bold text-gray-700">
        <span className="text-blue-500">Contact</span> GDSC CDGI
      </h2>
      <div className="container flex flex-row">
        <p className="maintext font-medium mr-7">
          Our events are open to newbies, developers, managers, and organizations who are interested in Google's technologies or use them as part of their projects.
          <br />
          <br />
          Google Developers Group CDGI is an initiative to concentrate the efforts of many developers in and around Indore to learn, share and get productive using the various Google products.
          <br />
          <br />
          Questions?{' '}
          <b>
            Please contact us at:{' '}
            <a href="mailto:mihirjaiswal69@gmail.com" className="text-blue-500">mihirjaiswal69@gmail</a>
          </b>
        </p>
        <Image
        src={img}
        alt="unimportant"
         className="w-17%" />
      </div>
    </div>
  );
};

export default Contact;

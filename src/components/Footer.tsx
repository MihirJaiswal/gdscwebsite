
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';
import { navigation } from '../../constant';

function Footer() {
  const socials = [
    
    {
      name: 'Twitter',
      link: '',
      icon: <FaXTwitter />,
      Color: 'text-blue-400',
      hoverColor: 'hover:text-blue-400',
    },
    {
      name: 'Youtube',
      link: '',
      icon: <FaYoutube />,
      Color: 'text-red-600',
      hoverColor: 'hover:text-red-600',
    },
    {
      name: 'Instagram',
      link: '',
      icon: <FaInstagram />,
      Color: 'text-purple-400',
      hoverColor: 'hover:text-purple-600',
    },
    {
      name: 'LinkedIn',
      link: '',
      icon: <FaLinkedin />,
      Color: 'text-blue-800',
      hoverColor: 'hover:text-blue-800',
    },
  ];


  return (
    <footer className="w-full bg-white border-t border-gray-300 py-8">
      {/* Row with links */}
      <div className="w-full flex flex-col sm:flex-row justify-center">
        <div className="flex  justify-center items-center w-full flex-wrap">
          {navigation.map((item) => (
            <Link href={item.route} key={item.title}>
              <p className="text-gray-600 text-xl font-semibold hover:text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 mx-4 my-2">
                {item.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
      {/*  */}
      <div className="w-full mx-auto">
        <h5 className="text-slate-700 pt-10 text-xl text-center dark:text-gray-500  font-bold mb-6 sm:text-center xl:justify-center">
          Stay connected
        </h5>
        <div className="flex justify-center items-center gap-4 xl:justify-center">
          {socials.map((social, index) => (
            <a
              href={social.link}
              key={index}
              className={`${social.Color} ${social.hoverColor} text-3xl mr-4`}
              target="_blank"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
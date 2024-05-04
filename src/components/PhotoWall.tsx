import React, { useState, useRef, useEffect } from 'react';
import memberImg0 from '../../public/projectbg.svg';
import memberImg1 from '../../public/projectbg.svg'
import Image from 'next/image';

export default function MemberPhotoWall(): React.ReactElement {
  const [photoIndex, setPhotoIndex] = useState<number>(1);
  const memberImgs = [memberImg0, memberImg1];
  let buttonArray: number[] = Array.from({ length: memberImgs.length }, (_, index) => index + 1);

  // click to change the photo
  function updateSlider(index: number) {
    setPhotoIndex(index);
  }

  // auto change the photo
  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((prevIndex) => (prevIndex + 1 === memberImgs.length + 1 ? 1 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [photoIndex]);

  return (
    <div className="photo-wall mb-12 md:mb-2 md:p-12">
      <div className="banner">
        <Image
         src={memberImgs[photoIndex - 1]} 
         alt="members' photo"
         className="rounded-2xl border-2 w-[74rem] h-[7rem] md:w-full md:h-full"  
         />
      </div>
    </div>
  );
};

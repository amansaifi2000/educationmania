import Image from 'next/image';
import React from 'react';

const PhotosGallery = () => {
  const imagesData = [
    {
      src: '/images/girl.png', // Replace with the actual path to your image
    },
    {
      src: '/images/girl2.png', // Replace with the actual path to your image
    },
    {
      src: '/images/hand.png', // Replace with the actual path to your image
    },
    {
      src: '/images/facial.png', // Replace with the actual path to your image
    },
  ];

  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold mb-4 font-serif text-black">Gallery</h1>
      <div className="flex items-center justify-center space-x-4 mt-10">
        {imagesData.map((image, index) => (
          <div key={index} className="relative text-center">
            <Image 
              src={image.src} 
              height={305}
              width={350}
              className="w-350 h-305 object-cover rounded-lg" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotosGallery;

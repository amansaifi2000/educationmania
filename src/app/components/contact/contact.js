import React from "react";
import Image from 'next/image';
import ProfileImage from "../../../../public/images/abstract.jpg";
import PlaceIcon from "../../../../public/images/place.png";
import ContactPhoneIcon from "../../../../public/images/contactPhone.png";
import EmailIcon from "../../../../public/images/email.png";
import WorkIcon from "../../../../public/images/work.png";

const Contact = () => {
  return (
    <div className="flex flex-wrap pt-10 mt-5 justify-center items-stretch">
      {/* Mobile Block */}
      <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
        <a
          href="tel:8430188500"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
        >
          <div className="flex justify-center items-center h-40">
            <Image
              src={ContactPhoneIcon}
              alt="Mobile Icon"
              height={60}
              width={60}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="mt-2 text-center flex-grow">
            <p className="text-lg font-bold text-black">Mobile</p>
            <p className="text-gray-700 mt-1 capitalize">8430188500</p>
          </div>
        </a>
      </div>

      {/* Email Block */}
      <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
        <a
          href="mailto:amanalisaifi2000@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
        >
          <div className="flex justify-center items-center h-40">
            <Image
              src={EmailIcon}
              alt="Email Icon"
              height={60}
              width={60}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="mt-2 text-center flex-grow">
            <p className="text-lg font-bold text-black">Email ID</p>
            <p className="text-gray-700 mt-1">amanalisaifi2000@gmail.com</p>
          </div>
        </a>
      </div>

      {/* Business Segment Block */}
      <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
        >
          <div className="flex justify-center items-center h-40">
            <Image
              src={WorkIcon}
              alt="Business Icon"
              height={60}
              width={60}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="mt-2 text-center flex-grow">
            <p className="text-lg font-bold text-black">Business Segment</p>
            <p className="text-gray-700 mt-1">Education</p>
          </div>
        </a>
      </div>

      {/* Location Block */}
      <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
        <a
          href="https://en.wikipedia.org/wiki/Uttarakhand"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
        >
          <div className="flex justify-center items-center h-40">
            <Image
              src={PlaceIcon}
              alt="Location Icon"
              height={60}
              width={60}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="mt-2 text-center flex-grow">
            <p className="text-lg font-bold text-black">Location</p>
            <p className="text-gray-700 mt-1">Uttarakhand</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;

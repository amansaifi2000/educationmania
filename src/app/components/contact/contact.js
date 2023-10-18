import React from "react";
import Profile from "../../../../public/images/abstract.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";

const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Profile.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  };

  return (
    <>
      <div className="flex flex-wrap pt-10 mt-5 justify-center items-stretch">
        {/* Mobile Block */}
        <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
            style={{ ...backgroundImageStyle, position: "relative", marginTop: "20px" }}
          >
            <div className="flex justify-center items-center h-40 text-black text-4xl">
              <ContactPhoneIcon className="w-12 h-12 transition duration-300 transform hover:scale-110 mt-8" />
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
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=amanalisaifi2000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
            style={{ ...backgroundImageStyle, position: "relative", marginTop: "20px" }}
          >
            <div className="flex justify-center items-center h-40 text-black text-4xl">
              <EmailIcon className="w-12 h-12 transition duration-300 transform hover:scale-110 mt-8" />
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
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg transition duration-300 transform hover:shadow-lg"
            style={{ ...backgroundImageStyle, position: "relative", marginTop: "20px" }}
          >
            <div className="flex justify-center items-center h-40 text-black text-4xl">
              <WorkIcon className="w-12 h-12 transition duration-300 transform hover:scale-110 mt-8" />
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
            style={{ ...backgroundImageStyle, position: "relative", marginTop: "20px" }}
          >
            <div className="flex justify-center items-center h-40 text-black text-4xl">
              <PlaceIcon className="w-12 h-12 transition duration-300 transform hover:scale-110 mt-8" />
            </div>
            <div className="mt-2 text-center flex-grow ">
              <p className="text-lg font-bold text-black">Location</p>
              <p className="text-gray-700 mt-1">Uttrakhand</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;

// import Profile from "../../../../public/images/abstract.jpg";

// const Contact = () => {
//   return (
//     <>
//       <div className="flex flex-wrap pt-5 mt-5 justify-center items-stretch">
//         <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
//           <a
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white flex p-2 my-2 flex-col h-full rounded-lg"
//             style={{
//               position: "relative",
//               backgroundImage: `url(${Profile.src})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center center"
//             }}
//           >
//             <div className="flex justify-center items-center h-40 text-black">
//               <i className="fa fa-solid fa-mobile" style={{ fontSize: "80px" }}></i>
//             </div>
//             <div className="mt-2 text-center flex-grow">
//               <p className="text-lg font-bold text-black">Mobile</p>
//               <p className="text-gray-500 mt-1 capitalize">8430188500</p>
//             </div>
//           </a>
//         </div>
//         {/* Add more similar blocks for other contact information */}
//       </div>
//     </>
//   );
// };

// export default Contact;
import Profile from "../../../../public/images/abstract.jpg";



const Contact = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Profile.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center center"
  };

  return (
    <>
      <div className="flex flex-wrap pt-5 mt-5 justify-center items-stretch">

        {/*Contact Block */}
        <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg"
            style={{ ...backgroundImageStyle, position: "relative" }}>
            <div className="flex justify-center items-center h-40 text-black">
              <i className="fa fa-solid fa-mobile" style={{ fontSize: "80px" }}></i>
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
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg"
            style={{ ...backgroundImageStyle, position: "relative" }}
          >
            <div className="flex justify-center items-center h-40 text-black">
            <i className="fa fa-solid fa-email" style={{ fontSize: "80px" }}></i>
            </div>
            <div className="mt-2 text-center flex-grow">
              <p className="text-lg font-bold text-black">Email ID</p>
              <p className="text-gray-700 mt-1">amanalisaifi2000@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Business Block */}
        <div className="flex-grow max-w-xs mx-2 md:mx-4 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/6 cursor-pointer">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg"
            style={{ ...backgroundImageStyle, position: "relative" }}
          >
             <div className="flex justify-center items-center h-40 text-black">
            <i className="fa fa-solid fa-business" style={{ fontSize: "80px" }}></i>
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
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white flex p-2 my-2 flex-col h-full rounded-lg"
            style={{ ...backgroundImageStyle, position: "relative" }}
          >
               <div className="flex justify-center items-center h-40 text-black">
            <i className="fa fa-solid fa-location" style={{ fontSize: "80px" }}></i>
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


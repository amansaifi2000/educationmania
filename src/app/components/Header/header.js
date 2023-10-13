// import Image from "next/image";
// import Profile from "../../../../public/images/Profile.jpeg";

// // import "./style.css";
// const Header = () => {
//   return (
//     <>
//       <div className=" w-full h-80 bg-[url('/images/education.jpeg')]  bg-cover bg-center">  
//         <Image src={Profile} alt="img" className="mx-auto relative top-[12rem] z-10 align-bottom justify-center rounded-full" />
//       </div>
//     </>
//   );
// };

// export default Header;

import Image from "next/image";
import Profile from "../../../../public/images/Profile.jpeg";

const Header = () => {
  return (
    <>
      <div className="relative w-full h-80 bg-[url('/images/education.jpeg')] bg-cover bg-center flex items-end justify-center">
        <div className="absolute bottom-0 mb-[-4.5rem]">
          <div className="rounded-full overflow-hidden h-48 w-48">
            <Image src={Profile} alt="img" layout="responsive" objectFit="cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;




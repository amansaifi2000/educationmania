import Image from "next/image";
import Profile from "../../../../public/images/Profile.jpeg";

const Header = () => {
  return (
    <>
      <div className="relative w-full h-80 bg-[url('/images/education.jpeg')] bg-cover bg-center flex items-end justify-center">
        <div className="absolute bottom-0 mb-[-5.5rem]">
          <div className="rounded-full overflow-hidden h-56 w-56">
            <Image src={Profile} alt="img" layout="responsive" objectFit="cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;




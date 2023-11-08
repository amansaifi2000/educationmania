import Image from "next/image";
import ProfileImage from "../../../../public/images/Profile.png"; // Correct the image path and name
import MakeupImage from "../../../../public/images/makeup.jpg"; // Correct the image path and name

const Header = () => {
  const headerStyle = {
    height: "700px",
    width: "100%",
    backgroundImage: `url(${MakeupImage.src})`, // Set background image URL here
    backgroundSize: "cover",
  };

  const imageContainerStyle = {
    borderRadius: "50%", // Makes the image container rounded
    overflow: "hidden", // Clip the image to the border-radius
  };

  return (
    <div className="relative w-full h-80" style={headerStyle}>
      <div className="absolute bottom-0 mb-[-5.5rem]">
        <div className="rounded-full overflow-hidden h-56 w-56 transition duration-300 transform hover:scale-105" style={imageContainerStyle}>
          <Image 
            src={ProfileImage} // Use the correct variable name
            height={236}
            width={236}
            alt="img" 
            layout="responsive" 
            objectFit="cover" 
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

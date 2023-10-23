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
    <div className="bg-[url('/images/background.png')] bg-cover">
      <div className="relative w-full h-80 bg-[url('/images/makeup.jpg')] bg-cover bg-center flex items-end justify-center" style={headerStyle}>
        <div className="absolute bottom-0 mb-[-7.5rem]">
          <div className="rounded-full overflow-hidden h-72 w-72 transition duration-300 transform" style={imageContainerStyle}>
          <Image 
  src={ProfileImage} 
  height={288}
  width={288}
  alt="img" 
  layout="responsive" 
  objectFit="cover" 
  style={{ 
    maskImage: 'radial-gradient(circle, transparent 0%, black 100%)', // Masking the image to create a circular shape
    borderRadius: '50%', // Creates a circular shape
    border: '10px solid #888888', // Add a 10px solid gray border around the circular image
  }} 
/>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

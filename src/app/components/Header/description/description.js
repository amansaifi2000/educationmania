import Image from 'next/image';
const DescriptionCard = () => {
    
    return (
      <>
        <div className="DescriptionCard pt-28 px-6 text-white">
              <h1 className=" text-center text-3xl font-bold text-white">Education Mania</h1>
              
              <p className="text-white mt-4 m-4 max-w-4xl mx-auto text-2xl sm:mt-4  ">
              Welcome to Education Mania, your gateway to the future of technology! At Education Mania, we are passionate about nurturing talent and fostering innovation. Our platform is dedicated to providing comprehensive education in cutting-edge fields such as web development, mobile development, data analytics, AI/ML development, and Blockchain technology. 
              Whether you are a beginner taking your first steps into the world of programming or a seasoned professional aiming to enhance your skills.<br/>
              <em>Empower Your Mind. Ignite Your Potential. Education Mania awaits.</em>
              </p>
           
          </div>
      </>
    );
  };
  
  export default DescriptionCard;
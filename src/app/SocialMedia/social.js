import Image from 'next/image';
import FacebookLogo from '../../../public/images/Logo/FacebookLogo.png';
import InstagramLogo from '../../../public/images/Logo/InstagramLogo.png';
import LinkedinLogo from '../../../public/images/Logo/LinkedinLogo.png';
import TwitterLogo from '../../../public/images/Logo/TwitterLogo.png';

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-4">
      <a href="https://www.facebook.com/vosovyapar" target="_blank" className="hover:opacity-80 transition">
        <Image
          alt="Facebook Logo"
          src="/images/Logo/FacebookLogo.png"
          width={25} // Adjust the width as needed for larger icons
          height={25} // Adjust the height as needed for larger icons
          loading="lazy"
        />
      </a>
      <a href="https://www.instagram.com/vosovyapar/" target="_blank" className="hover:opacity-80 transition">
        <Image
          alt="Instagram Logo"
          src="/images/Logo/InstagramLogo.png"
          width={25} // Adjust the width as needed for larger icons
          height={25} // Adjust the height as needed for larger icons
          loading="lazy"
        />
      </a>
      <a href="https://www.linkedin.com/company/vosovyapar/" target="_blank" className="hover:opacity-80 transition">
        <Image
          alt="LinkedIn Logo"
          src="/images/Logo/LinkedinLogo.png"
          width={25} // Adjust the width as needed for larger icons
          height={25} // Adjust the height as needed for larger icons
          loading="lazy"
        />
      </a>
      <a href="https://twitter.com/VosoStore" target="_blank" className="hover:opacity-80 transition">
        <Image
          alt="Twitter Logo"
          src="/images/Logo/TwitterLogo.png"
          width={25} // Adjust the width as needed for larger icons
          height={25} // Adjust the height as needed for larger icons
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default SocialMediaLinks;

import FacebookIcon from "@/assets/facebook-icon.png"
import InstagramIcon from "@/assets/instagram-icon.png"
import YoutubeIcon from "@/assets/youtube-icon.png"

const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">

        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook-link" src={FacebookIcon} className="w-[0px] h-auto" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram-link" src={InstagramIcon} className="w-[50px] h-auto" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="youtube-link" src={YoutubeIcon} className="w-[50px] h-auto"/>
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;
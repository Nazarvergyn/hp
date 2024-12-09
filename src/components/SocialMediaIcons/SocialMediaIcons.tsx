import facebookIcon from "../../assets/images/facebook-icon.svg";
import instagramIcon from "../../assets/images/instagram-icon.svg";
import xIcon from "../../assets/images/x-icon.svg";
import youtubeIcon from "../../assets/images/youtube-icon.svg";

const SocialMediaIcons = () => {
  return (
    <div className="flex gap-3 items-center">
      {[xIcon, facebookIcon, instagramIcon, youtubeIcon].map((icon, index) =>
        <button key={index} className="p-2 w-8 h-8 rounded-full border border-solid border-[rgba(251,251,251,0.72)]">
            <img src={icon} alt="social media icon" draggable={false} />
        </button>)}
    </div>
  );
};

export default SocialMediaIcons;
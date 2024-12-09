import { scrollToSectionById } from "../../assets/helpers/scrollToSectionById";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";

const Footer = () => {
  const handleLinkClick = (id: string | null) => {
    if (!id) {
      document.documentElement.scrollIntoView({ behavior: "smooth" });
    } else {
      scrollToSectionById(id);
    }
  }

  return (
    <footer
      style={{
        background: "linear-gradient(59deg, #101318 0%, #1A1C21 39%)",
        boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.08)",
      }}
      className="m-4 md:m-6 p-4 md:p-6 lg:p-8 xl:p-12 lg:pb-6 xl:pb-10 border border-solid border-[rgba(61,63,69,0.40)] rounded-3xl backdrop-blur-xl flex flex-col gap-6 sm:gap-8 md:gap-12"
    >
      {/* desktop */}
      <div className="w-full hidden sm:grid grid-cols-2 lg:flex justify-between gap-y-12 gap-6">
      <div className="xl:w-1/4 flex flex-col gap-4 md:gap-6 order-1">
        <span className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]">HOLDINGS LIMITED</span>
        <p className="text-baseText font-medium text-xl sm:text-2xl lg:text-3xl leading-[125%] tracking-[0.48px]">HYPERMIND LABS </p>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 order-3 lg:order-2">
        <span className="text-[rgba(251,251,251,0.48)] text-sm sm:text-base leading-[150%] font-semibold tracking-[0.5px]">Location:</span>
        <p className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px] flex flex-col">
        DD-15-134-004 - 007, Level 15, Wework Hub71, Al Khatem Tower, Abu
          <span>Dhabi Global Market Square, Abu Dhabi, Al Maryah Island, United Arab</span>
          <span>Emirates</span>
        </p>
      </div>

      {/* <div className="flex flex-col gap-4 md:gap-6 order-4 lg:order-3">
        <span className="text-[rgba(251,251,251,0.48)] text-sm sm:text-base leading-[150%] font-semibold tracking-[0.5px]">Contact:</span>
        <ul className="flex flex-col gap-2 sm:gap-3">
          <li className="flex flex-col">
            <span className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]">Tel:</span>
            <a className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]" href="tel:+1 (203) 920-1888">+1 (203) 920-1888</a>
          </li>
          <li className="flex flex-col">
            <span className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]">Fax:</span>
            <a className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]" href="mailto:hypermind@gmail.com">hypermind@gmail.com</a>
          </li>
        </ul>
      </div> */}

      <div className="flex flex-col gap-4 md:gap-6 order-2 lg:order-4">
        <span className="text-[rgba(251,251,251,0.48)] text-sm sm:text-base leading-[150%] font-semibold tracking-[0.5px]">Page:</span>
        <ul className="flex flex-col gap-2 sm:gap-3">
          <li onClick={() => handleLinkClick(null)} className="text-baseText text-sm sm:text-base font-medium leading-[140%] tracking-[0.3px] cursor-pointer">Home</li>
          <li onClick={() => handleLinkClick("about-us")} className="text-baseText text-sm sm:text-base font-medium leading-[140%] tracking-[0.3px] cursor-pointer">About us</li>
          <li className="text-baseText text-sm sm:text-base font-medium leading-[140%] tracking-[0.3px] cursor-pointer">Our products & services</li>
          <li className="text-baseText text-sm sm:text-base font-medium leading-[140%] tracking-[0.3px] cursor-pointer">Our experience</li>
        </ul>
      </div>
      </div>

      {/* mobile */}
      <div className="w-full flex sm:hidden flex-col gap-6 xs:gap-8">
        <div className="xl:w-1/4 flex flex-col gap-4 md:gap-6">
          <span className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]">HOLDINGS LIMITED</span>
          <p className="text-baseText font-medium text-xl sm:text-2xl lg:text-3xl leading-[125%] tracking-[0.48px]">HYPERMIND LABS</p>
        </div>

        <div className="flex gap-8 xs:gap-12">
          <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-[rgba(251,251,251,0.48)] text-sm sm:text-base leading-[150%] font-semibold tracking-[0.5px]">Page:</span>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li onClick={() => handleLinkClick(null)} className="text-baseText text-sm sm:text-base font-medium leading-[140%] tracking-[0.3px]">Home</li>
              <li onClick={() => handleLinkClick("about-us")} className="text-baseText text-sm sm:text-base font-medium leading-[140%] tracking-[0.3px]">About us</li>
              <li className="text-baseText text-sm sm:text-base font-medium leading-[140%] tracking-[0.3px]">Our products & services</li>
              <li className="text-baseText text-sm sm:text-base font-medium leading-[140%] tracking-[0.3px]">Our experience</li>
            </ul>
          </div>

          {/* <div className="flex flex-col gap-4 md:gap-6">
            <span className="text-[rgba(251,251,251,0.48)] text-sm sm:text-base leading-[150%] font-semibold tracking-[0.5px]">Contact:</span>
            <ul className="flex flex-col gap-2 sm:gap-3">
              <li className="flex flex-col">
                <span className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]">Tel:</span>
                <a className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]" href="tel:+1 (203) 920-1888">+1 (203) 920-1888</a>
              </li>
              <li className="flex flex-col">
                <span className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]">Fax:</span>
                <a className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px]" href="mailto:info@hypermind.io">info@hypermind.io</a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <span className="text-[rgba(251,251,251,0.48)] text-sm sm:text-base leading-[150%] font-semibold tracking-[0.5px]">Location:</span>
          <p className="text-baseText text-sm sm:text-base leading-[150%] tracking-[0.3px] flex flex-col">
          DD-15-134-004 - 007, Level 15, Wework Hub71, Al Khatem Tower, Abu
          <span>Dhabi Global Market Square, Abu Dhabi, Al Maryah Island, United Arab</span>
          <span>Emirates</span>
          </p>
        </div>
      </div>
      

      <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center gap-2 sm:gap-6">
        <SocialMediaIcons />
        <span className="text-secondaryText text-sm leading-[150%] tracking-[0.5px]">Copyright © 2024 Hypermind Labs HOLDINGS LIMITED. All rights reserved.</span>
      </div>
    </footer>
  );
};
export default Footer;
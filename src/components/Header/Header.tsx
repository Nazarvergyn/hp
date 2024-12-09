import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MAIN_ROUTES } from "../../routing/mainRoutes";
import UserDetails from "../UserDetails/UserDetails";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigate = (path: string, sectionId?: string) => {
    navigate(path);

    if (sectionId) {
      setTimeout(() => { 
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 200);
    }
    
    // for mobile view
    if (isOpen) {
      closeMenu();
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="px-4 md:px-6 w-full flex justify-center bg-baseBackground border-b border-solid border-[rgba(61,63,69,0.40)]">
        <div className="py-4 sm:py-6 w-full flex justify-between items-center">
          <button
            onClick={toggleMenu}
            className="lg:hidden focus:outline-none flex flex-col items-start justify-center gap-1.5 z-10"
          >
            <div
              className={"bg-baseWhite w-6 h-0.5 transition-transform duration-300"}
            ></div>
            <div
              className={"bg-baseWhite w-4 h-0.5 transition-all duration-300"}
            ></div>
            <div
              className={"bg-baseWhite w-6 h-0.5 transition-transform duration-300"}
            ></div>
          </button>

          <span onClick={() => handleNavigate(MAIN_ROUTES.HOME)} className="hidden lg:block text-baseWhite font-medium text-2xl leading-[130%] cursor-pointer">
            Hypermind
          </span>

          <nav className="hidden lg:flex">
            <ul className="flex items-center gap-10">
              <li onClick={() => handleNavigate(MAIN_ROUTES.HOME)} className={`relative ${pathname === MAIN_ROUTES.HOME ? "text-basePrimary" : "text-baseGray"} font-medium leading-[150%] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-basePrimary after:rounded-lg after:transition-all after:duration-300 hover:after:w-full cursor-pointer`}>
                Main Page
              </li>
              <li onClick={() => handleNavigate(MAIN_ROUTES.DASHBOARD)}  className={`relative ${pathname === MAIN_ROUTES.DASHBOARD ? "text-basePrimary" : "text-baseGray"} font-medium leading-[150%] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-basePrimary after:rounded-lg after:transition-all after:duration-300 hover:after:w-full cursor-pointer`}>
                Dashboard
              </li>
              <li onClick={() => handleNavigate(MAIN_ROUTES.HOME, "about-us")} className="relative text-baseGray font-medium leading-[150%] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-basePrimary after:rounded-lg after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                About Us
              </li>
              <li onClick={() => handleNavigate(MAIN_ROUTES.HOME, "contact-us")} className="relative text-baseGray font-medium leading-[150%] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-basePrimary after:rounded-lg after:transition-all after:duration-300 hover:after:w-full cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>

          {pathname.startsWith("/dashboard") ? <UserDetails /> :
            <div className="flex items-center gap-5">
              <button onClick={() => handleNavigate(MAIN_ROUTES.LOGIN)} className={`${pathname === MAIN_ROUTES.LOGIN ? "text-basePrimary" : "text-baseText"} text-sm sm:text-base font-semibold leading-[150%]`}>
                Log In
              </button>
              <button
                onClick={() => handleNavigate(MAIN_ROUTES.SIGN_UP)}
                className={`px-4 py-2.5 border border-solid border-baseBorder rounded-3xl backdrop-blur-sm ${pathname === MAIN_ROUTES.SIGN_UP  ? "text-basePrimary" : "text-[#F7F8F9]"} text-xs sm:text-sm font-semibold leading-[140%]`}
              >
                Sign Up
              </button>
            </div>}
        </div>
      </header>

      <div
        className={`fixed inset-0 transition-transform duration-500 ease-in-out z-50 ${
          isOpen ? "transform translate-x-0" : "transform -translate-x-full"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        ></div>

        <div
          className={`fixed left-0 top-0 h-full w-4/5 bg-baseBackground transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-8">
            <div className="py-4 h-[70px] px-4 flex items-center justify-between border-b border-solid border-[rgba(61,63,69,0.40)]">
              <span onClick={() => handleNavigate(MAIN_ROUTES.HOME)} className="text-baseWhite font-medium text-2xl leading-[130%] cursor-pointer">
                Hypermind
              </span>
            
              <button
                className="text-white text-3xl"
                onClick={closeMenu}
              >
                &times;
              </button>
            </div>

            <nav className="px-4">
              <ul className="flex flex-col gap-4">
                <li onClick={() => handleNavigate(MAIN_ROUTES.HOME)} className={`${pathname === MAIN_ROUTES.HOME ? "text-basePrimary" : "text-white"} font-medium`}>Main Page</li>
                <li onClick={() => handleNavigate(MAIN_ROUTES.DASHBOARD)} className={`${pathname === MAIN_ROUTES.DASHBOARD ? "text-basePrimary" : "text-white"} font-medium`}>Dashboard</li>
                <li onClick={() => handleNavigate(MAIN_ROUTES.HOME, "about-us")} className="text-white font-medium">About Us</li>
                <li onClick={() => handleNavigate(MAIN_ROUTES.HOME, "contact-us")} className="text-white font-medium">Contact</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

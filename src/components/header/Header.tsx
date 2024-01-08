import { useState } from "react";
import { FaSearch, FaXing } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { scrollToTheTopOfThePage } from "../ScrollToTheTopOfThePage.hook";

function Header() {
  const navList = [
    ["Home", "/"],
    ["About", "/about-us"],
    ["Products", "/products"],
    ["Contact Us", "/contact-us"],
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="">
        <div className=" bg-[#1C5696]">
          <div className="flex items-center justify-between max-w-[1536px] mx-auto lg:h-[100px] h-[60px] py-[20px] px-[5%]">
            <div className="sm:w-[185px] flex items-center justify-center">
              <Link
                onClick={scrollToTheTopOfThePage}
                to="/"
                className="cursor-pointer text-white xl:text-[4em] lg:text-[3em] text-[2em] font-bold pb-2 "
              >
                LOGO
              </Link>
            </div>
            <nav className="hidden sm:flex items-center">
              {navList.map(([title, url], index) => (
                <Link
                  onClick={scrollToTheTopOfThePage}
                  key={index}
                  to={url}
                  className="xl:w-[132.54px] lg:w-[110px] w-[80px] text-center font-semibold text-slate-800 xl:text-[18px] lg:text-[16px] text-[10px] xl:mx-2 mx-1 bg-[#B3CDE0] rounded-[20pt] px-3 py-1 transition-all delay-100 duration-150 ease-in-out hover:scale-110 active:scale-115"
                >
                  {title}
                </Link>
              ))}
            </nav>
            <div className="hidden sm:w-[185px] sm:flex justify-center">
              <form className="relative transition-all delay-150 duration-300 ease-in-out lg:hover:w-[185px] md:hover:w-[120px] hover:w-[100px] lg:h-[40px] h-[40px] lg:w-[40px] w-[40px] rounded-[20pt] overflow-hidden right-0 scale-75 lg:scale-100 pb-2">
                <input
                  type="text"
                  className="absolute transition-all delay-150 duration-200 ease-in-out hover:text-black top-0 left-0 py-2 pl-3 pr-[15%] w-[100%] text-sm text-white bg-gray-50 rounded-[20pt] border-2  border-blue-300  focus:border-blue-600"
                />
                <button
                  type="submit"
                  className="absolute cursor-pointer top-0 right-0 h-full px-2.5 font-medium text-xl text-black transition delay-150 duration-300 ease-in-out hover:scale-125 focus:scale-110"
                >
                  <FaSearch />
                </button>
              </form>
            </div>
            <button
              type="button"
              className="sm:hidden text-[45px] text-white hover:scale-100 scale-90 transition-all delay-150 duration-300 ease-in-out"
              onClick={handleClick}
            >
              {isOpen ? <FaXing /> : <RxHamburgerMenu />}
            </button>
          </div>
        </div>
        <div className="">
          <div
            className={`bg-[#1C5696] flex justify-between pb-4 px-[5%] sm:hidden w-full transition-all delay-150 duration-200 ease-in-out ${
              isOpen ? "" : "hidden"
            }`}
          >
            {navList.map(([title, url], index) => (
              <Link
                key={index}
                to={url}
                className="block md:inline  text-center font-semibold  text-[16px] transition-all delay-100 duration-150 ease-in-out hover:scale-110 hover:text-white active:scale-115"
              >
                {title}
              </Link>
            ))}
          </div>
          <div className="sm:hidden">
            <div className={`${isOpen ? "block" : "hidden"}`}>
              <form className="flex items-center max-h-[40px]">
                <input
                  type="text"
                  placeholder="Search here"
                  className="pl-[10%] pt-2 w-[100%] text-md bg-gray-50 text-center"
                />
                <button type="submit" className="text-2xl pt-3 pr-[5%]">
                  <FiArrowRightCircle />
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

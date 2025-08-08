import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import CarouselBottom from "@/components/footer/CarouselBottom.component";
import { Link } from "react-router-dom";
import { scrollToTheTopOfThePage } from "../ScrollToTheTopOfThePage.hook";

const Footer = () => {
  return (
    <>
      <CarouselBottom />
      <div className="bg-[#000000]  h-[80px] flex justify-between items-center px-[5%]">
        <span className="text-[#e3e3e3] font-medium text-[14px] ml-[10px]">
          Copyright © Philip Moto Garage{" "}
          <p className="md:inline-block">All Right Reserved </p>
        </span>
        <span className="text-white flex gap-3 text-3xl mr-1">
          <Link
            to="https://www.facebook.com/share/169X11zEza/"
            target="_blank"
            onClick={scrollToTheTopOfThePage}
          >
            <FaFacebook />
          </Link>
          <Link
            to="https://www.instagram.com/philipvillareal?igsh=bmMydjMwZHA3ZGMy"
            target="_blank"
            onClick={scrollToTheTopOfThePage}
          >
            <FaInstagram />
          </Link>
          <Link
            to="https://www.tiktok.com/@hotsilog1325?_t=ZS-8yhDedqzt10&_r="
            target="_blank"
            onClick={scrollToTheTopOfThePage}
          >
            <FaTiktok />
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;

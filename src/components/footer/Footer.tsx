import { FaFacebook, FaLine, FaTiktok, FaYoutube } from "react-icons/fa";
import CarouselBottom from "@/components/footer/CarouselBottom.component";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <CarouselBottom />
      <div className="bg-[#000000]  h-[80px] flex justify-between items-center px-[5%]">
        <span className="text-[#e3e3e3] font-medium text-[14px] ml-[10px]">
          Copyright © @github.com/miller2406{" "}
          <p className="md:inline-block">All Right Reserved </p>
        </span>
        <span className="text-white flex gap-3 text-3xl mr-1">
          <Link to="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank">
            <FaYoutube />
          </Link>
          <Link to="https://www.tiktok.com/" target="_blank">
            <FaTiktok />
          </Link>
          <Link to="https://line.me/en/" target="_blank">
            <FaLine />
          </Link>
        </span>
      </div>
    </>
  );
};

export default Footer;

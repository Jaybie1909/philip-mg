import { FaFacebook, FaLine, FaTiktok, FaYoutube } from "react-icons/fa";
import CarouselBottom from "@/components/footer/CarouselBottom.component";

const Footer = () => {
  return (
    <>
      <CarouselBottom />
      <div className="bg-[#000000]  h-[80px] flex justify-between items-center px-[5%]">
        <span className="text-[#e3e3e3] font-medium text-[14px] ml-[10px]">
          Copyright © @github.com/miller2406 All Right Reserved{" "}
        </span>
        <span className="text-white flex gap-3 text-3xl mr-1">
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebook />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FaYoutube />
          </a>
          <a href="https://www.tiktok.com/" target="_blank">
            <FaTiktok />
          </a>
          <a href="https://line.me/en/" target="_blank">
            <FaLine />
          </a>
        </span>
      </div>
    </>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { scrollToTheTopOfThePage } from "./ScrollToTheTopOfThePage.hook";
import { FaFacebook, FaLine, FaTiktok, FaYoutube } from "react-icons/fa";

const SocialMediaCard = () => {
  return (
    <span className="text-black flex gap-3 text-3xl pt-[20px]">
      <Link
        to="https://www.facebook.com/"
        target="_blank"
        onClick={scrollToTheTopOfThePage}
      >
        <FaFacebook />
      </Link>
      <Link
        to="https://www.youtube.com/"
        target="_blank"
        onClick={scrollToTheTopOfThePage}
      >
        <FaYoutube />
      </Link>
      <Link
        to="https://www.tiktok.com/"
        target="_blank"
        onClick={scrollToTheTopOfThePage}
      >
        <FaTiktok />
      </Link>
      <Link
        to="https://line.me/en/"
        target="_blank"
        onClick={scrollToTheTopOfThePage}
      >
        <FaLine />
      </Link>
    </span>
  );
};

export default SocialMediaCard;

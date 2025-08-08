import { Link } from "react-router-dom";
import { scrollToTheTopOfThePage } from "./ScrollToTheTopOfThePage.hook";
import { FaFacebook, FaInstagram, FaTiktok,} from "react-icons/fa";

const SocialMediaCard = () => {
  return (
    <span className="text-black flex gap-3 text-3xl pt-[20px]">
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
  );
};

export default SocialMediaCard;

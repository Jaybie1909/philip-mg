import { FaFacebook, FaLine, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompanyDetail = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-[20px] justify-evenly items-center w-[100%] md:h-[650px]  px-[5%] py-[20px]">
        <div className="md:w-[50%] md:h-[100%] bg-gray-300">
          <div className="font-semibold text-2xl flex flex-col px-[10%] py-[15%]">
            <h2 className="text-[35px] font-bold">Company Name</h2>
            <span className="pt-[15px] font-bold ">Business Address</span>
            <span className="pl-[10px] text-lg">
              &#160;&#160;&#160;&#160; Lorem ipsum dolor sit amet consectetur
              adipisicing elit. A blanditiis voluptatibus modi nihil animi.
              Esse, eaque fugit ipsam
            </span>
            <span className="pt-[15px] text-xl">Tel. : 088-888-8888</span>
            <span className="text-xl">Email : kaideemakemake@mail.com</span>
            <span className="text-black flex gap-3 text-3xl pt-[20px]">
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
        </div>
        <div className="md:w-[50%] w-[100%] h-[100%] bg-gray-300 flex justify-center items-center">
          <div className="w-[90%] h-[90%] overflow-hidden">
            <div className="bg-[url('/src/assets/images/shop/pr-motorcycle-mechanic-600x400.png')] bg-no-repeat bg-cover w-[1000px] h-[600px] md:translate-x-[-480px] translate-x-[-340px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;

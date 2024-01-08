import { FakeAPIRespond } from "@/assets/fakeAPI/FakeAPIRespond";
import { shopInterface } from "@/assets/fakeAPI/interfaceFakeAPI";

import {
  FaFacebook,
  FaLine,
  FaPhone,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const CompanyAddress = () => {
  const data: shopInterface[] = FakeAPIRespond.data.frontShop;
  return (
    <div className=" px-[5%] md:h-[220px] md:flex md:flex-row flex-col justify-between ">
      <div className="md:w-[50%] md:h-[240px] ">
        <div className="md:relative">
          <div className="md:absolute static z-20 bg-gray-300 rounded-2xl font-semibold text-2xl flex flex-col pl-[8%] pr-[5%] py-5 shadow-2xl">
            <h2 className="text-[35px] font-bold">Company Name</h2>
            <span className="pt-[15px] font-bold ">Business Address</span>
            <span className="pl-[10px] text-base">
              &#160;&#160;&#160;&#160; Lorem ipsum dolor sit amet consectetur
              adipisicing elit. A blanditiis voluptatibus modi nihil animi.
              Esse, eaque fugit ipsam
            </span>
            <span className="pt-[15px] text-base">Tel. : 088-888-8888</span>
            <span className="text-base">Email : kaideemakemake@mail.com</span>
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
      </div>
      <div className="md:h-full md:w-[50%] md:mt-0 mt-[30px]  flex justify-center items-start pb-[35px] ">
        <div className="bg-gray-300 w-[90%] h-[100%] rounded-3xl md:py-0 py-4 flex justify-center  items-center flex-col">
          <div className="w-[60%] h-[50px] bg-blue-600 rounded-3xl flex mb-[20px] transition-all delay-100 duration-100 ease-in-out hover:bg-red-600 active:scale-90 focus:scale-100 hover:scale-105">
            <Link
              to="#"
              className="flex font-semibold text-2xl text-white justify-center items-center w-full h-full "
            >
              <div className="rotate-[180deg] mx-1 mb-2">
                <FaPhone />
              </div>
              <span className="">{data[0].phone}</span>
            </Link>
          </div>
          <div className="w-[90%] h-[60px] bg-stone-800 rounded-2xl flex hover:scale-110 transition-all delay-150 duration-300 ease-in-out">
            <div className="flex font-semibold text-xl  text-white justify-center items-center w-full h-full">
              <span className="pl-1">Easy trade, Great services!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyAddress;

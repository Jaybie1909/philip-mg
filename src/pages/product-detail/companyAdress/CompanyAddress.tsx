import { FakeAPIRespond } from "@/assets/fakeAPI/FakeAPIRespond";
import { shopInterface } from "@/assets/fakeAPI/interfaceFakeAPI";
import CompanyCard from "@/components/CompanyCard.component";
import { FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompanyAddress = () => {
  const data: shopInterface[] = FakeAPIRespond.data.frontShop;
  return (
    <div className=" px-[5%] md:h-[220px] md:flex md:flex-row flex-col justify-between ">
      <div className="md:w-[50%] md:h-[240px] ">
        <div className="md:relative">
          <div className="md:absolute static z-20 bg-gray-300 rounded-2xl font-semibold text-2xl flex flex-col pl-[8%] pr-[5%] py-5 shadow-2xl">
            <CompanyCard />
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

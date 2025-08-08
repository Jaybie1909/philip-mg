import { scrollToTheTopOfThePage } from "../../../components/ScrollToTheTopOfThePage.hook";
import { Link } from "react-router-dom";

const Transections = () => {
  const transList = ["Booking", "Trade", "Sell", "Buy"];

  return (
    <div className="h-[150px] bg-[#F5891D]">
      <div className="grid grid-cols-2 md:flex justify-evenly items-center h-[100%] ">
        {transList.map((item, index) => (
          <Link
            onClick={scrollToTheTopOfThePage}
            to="/contact-us"
            className="m-auto"
            key={`transection-${index}`}
          >
            <button className=" text-3xl font-bold px-5 py-2 rounded-2xl text-black bg-white w-[160px] hover:scale-110 active:scale-105 transition-all ease-in-out delay-150 duration-200 ">
              {item}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Transections;

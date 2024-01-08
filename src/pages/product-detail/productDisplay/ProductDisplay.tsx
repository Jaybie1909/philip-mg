import { FakeAPIRespond } from "@/assets/fakeAPI/FakeAPIRespond";
import CarouselDetail from "./Carousel.detail";
import { bikeDataInterface } from "@/assets/fakeAPI/interfaceFakeAPI";
import { Link } from "react-router-dom";
import { scrollToTheTopOfThePage } from "@/components/ScrollToTheTopOfThePage.hook";

const ProductDisplay = ({ indexID }: { indexID: string | any }) => {
  const data: bikeDataInterface[] = FakeAPIRespond.data.bikeData;
  const num: number = +indexID;
  return (
    <div className="flex flex-wrap justify-center items-start gap-[15px] p-[15px] px-[5%] my-[20px] transition-all duration-300 ease-in-out">
      <div
        key={`product-card-${num}`}
        className="flex-1 min-w-[100%] rounded-2xl shadow-lg bg-[#709fd2] p-2"
      >
        <CarouselDetail num={num} />
        <div className="px-2 text-white">
          <div className="flex justify-between flex-wrap items-center relative pt-[1%]">
            <div key={`status-${num}`} className="font-bold text-xl">
              {`${data[num].brand} ${data[num].version} Y.${data[num].year}`}
            </div>
            <div
              className={`font-semibold ${
                data[num].isAvailable === "Available"
                  ? "text-white"
                  : data[num].isAvailable === "Booked"
                  ? "text-yellow-300"
                  : "text-red-600"
              }`}
            >
              {data[num].isAvailable}
            </div>
          </div>
          <div className="text-base flex flex-col">
            <span className="text-xl font-semibold">
              Price : {data[num].price} THB
            </span>
            <span className="text-md my-2">Mile : {data[num].mile}</span>
            <div className="flex flex-col text-sm">
              <span>Down Payment : {data[num].downPayment} THB</span>
              <div className="flex justify-between flex-wrap items-center">
                <span>
                  Monthly Payment : {data[num].monthlyPayment} THB/month
                </span>
                <button
                  className={`mt-[15px] bg-[#6189B4] dis px-2 py-1 rounded-2xl active:scale-105 hover:scale-110`}
                >
                  {data[num].isAvailable === "Available"
                    ? "Book Now"
                    : "More Detail"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 pt-4 pb-2">
          {data[num].tags.map((tag, index) => {
            return (
              <span
                key={`tag-${tag}-${index}`}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] md:text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                <Link to="#" onClick={scrollToTheTopOfThePage}>
                  #{tag}
                </Link>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

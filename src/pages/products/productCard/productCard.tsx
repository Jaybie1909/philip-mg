import { FakeAPIRespond } from "@/assets/fakeAPI/FakeAPIRespond";
import { bikeDataInterface } from "@/assets/fakeAPI/interfaceFakeAPI";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const data: bikeDataInterface[] = FakeAPIRespond.data.bikeData;
  return (
    <div className="flex flex-wrap justify-center items-start gap-[15px] p-[15px] my-[20px] transition-all duration-300 ease-in-out">
      {data.map((item, index) => {
        return (
          <div
            key={`product-card-${index}`}
            className=" flex-1 min-w-[100%] sm:max-w-[45%] sm:min-w-[45%] lg:max-w-[30%] lg:min-w-[30%] xl:min-w-[384px]  xl:max-w-sm rounded-2xl shadow-lg bg-[#709fd2] p-2 sm:min-h-[500px] "
          >
            <Link to={`/product-detail/${index}`}>
              <img
                className="w-full pb-2 rounded-3xl"
                src={item.pictures[0]}
                alt={item.tags[0]}
              />
            </Link>
            <div className="px-2 text-white">
              <div className="flex justify-between flex-wrap items-center relative">
                <div
                  key={`status-${index}`}
                  className="font-bold text-xl"
                >{`${item.brand} ${item.version} Y.${item.year}`}</div>
                <div
                  className={`font-semibold ${
                    item.isAvailable === "Available"
                      ? "text-white"
                      : item.isAvailable === "Booked"
                      ? "text-yellow-300"
                      : "text-red-600"
                  }`}
                >
                  {item.isAvailable}
                </div>
              </div>
              <div className="text-base flex flex-col">
                <span className="text-xl font-semibold">
                  Price : {item.price} THB
                </span>
                <span className="text-md my-2">Mile : {item.mile}</span>
                <div className="flex flex-col text-sm">
                  <span>Down Payment : {item.downPayment} THB</span>
                  <div className="flex justify-between flex-wrap items-center">
                    <span>
                      Monthly Payment : {item.monthlyPayment} THB/month
                    </span>
                    <button
                      className={`mt-[15px] bg-[#6189B4] dis px-2 py-1 rounded-2xl active:scale-105 hover:scale-110`}
                    >
                      {item.isAvailable === "Available"
                        ? "Book Now"
                        : "More Detail"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 pt-4 pb-2">
              {item.tags.map((tag, index) => {
                return (
                  <span
                    key={`tag-${tag}-${index}`}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] md:text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    <Link to="/">#{tag}</Link>
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;

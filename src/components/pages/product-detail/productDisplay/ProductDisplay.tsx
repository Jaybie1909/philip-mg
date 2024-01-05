import { bikeData } from "@/assets/fakeAPI/FakeAPI";
const ProductDisplay = ({ indexID }: { indexID: string | any }) => {
  const num: number = +indexID;
  return (
    <div className="flex flex-wrap justify-center items-start gap-[15px] p-[15px] px-[5%] my-[20px] transition-all duration-300 ease-in-out">
      <div
        key={`product-card-${num}`}
        className="flex-1 min-w-[100%]  rounded-2xl shadow-lg bg-[#709fd2] p-2"
      >
        <a href="">
          <img
            className="w-full pb-2 rounded-3xl"
            src={bikeData[num].url1}
            alt={bikeData[num].tags[0]}
          />
        </a>
        <div className="px-2 text-white">
          <div className="flex justify-between flex-wrap items-center relative">
            <div
              key={`status-${num}`}
              className="font-bold text-xl"
            >{`${bikeData[num].brand} ${bikeData[num].version} Y.${bikeData[num].year}`}</div>
            <div
              className={`font-semibold ${
                bikeData[num].isAvailable === "Available"
                  ? "text-white"
                  : bikeData[num].isAvailable === "Booked"
                  ? "text-yellow-300"
                  : "text-red-600"
              }`}
            >
              {bikeData[num].isAvailable}
            </div>
          </div>
          <div className="text-base flex flex-col">
            <span className="text-xl font-semibold">
              Price : {bikeData[num].price} THB
            </span>
            <span className="text-md my-2">Mile : {bikeData[num].mile}</span>
            <div className="flex flex-col text-sm">
              <span>Down Payment : {bikeData[num].downPayment} THB</span>
              <div className="flex justify-between flex-wrap items-center">
                <span>
                  Monthly Payment : {bikeData[num].monthlyPayment} THB/month
                </span>
                <button
                  className={`mt-[15px] bg-[#6189B4] dis px-2 py-1 rounded-2xl active:scale-105 hover:scale-110`}
                >
                  {bikeData[num].isAvailable === "Available"
                    ? "Book Now"
                    : "More Detail"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-3 pt-4 pb-2">
          {bikeData[num].tags.map((tag, index) => {
            return (
              <span
                key={`tag-${tag}-${index}`}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] md:text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                <a href="/">#{tag}</a>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

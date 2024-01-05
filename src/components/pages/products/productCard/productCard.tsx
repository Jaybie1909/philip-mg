import { bikeData } from "@/assets/fakeAPI/FakeAPI";

const ProductCard = () => {
  return (
    <div>
      {bikeData.map((item, index) => {
        return (
          <div
            key={`product-card-${index}`}
            className=" min-w-[384px] min-h-[504px] max-w-sm rounded-2xl shadow-lg bg-[#709fd2] p-2"
          >
            <a href="">
              <img
                className="w-full pb-2 rounded-3xl"
                src={item.url1}
                alt={item.tags[0]}
              />
            </a>
            <div className="px-2 text-white">
              <div className="flex justify-between items-center">
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
                  <div className="flex justify-between items-center">
                    <span>
                      Monthly Payment : {item.monthlyPayment} THB/month
                    </span>
                    <button
                      className={`bg-[#6189B4] dis px-2 py-1 rounded-2xl active:scale-105 hover:scale-110`}
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
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    <a href="/">#{tag}</a>
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

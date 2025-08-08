import { FakeAPIRespond } from "../../../assets/fakeAPI/FakeAPIRespond";
import CarouselDetail from "./CarouselDetail";
import { bikeDataInterface } from "../../../assets/fakeAPI/interfaceFakeAPI";
import { Link } from "react-router-dom";
import { scrollToTheTopOfThePage } from "../../../components/ScrollToTheTopOfThePage.hook";

interface ProductDisplayProps {
  indexID: string;
}

const ProductDisplay = ({ indexID }: ProductDisplayProps) => {
  const data: bikeDataInterface[] = FakeAPIRespond.data.bikeData;
  const num = parseInt(indexID);

  // Validate product index
  if (isNaN(num)) {
    return (
      <div className="p-4 text-red-600 bg-red-100 rounded-lg">
        Error: Invalid product ID format
      </div>
    );
  }

  if (num < 0 || num >= data.length) {
    return (
      <div className="p-4 text-yellow-600 bg-yellow-100 rounded-lg">
        Product not found
      </div>
    );
  }

  const product = data[num];

  return (
    <div className="flex flex-wrap justify-center items-start gap-[15px] p-[15px] px-[5%] my-[20px] transition-all duration-300 ease-in-out">
      <div
        key={`product-card-${num}`}
        className="flex-1 min-w-[100%] rounded-2xl shadow-lg bg-[#709fd2] p-2"
      >
        <CarouselDetail num={num} />
        
        <div className="px-2 text-white">
          <div className="flex justify-between flex-wrap items-center relative pt-[1%]">
            <div className="font-bold text-xl">
              {`${product.brand} ${product.version} Y.${product.year}`}
            </div>
            <div
              className={`font-semibold ${
                product.isAvailable === "Available"
                  ? "text-white"
                  : product.isAvailable === "Booked"
                  ? "text-yellow-300"
                  : "text-red-600"
              }`}
            >
              {product.isAvailable}
            </div>
          </div>

          <div className="text-base flex flex-col">
            <span className="text-xl font-semibold">
              Price : {product.price.toLocaleString()} PHP
            </span>
            <span className="text-md my-2">
              Mile : {product.mile.toLocaleString()} km
            </span>
            <div className="flex flex-col text-sm">
              <span>
                Down Payment : {product.downPayment.toLocaleString()} PHP
              </span>
              <div className="flex justify-between flex-wrap items-center">
                <span>
                  Monthly Payment : {product.monthlyPayment.toLocaleString()} PHP/month
                </span>
                <button
                  className={`mt-[15px] bg-[#6189B4] px-2 py-1 rounded-2xl active:scale-105 hover:scale-110 transition-transform`}
                >
                  {product.isAvailable === "Available" ? "Book Now" : "More Detail"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 pt-4 pb-2">
          {product.tags.map((tag) => (
            <span
              key={`tag-${tag}`}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-[10px] md:text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 transition-colors"
            >
              <Link 
                to="#" 
                onClick={scrollToTheTopOfThePage}
                className="hover:text-blue-600"
              >
                #{tag}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
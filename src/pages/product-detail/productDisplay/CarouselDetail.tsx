import { FakeAPIRespond } from "../../../assets/fakeAPI/FakeAPIRespond";
import { bikeDataInterface } from "../../../assets/fakeAPI/interfaceFakeAPI";
import { useEffect, useState } from "react";
import { GoDot } from "react-icons/go";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const CarouselDetail = ({ num }: { num: number }) => {
  const data: bikeDataInterface[] = FakeAPIRespond.data.bikeData;
  const [current, setCurrent] = useState<number>(0);
  const [images, setImages] = useState<string[]>([]);

  // Initialize images array and handle data changes
  useEffect(() => {
    if (data[num]?.pictures) {
      setImages(data[num].pictures);
    }
  }, [num, data]);

  const nextPic = () => {
    setCurrent(prev => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prePic = () => {
    setCurrent(prev =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  // Auto-rotation effect
  useEffect(() => {
    const interval_id = setInterval(nextPic, 5000);
    return () => clearInterval(interval_id);
  }, [current, images.length]);

  // Handle invalid image index
  if (!data[num] || images.length === 0) {
    return <div className="w-[100%] m-auto overflow-hidden rounded-2xl bg-gray-100 min-h-[300px] flex items-center justify-center">
      No images available
    </div>;
  }

  return (
    <div className="w-[100%] m-auto overflow-hidden rounded-2xl">
      <div className="relative">
        <div
          className="flex my-2 items-center transition-all duration-300 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((imgSrc, index) => (
            <div
              key={`cover-link-key-${index}`}
              className="min-w-full lg:max-h-[90vh] md:max-h-[70vh] sm:max-h-[60vh] max-h-[50vh] flex items-center justify-center"
            >
              <img
                src={imgSrc}
                alt={`Carousel item ${index + 1}`}
                className="min-w-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  console.error('Failed to load image:', imgSrc);
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="absolute flex w-[100%] justify-center bottom-3">
          <div className="bg-gray-500 bg-opacity-50 flex rounded-xl px-1">
            {images.map((_, index) => (
              <button
                onClick={() => setCurrent(index)}
                className={`bg-opacity-35 rounded-full text-xl text-white ${
                  current === index ? "bg-cyan-600" : ""
                }`}
                key={`Carousel-nav-key-${index}`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <GoDot />
              </button>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prePic}
          className="absolute text-[30px] top-0 left-0 h-[100%] bg-slate-100 bg-opacity-30 hover:bg-opacity-50 transition-all"
          aria-label="Previous image"
        >
          <div className="hover:scale-110 transition-all delay-150 duration-200 ease-in-out pl-1">
            <MdArrowBackIos />
          </div>
        </button>
        <button
          onClick={nextPic}
          className="absolute text-[30px] top-0 right-0 h-[100%] bg-slate-100 bg-opacity-30 hover:bg-opacity-50 transition-all"
          aria-label="Next image"
        >
          <div className="hover:scale-110 transition-all delay-150 duration-200 ease-in-out pr-1">
            <MdArrowForwardIos />
          </div>
        </button>
      </div>
    </div>
  );
};

export default CarouselDetail;
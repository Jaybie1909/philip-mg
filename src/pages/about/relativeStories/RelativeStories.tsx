import { FakeAPIRespond } from "../../../assets/fakeAPI/FakeAPIRespond";
import { relativePicInterface } from "../../../assets/fakeAPI/interfaceFakeAPI";

const RelativeStories = () => {
  const data: relativePicInterface[] = FakeAPIRespond.data.relativePic;
  return (
    <div className="mb-[30px]">
      {data.map((item, index) => {
        return (
          <div
            key={`relative-key-${index}`}
            className="grid lg:gap-[50px] md:gap-[20px] gap-[10px] lg:grid-cols-2  w-[100%] px-[5%] mt-[20px]"
          >
            <div className="w-[100%] h-[100%] ">
              <div>
                <img
                  src={`${item.url}`}
                  alt={`${item.alt}`}
                  className="rounded-2xl shadow-2xl h-[100%] m-auto w-[100%]"
                />
              </div>
            </div>
            <div className="w-[100%] h-[100%] px-[5%] flex items-center">
              <p className="md:text-2xl font-bold pb-[30px]">
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;We also offer flexible financing options, trade-ins, and after-sales support to make your experience as smooth as possible. Our goal is to make motorcycle ownership accessible and stress-free, whether you're commuting daily or chasing adventure on the weekends.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RelativeStories;

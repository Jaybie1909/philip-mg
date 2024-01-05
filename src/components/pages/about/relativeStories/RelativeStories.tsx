import { relativePic } from "@/assets/fakeAPI/FakeAPI";

const RelativeStories = () => {
  return (
    <div className="mb-[30px]">
      {relativePic.map((item, index) => {
        return (
          <div
            key={`relative-key-${index}`}
            className="grid gap-[50px] grid-cols-2 h-[300px] w-[100%] px-[5%] mt-[20px]"
          >
            <div className="w-[100%] h-[100%]  ">
              <a href="/">
                <img
                  src={`${item.url}`}
                  alt={`${item.alt}`}
                  className="rounded-2xl shadow-2xl h-[100%]"
                />
              </a>
            </div>
            <div className="w-[100%] h-[100%] px-[5%] flex items-center">
              <p className="text-2xl font-bold pb-[30px]">
                &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
                repellat voluptas iure optio molestias at cupiditate sit
                laudantium laboriosam atque!
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RelativeStories;

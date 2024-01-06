import { FakeAPIRespond } from "@/assets/fakeAPI/FakeAPIRespond";
import { showroomInterface } from "@/assets/fakeAPI/interfaceFakeAPI";

const AboutUs = () => {
  const data: showroomInterface[] = FakeAPIRespond.data.showroom;
  return (
    <div className="lg:h-[421.65px] py-10 px-[5%] lg:px-0 lg:py-0 bg-red-200">
      <div className="flex flex-col lg:flex-row items-center justify-center h-[100%]">
        <div className="flex-1 flex justify-center items-center 2xl:flex-none 2xl:ml-[10%]">
          <img
            src={data[0].url}
            alt={data[0].showroomName}
            className="max-w-[90%] max-h-[400px]"
          />
        </div>
        <div className="flex-1 lg:mt-0 mt-3">
          <h2 className="text-5xl font-bold">About Us</h2>
          <p className="pr-[5%] font-semibold py-3 2xl:w-[50%]">
            &#160;&#160;&#160;&#160;&#160; Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Facere laborum a veritatis corrupti
            fuga nihil veniam provident labore animi sapiente aperiam, porro
            mollitia perferendis voluptatem vel corporis eius accusantium fugiat
            atque aliquam voluptatibus sint? Sed molestiae maxime eum esse
            soluta.
          </p>
          <div>
            <a href="/about-us">
              <button className="text-xl scale-95 hover:scale-105 active:scale-100 transition-all ease-linear duration-200">
                Learn More{" <<<"}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

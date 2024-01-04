import { showroom } from "@/assets/fakeAPI/FakeAPI";

const AboutUs = () => {
  return (
    <div className="h-[421.65px] bg-red-200">
      <div className="flex items-center justify-center h-[100%]">
        <div className="flex-1 flex justify-center items-center">
          <img
            src={showroom[0].url}
            alt={showroom[0].showroomName}
            className="w-[90%]"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-5xl font-bold">About Us</h2>
          <p className="pr-[5%] font-semibold py-3">
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
                Learn More
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

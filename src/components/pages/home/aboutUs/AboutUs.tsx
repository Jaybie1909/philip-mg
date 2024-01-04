import { showroom } from "@/assets/fakeAPI/FakeAPI";

const AboutUs = () => {
  return (
    <div className="h-[421.65px] bg-red-200">
      <div className="flex">
        <div className="flex-1">
          <img src={showroom[0].url} alt={showroom[0].showroomName} />
        </div>
        <div className="flex-1">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            laborum a veritatis corrupti fuga nihil veniam provident labore
            animi sapiente aperiam, porro mollitia perferendis voluptatem vel
            corporis eius accusantium fugiat atque aliquam voluptatibus sint?
            Sed molestiae maxime eum esse soluta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

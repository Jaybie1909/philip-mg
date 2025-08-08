import AboutUs from "../../pages/home/aboutUs/AboutUs";
import Brands from "../../pages/home/brands/Brands";
import CarouselPictureShow from "../../pages/home/carouselPictureShow/CarouselPictureShow";
import Recommended from "../../pages/home/recommmandedCarousel/RecommandedCarousel";
import TellCustomers from "../../pages/home/tellCustomers/TellCustomers";
import Transections from "../../pages/home/transections/Transections";

function Home() {
  return (
    <div>
      <CarouselPictureShow />
      <TellCustomers />
      <Recommended />
      <Brands />
      <Transections />
      <AboutUs />
    </div>
  );
}

export default Home;

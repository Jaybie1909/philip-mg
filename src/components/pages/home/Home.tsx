import AboutUs from "@/components/pages/home/aboutUs/AboutUs";
import Brands from "@/components/pages/home/brands/Brands";
import CarouselPictureShow from "@/components/pages/home/carouselPictureShow/CarouselPictureShow";
import Recommanded from "@/components/pages/home/recommmandedCarousel/RecommandedCarousel";
import TellCustomers from "@/components/pages/home/tellCustomers/TellCustomers";
import Transections from "@/components/pages/home/transections/Transections";

function Home() {
  return (
    <div>
      <CarouselPictureShow />
      <TellCustomers />
      <Recommanded />
      <Brands />
      <Transections />
      <AboutUs />
    </div>
  );
}

export default Home;

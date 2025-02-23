import Carousel from "../components/ui/carousel";
import HomeAbout from "./about";
import HomePartners from "./partners";
import HomeService from "./service";

export default async function Home() {
  return (
    <div className="mt-14 flex flex-col">
      <Carousel />
      <HomeAbout />
      <HomeService />
      <HomePartners />
    </div>
  );
}

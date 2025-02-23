import Carousel from "../components/ui/carousel";
import HomeAbout from "./about";
import HomePartners from "./partners";

export default async function Home() {
  return (
    <div className="mt-14 flex flex-col">
      <Carousel />
      <HomeAbout />
      <HomePartners />
    </div>
  );
}

import Carousel from "../components/ui/carousel";
import HomeAbout from "./about";

export default async function Home() {
  return (
    <div className="mt-14 flex flex-col gap-10">
      <Carousel />
      <HomeAbout />
    </div>
  );
}

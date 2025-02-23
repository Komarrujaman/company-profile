import Image from "next/image";

export default async function HomeAbout() {
  return (
    <div className=" py-10">
      <div className="w-full px-5">
        <div className="flex justify-center items-center mb-5">
          <h1 className="text-3xl font-bold pb-2 border-b-4 border-b-black">Who We Are</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-7">
          <div id="description" className="w-full md:w-1/3 text-justify">
            <h2 className="text-3xl font-bold mb-3 text-center md:text-left">Company Name</h2>
            <p className="text-base leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde facilis natus officia nemo sunt voluptas quo error, consectetur ad eum odit harum corporis ex quos! Eaque magni ipsam tempora maiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum fuga maxime corrupti, nesciunt eius facere repellat neque optio, tenetur aliquam rem provident temporibus repellendus
              odit voluptate, nisi saepe. Praesentium?
            </p>
          </div>

          <div className="rounded-lg overflow-hidden hidden md:block">
            <Image src="/images/team.jpg" alt="About" width={400} height={400} className="object-cover rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

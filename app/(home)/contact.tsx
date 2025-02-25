import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail, MdOutlineLocationCity } from "react-icons/md";

export default function HomeContact() {
  return (
    <div className="relative bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('/images/banner3.jpg')" }}>
      <div className="w-full px-5 bg-amber-500/80 py-10 rounded-md">
        {/* Title */}
        <div className="flex justify-center items-center mb-5">
          <h1 className="text-3xl font-bold pb-2 border-b-4 border-b-[#FFC107] text-white">Get In Touch With Us</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 py-5 px-7">
          {/* Contact */}
          <div className="flex flex-col gap-6 w-full md:w-1/2 text-white">
            <div className="text-justify max-w-[600px] font-semibold">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus qui doloremque, ab dolor odio dolore odit explicabo nostrum nam cumque similique fugit sit! Consectetur</p>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-white/80 text-black text-6xl p-2 text-center flex items-center rounded-md">
                <MdOutlineLocationCity />
              </div>
              <div>
                <p className="text-xl font-bold">Our Location</p>
                <p className="font-bold">
                  4 Privet Drive Little Whinging <br />
                  310790, Great Britain
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-white/80 text-black text-4xl p-3 text-center flex items-center rounded-md">
                <BsFillTelephoneFill />
              </div>
              <div>
                <p className="text-xl font-bold">Phone Number</p>
                <p className="font-bold">(+44) 98 871 571 07</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="bg-white/80 text-black text-4xl p-3 text-center flex items-center rounded-md">
                <MdEmail />
              </div>
              <div>
                <p className="text-xl font-bold">Email</p>
                <p className="font-bold">Ourmail@mail.com</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/80 w-full md:w-1/2 rounded-md p-5 px-6 flex flex-col gap-3">
            <input type="text" placeholder="Your Name" className="border border-neutral-400 rounded-md py-2 px-3 text-sm h-10 w-full" />
            <input type="text" placeholder="Your Email" className="border border-neutral-400 rounded-md py-2 px-3 text-sm h-10 w-full" />
            <input type="text" placeholder="Phone Number" className="border border-neutral-400 rounded-md py-2 px-3 text-sm h-10 w-full" />
            <textarea className="border border-neutral-400 rounded-md py-2 px-3 text-sm h-24 w-full" placeholder="Your Message"></textarea>
            <button className="w-full py-2 bg-[#00E676] text-[#212121] font-bold rounded-lg hover:bg-[#00C965] transition-all duration-300">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

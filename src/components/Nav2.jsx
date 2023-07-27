import { BsLinkedin, BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";

export const Nav2 = () => {
  return (
    <section className=" ml-16 h-16  text-white   backdrop-blur-lg sticky gap-3 flex items-center p-6 ">
      <div className="flex justify-between m-10 w-full">
        <div className="flex gap-3">
          <a className="text-xl" href="#">
            <BsLinkedin />
          </a>
          <a className="text-xl" href="#">
            <BsGithub />
          </a>
          <a className="text-xl" href="#">
            <BsTwitter />
          </a>
          <a className="text-xl" href="#">
            <BsWhatsapp />
          </a>
        </div>
        <div className="flex ">
          <button className="border rounded-sm w-20 h-8 hover:bg-yellow-400 hover:text-black ">
            RESUME
          </button>
        </div>
      </div>
    </section>
  );
};

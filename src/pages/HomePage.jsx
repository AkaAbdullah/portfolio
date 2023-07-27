import { motion } from "framer-motion";
// <h1 className="text-[80px] font-bold mt-[-20px]"></h1>
// <h1 className="text-[87px] mb-[-50px] ">Hey, There I'm</h1>
// <h1 className="text-4xl mt-[-20px] ">I'm a Full Stack web developer</h1>;

export const HomePage = () => {
  return (
    <>
      <section className="text-white relative flex h-full mt-[-90px] ml-36 items-center ">
        <div className="w-[740px]">
          <motion.h1
            className="text-[87px] mb-[-50px]  "
            initial={{ x: +1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: "1",
              delay: "0",
            }}
          >
            Hey, There I'm
          </motion.h1>

          <motion.h1
            className="text-[80px]  "
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: "1",
              delay: "0",
            }}
          >
            ᗋbdullah Hussain
          </motion.h1>

          <motion.h1
            className="text-4xl mt-[-20px] "
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: "1",
              delay: "0",
            }}
          >
            I'm a Full Stack web developer
          </motion.h1>

          <motion.h1
            className="text-xl  "
            initial={{ y: +1000 }}
            animate={{ y: 0 }}
            transition={{
              duration: "1",
              delay: "0",
            }}
          >
            Born in Vehari Lives in Lahore Raised in 90's now avalible for you
            I've spent the last 1 year building and scaling software for some
            pretty cool companies. <br /> yes, and this website is not a
            downloaded template 😎
          </motion.h1>

          <motion.button
            className=" w-40 h-10 rounded-sm text-xl mt-3 hover:bg-neutral-800 outline "
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{
              duration: "1",
              delay: "0",
            }}
          >
            Contact Me
          </motion.button>
        </div>
      </section>
    </>
  );
};

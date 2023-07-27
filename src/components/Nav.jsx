import { useState } from "react";

export const Nav = () => {
  const [aboutModal, setAboutModal] = useState(false);

  return (
    <>
      <section className="text-white w-16 h-screen flex justify-center absolute  bg-neutral-950 drop-shadow-lg ">
        <div className="flex rotate-90 flex-row items-center  text-center text-xl gap-10   ">
          <a onClick={() => setAboutModal(true)} href="#">
            About
          </a>
          <a href="#">Education</a>
          <a href="#">Experience</a>
          <a href="#">Contact</a>
        </div>
      </section>
    </>
  );
};

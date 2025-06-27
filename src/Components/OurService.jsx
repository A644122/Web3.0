import React from "react";

const OurService = ({ text, btns, para }) => {
  return (
    <>
      <section className="md:bg-block md:text-white lg:w-full  h-[60vh]  tracking-tight bg-zinc-900 text-white lg:relative">
        <div className="md:absolute md:top-[20px] md:left-[550px] md:font-extralight lg:p-2 lg:absolute top-1/1 left-1/2 lg:font-mono ">
          <button>{btns}</button>
          <h1 className=" md:text-3xl lg:text-4xl md:p-8 lg:p-12 ">{text}</h1>
          <p>{para}</p>
        </div>
      </section>
    </>
  );
};

export default OurService;

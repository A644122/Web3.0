import React from "react";

const Herosection = ({ para, text, btn, btntext, textview, para1 }) => {
  return (
    <>
      <section className="  md:bg-block md:text-white lg:w-full  h-[60vh]  tracking-tight bg-zinc-900 text-white lg:relative ">
        <div className=" md:absolute md:top-[150px] md:left-1/2 lg:absolute top-1/1 left-1/2 ">
          <span className=" md:border border-none p-3 rounded bg-slate-800 lg:border lg:border-none lg:bg-red-900">
            {btn}
          </span>
          <h1 className=" md:leading-tight mt-4 ml-[-200px] text-6xl mr-1  lg:text-[57px]">
            {text}
          </h1>
          <p className="md:leading-tight mt-4 ml-[-100px] lg:md:leading-tight lg:mt-4 lg:ml-[-200px]">
            {para}
          </p>
          <div className=" absolute left-[-100px]">
            <button className=" md:border md:to-blue-700 border-rose-600 border-none rounded-md p-3  leading-tight font-light    bg-blue-800  lg:font-semibold">
              {btntext}
            </button>
            <button className=" md:border  font-medium border-rose-600 border-none rounded-md p-6">
              {textview}
            </button>
          </div>
        </div>
        <div>{para1}</div>
      </section>
    </>
  );
};

export default Herosection;

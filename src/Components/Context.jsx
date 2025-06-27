import React from "react";

export const Context = ({ para1, Img, Img1, Img2, Img3 }) => {
  return (
    <>
      <section className="md:bg-block md:text-white lg:w-full  h-[60vh]  tracking-tight bg-zinc-900 text-white lg:relative">
        <div className="md:absolute md:top-[150px] md:left-1/2 lg:absolute top-1/1 left-1/2">
          <p className="md:leading-tight mt-4 ml-[-100px] lg:md:leading-tight lg:mt-4 lg:ml-[-200px]">
            {para1}
          </p>
          <section className=" md:flex md:mr-32 ">
            <img
              className="w-28 bg-black/25  shadow-md m-3 h-8"
              src={Img}
              alt=""
            />
            <img
              className="w-28 md:hover:shadow-green-900 m-3 h-8 lg:shadow-green-900"
              src={Img1}
              alt=""
            />
            <img className="w-28 m-3 h-8" src={Img2} alt="" />
            <img className="w-28 m-3 h-8" src={Img3} alt="" />
          </section>
        </div>
      </section>
    </>
  );
};

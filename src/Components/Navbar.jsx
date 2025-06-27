import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import logo from "../assets/logos.jpg";
import "../Components/Nabvar.css";

const Navbar = () => {
  return (
    <>
      <div className=" Main m-auto   bg-black text-white ">
        <div className=" flex     justify-between p-2">
          <div className="pt-5   flex justify-between  rounded-lg  opacity-70  text-2xl">
            <div className="logo  relative  flex   ">
              <div className="  flex ">
                <img
                  className="  border-x-slate-500 h-[50px] rounded"
                  src={logo}
                  alt="web3images"
                />
              </div>
              <div className=" md:hidden lg:hidden fnmenu absolute   left-[650px] ">
                <button className="  bg-green-600 p-2 mr-auto    rounded-md text-2xl font-mono text-clip">
                  Menu
                </button>
              </div>
            </div>
          </div>

          <div className="   from-neutral-600  flex gap-9 ">
            <nav className=" nav-links   font-mono flex gap-4   pt-5">
              <Link className=" hover:text-gray-500 text-2xl" to={"/"}>
                {" "}
                Home
              </Link>
              <Link className="  hover:text-gray-500 text-2xl" to={"/about"}>
                {" "}
                About
              </Link>
              <Link className="  hover:text-gray-500 text-2xl" to={"/contact"}>
                {" "}
                Contact
              </Link>
              <Link className="  hover:text-gray-500 text-2xl" to={"/products"}>
                {" "}
                Products
              </Link>
              <Link className="  hover:text-gray-500 text-2xl" to={"/blog"}>
                Blog
              </Link>
              <div className="btns">
                <Button />
              </div>
            </nav>
          </div>
        </div>
        <div className="border-x-black"></div>
      </div>
      {/* mobile Menu icon */}
    </>
  );
};

export default Navbar;

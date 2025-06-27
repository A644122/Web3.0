import React from "react";
import Herosection from "../Components/Herosection";
import { Context } from "../Components/Context";
import OurService from "../Components/OurService";
import Img from "../assets/download 1.png";
import Img1 from "../assets/download 2.png";
import Img2 from "../assets/download.jpeg";
import Img3 from "../assets/download.png";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <Herosection
            btn="New"
            text="Intelligent Automation for Modern Businesses."
            para="Xtract brings AI automation to your fingertips & streamline tasks."
            btntext="Get in touch"
            textview="view servics"
          />
        </div>
        <div>
          <Context
            para1="Over 50+ business trust us"
            Img={Img}
            Img1={Img1}
            Img2={Img2}
            Img3={Img3}
          />
        </div>
        <div>
          <OurService
            btns="Our Service"
            text="AI Solutions That Take Your Business to the Next Level"
            para= 'We design, develop, and implement automation tools that help you work smarter, not harder'
          />
        </div>
      </div>
    </>
  );
};

export default Home;

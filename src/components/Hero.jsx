import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
export default function Hero() {
  return (
    <section
      className={` flex md:flex-row flex-col ${styles.paddingY}`}
      id="home"
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div
          className="flex flex-row items-center
         py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
        >
          <img src={discount} alt="disocunt" className="w-[32px] h-[32px]" />
          <span className="text-white mr-1">20% </span>
          <p className={`${styles.paragraph} ml-2`}> Discount For</p>{" "}
          <span className="text-white ml-1 mr-1">1 Month</span>
          <p className={`${styles.paragraph} ml-2`}> Account</p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1
            className="flex-1 font-poppins font-semibold ss:text-[72px]
           text-[52px] text-white ss:leading-[100px] leading-[75px]"
          >
            The Next <br className="sm:block hidden" />
            <span className="text-gradient"> Generation </span>
            <br />
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0 text-white">
            <GetStarted />
          </div>
        </div>
        <h1
          className="font-poppins font-semibold ss:text-[68px]
           text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"
        >
          Payment method
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-5"
        />
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
}

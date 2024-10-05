/* eslint-disable @next/next/no-img-element */
import React from "react";

const HeroComponents = () => {
  return (
    <>
      <div className="min-h-[7.8vw]"></div>
      <div className="px-[4.5rem] w-full max-w-none mx-auto overflow-hidden">
        <div className="rounded-bl-[24px] text-left flex flex-col justify-start items-start min-w-[90vw] max-w-[90vw] min-h-[56.4vw] max-h-[56.4vw] mx-auto relative overflow-hidden">
          <img
            src="/assets/hero.jpg"
            className="rounded-tr-[24px] object-cover min-w-full min-h-full max-h-[56.4vw] absolute max-w-full inline-block"
            alt="hero"
            sizes="90vw"
          />
          <div className="relative flex justify-start items-start min-h-[8.3vw] max-h-[8.3vw]">
            <div className="flex justify-start items-center bg-black rounded-br-[1.25rem] h-[8.3vw] pr-[2.22vw] gap-[1.11vw]">
              <h1 className="my-0 tracking-[-0.07] uppercase text-[7.8vw] font-semibold leading-[7.8vw]">
                Digi
              </h1>
              <img
                src="/assets/spinner.png"
                className="object-cover inline-block max-h-[7.8vw] min-h-[7.8vw] max-w-[7.8vw] min-w-[7.8vw] spinner-anim"
                alt=""
              />
              <h1 className="my-0 tracking-[-0.07] uppercase text-[7.8vw] font-semibold leading-[7.8vw]">
                bento
              </h1>
            </div>
            <img
              src="/assets/curve1.png"
              className="object-cover inline-block relative max-h-[1.67vw] min-h-[1.67vw] max-w-[1.67vw] min-w-[1.67vw]"
              alt=""
            />
          </div>

          <div className="relative flex justify-start items-start min-h-[8.3vw] max-h-[8.3vw]">
            <div className="flex justify-start items-center bg-black rounded-br-[1.25rem] h-[8.3vw] pr-[2.22vw] gap-[1.11vw]">
              <h1 className="my-0 tracking-[-0.07] uppercase text-[7.8vw] font-semibold leading-[7.8vw]">
                Agency
              </h1>
            </div>
            <img
              src="/assets/curve1.png"
              className="object-cover inline-block relative max-h-[1.67vw] min-h-[1.67vw] max-w-[1.67vw] min-w-[1.67vw]"
              alt=""
            />
          </div>
          {/* curve in the left */}
          <img
            src="/assets/curve1.png"
            className="object-cover inline-block relative max-h-[1.67vw] min-h-[1.67vw] max-w-[1.67vw] min-w-[1.67vw]"
            alt=""
          />

          {/* bottom right of the screen */}
          <div className="rounded-tl-[24px] bg-black w-[9vw] h-[9vw] absolute top-auto right-[-0.1vw] bottom-[-0.1vw] left-auto">
            <img
              src="/assets/curve1.png"
              className="object-cover inline-block max-h-[1.67vw] min-h-[1.67vw] max-w-[1.67vw] min-w-[1.67vw] absolute top-[-1.665vw] right-[-.02vw] left-auto bottom-auto rotate-180"
              alt=""
            />
            <img
              src="/assets/curve1.png"
              className="object-cover inline-block max-h-[1.67vw] min-h-[1.67vw] max-w-[1.67vw] min-w-[1.67vw] absolute top-auto right-auto bottom-[-.02vw] left-[-1.665vw] rotate-180"
              alt=""
            />
            <div className="li cursor-pointer rounded-full justify-center items-center w-[2.8vw] h-[2.8vw] flex absolute top-[3.05vw] right-[3.05vw] bg-white bottom-auto left-[3.05vw] overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right text-black myArrow-anim w-6 h-6"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>
          </div>

          <div className="border-0 border-solid border-[#eee] bg-black rounded-full flex flex-col justify-center items-center w-[8.9vw] h-[8.9vw] mx-auto absolute top-[2.2vw] right-[2.2vw] bottom-auto left-auto overflow-hidden max-w-full cursor-pointer">
            <div className="circle-anim bg-[url('/assets/circle.svg')] bg-center bg-cover bg-no-repeat flex flex-col justify-center items-center w-[7.8vw] h-[7.8vw]"></div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default HeroComponents;

/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useRef, useState } from "react";
import { IoMenu } from "react-icons/io5";
import gsap from "gsap";

const NavbarComponent = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false); // Automatically close the menu if screen size is greater than 1024px
      }
    };

    // Add event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (open) {
      // Open menu with sliding down animation
      gsap.set(menuRef.current, { display: "block" }); // Ensure it's visible
      gsap.fromTo(
        menuRef.current,
        { y: "-100%" }, // Start from above
        { y: 0, duration: 0.5, ease: "power3.out" } // Animate to its position
      );
    } else {
      // Close menu with sliding up animation
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" }); // Hide after animation
        },
      });
    }
  }, [open]);
  return (
    <div className="relative">
      <div className="h-[7.8vw] bg-transparent flex justify-between items-center mx-auto px-[10vw] absolute inset-[0% 0% auto] w-full uppercase  tracking-[0.07vw] z-50">
        <a
          className="relative  flex-col justify-center items-center flex z-30"
          href="/"
        >
          <img
            src="/assets/logo.png"
            className=" max-w-full min-h-[1.67vw] max-h-[1.67vw]  object-cover object-center"
            alt="logo"
          />
        </a>

        <div className="flex justify-end items-center mr-0 max-w-[940px]">
          <div className="mr-[2.2vw] lg:flex hidden relative justify-start text-[0.89vw] font-thin transition-colors z-30">
            <div className="li flex flex-col relative overflow-hidden h-[1.3vw] px-[1.4vw] ">
              <a href="" className="text-[#eee] myAnim-in">
                Home
              </a>
              <a href="" className="text-[#eee] myAnim-out">
                Home
              </a>
            </div>
            <div className="li flex flex-col relative overflow-hidden h-[1.3vw] px-[1.4vw] ">
              <a href="" className="text-[#eee] myAnim-in">
                About
              </a>
              <a href="" className="text-[#eee] myAnim-out">
                About
              </a>
            </div>
            <div className="li flex flex-col relative overflow-hidden h-[1.3vw] px-[1.4vw] ">
              <a href="" className="text-[#eee] myAnim-in">
                Services
              </a>
              <a href="" className="text-[#eee] myAnim-out">
                Services
              </a>
            </div>
            <div className="li flex flex-col relative overflow-hidden h-[1.3vw] px-[1.4vw] ">
              <a href="" className="text-[#eee] myAnim-in">
                Works
              </a>
              <a href="" className="text-[#eee] myAnim-out">
                Works
              </a>
            </div>
            <div className="li flex flex-col relative overflow-hidden h-[1.3vw] px-[1.4vw] ">
              <a href="" className="text-[#eee] myAnim-in">
                Packages
              </a>
              <a href="" className="text-[#eee] myAnim-out">
                Packages
              </a>
            </div>
            <div className="li flex flex-col relative overflow-hidden h-[1.3vw] px-[1.4vw] ">
              <a href="" className="text-[#eee] myAnim-in">
                Contact
              </a>
              <a href="" className="text-[#eee] myAnim-out">
                Contact
              </a>
            </div>
          </div>

          <div className="li relative justify-center overflow-hidden items-center gap-[1.1vw] py-[0.04vw] pl-[2.22vw] pr-[0.28vw] min-w-[12.22vw] text-[1.11vw] text-[#eee] leading-[1.89vw] font-thin border-[0.1vw] rounded-[8.9vw] border-gray-200 md:flex hidden cursor-pointer">
            <div className="myAnim-in">Explore</div>
            <div className="myAnim-out left-[2.2vw]">Explore</div>
            <div className="relative overflow-hidden min-w-[2.8vw] max-w-[2.8vw] min-h-[2.8vw] max-h-[2.8vw] bg-white rounded-full flex justify-center items-center text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right myArrow-anim w-6 h-6"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>
          </div>

          <div className="flex justify-center items-center relative z-30">
            <a
              href="/"
              className="ml-[1rem] pt-[0.5rem] pl-[0.5rem] pr-[0] pb-[0.5rem] flex justify-center items-center "
            >
              <svg
                className="hover:text-[#dbec62] mr-[8px] transition-colors duration-300"
                width="22px"
                height="22px"
                viewBox="0 0 17 17"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path
                    d="M2.60592789,2 L0,2 L0,0 L4.39407211,0 L4.84288393,4 L16,4 L16,9.93844589 L3.76940945,12.3694378 L2.60592789,2 Z M15.5,17 C14.6715729,17 14,16.3284271 14,15.5 C14,14.6715729 14.6715729,14 15.5,14 C16.3284271,14 17,14.6715729 17,15.5 C17,16.3284271 16.3284271,17 15.5,17 Z M5.5,17 C4.67157288,17 4,16.3284271 4,15.5 C4,14.6715729 4.67157288,14 5.5,14 C6.32842712,14 7,14.6715729 7,15.5 C7,16.3284271 6.32842712,17 5.5,17 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                  ></path>
                </g>
              </svg>
            </a>

            <div className="absolute text-[0.6rem] font-bold top-0 right-0 h-[1.11vw] min-w-[1.11vw] ml-0 bottom-[auto] left-[auto] pl-[1.11vw] pr-0">
              0
            </div>
          </div>
          <div
            className="flex relative py-[1rem] pl-[1rem] pr-[0px] cursor-pointer lg:hidden z-30"
            onClick={() => setOpen(!open)}
          >
            <IoMenu className="text-[#eee] text-2xl" />
          </div>
        </div>
        <div
          ref={menuRef}
          className="absolute top-0 left-0 right-0 bottom-0 z-20 bg-[#1c1c1c] h-screen"
          style={{ display: "none", transform: "translateY(-100%)" }} // Menu starts off-screen and hidden
        >
          <div className="flex flex-col items-center h-full relative top-[10vw]">
            <a
              href="/"
              className="text-[4rem] leading-[6rem] px-[1.25rem] min-h-[6rem]"
            >
              Home
            </a>
            <a
              href="/"
              className="text-[4rem] leading-[6rem] px-[1.25rem] min-h-[6rem]"
            >
              About
            </a>
            <a
              href="/"
              className="text-[4rem] leading-[6rem] px-[1.25rem] min-h-[6rem]"
            >
              Services
            </a>
            <a
              href="/"
              className="text-[4rem] leading-[6rem] px-[1.25rem] min-h-[6rem]"
            >
              Works
            </a>
            <a
              href="/"
              className="text-[4rem] leading-[6rem] px-[1.25rem] min-h-[6rem]"
            >
              Packages
            </a>
            <a
              href="/"
              className="text-[4rem] leading-[6rem] px-[1.25rem] min-h-[6rem]"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarComponent;

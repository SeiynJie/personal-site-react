import React from "react";
import ProfPic from "./Profile-Picture.jpg";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Introduction() {
  const imageRef = useRef();
  const textRef = useRef();
  useGSAP(() => {
    gsap.to(imageRef.current, {
      scale: 1.1,
      duration: 1,
      ease: "power1.inOut",
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Make it go back to original size
    });
    {
      scope: imageRef;
    }

    // Text animation: from hidden to visible
    const texts = gsap.utils.toArray(".rotateToVisibleText");
    texts.forEach((text) => {
      gsap.fromTo(
        text,
        {
          // rotationX: 90, // Start tilted
          opacity: 0, // Fully transparent
        },
        {
          // rotationX: 0, // End in normal position
          opacity: 1, // Fully visible
          duration: 0.3,
          ease: "power2.out",
        }
      );
    });

    // Animation slide from right
    const elements = gsap.utils.toArray(".slideFromRight");
    elements.forEach((element, index) => {
      setTimeout(() => {
        gsap.to(element, {
          x: 0, // End in normal position
          opacity: 1, // Fully visible
          duration: 1,
          ease: "power1.in",
          rotateX: 0,
          startAt: {
            x: 500, // Start off-screen to the right
            rotationX: 90, // Start tilted
            opacity: 0, // Fully transparent
          },
        });
      }, index * 500); // Delay each animation by 500ms per element
    });

    const leftElements = gsap.utils.toArray(".slideFromLeft");
    leftElements.forEach((element, index) => {
      setTimeout(() => {
        gsap.to(
          element,
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power1.in",
            startAt: { x: -500, opacity: 0 },
          } // Smooth slide-in
        );
      }, index * 500); // Delay each animation by 500ms per element
    });
  });

  return (
    <>
      <div className="h-full" id="introduction">
        <div className="wrapper relative flex flex-col ">
          {/* Background with subtle styling */}

          <div className="Picture-wrapper">
            <div className="rounded-full bg-white w-54 h-54 ml-8 mt-6 absolute [filter:blur(2rem)] [opacity:0.5]"></div>
            <div
              className="rounded-full bg-[hsl(276,100%,60%)] w-54 h-54 ml-8 mt-6 absolute [filter:blur(4rem)]"
              style={{ zIndex: 0 }}
            ></div>

            {/* Profile Picture */}
            <img
              ref={imageRef}
              src={ProfPic}
              className="rounded-full w-48 h-64 absolute left-12"
              alt="Profile"
              style={{ zIndex: 1 }}
            />
          </div>

          <div className="Introduction ">
            <div className="Greeting ">
              <img
                className="w-12 h-12 absolute left-66 top-1/6 -translate-x-1/2 -translate-y-1/2 transform scale-y-[-1] invert brightness-0 rotateToVisibleText opacity-0"
                src="https://static.thenounproject.com/png/1563368-200.png"
                alt="hand waving emoji"
              />

              <span className="rotateToVisibleText opacity-0 absolute top-[30%] left-[42%] -translate-x-[50%] -translate-y-[50%]">
                Hi, I'm Aaron!
              </span>
            </div>

            <span className="slideFromRight opacity-0">
              A Junior Full-Stack Developer who creates
            </span>
            <h1 className="slideFromRight opacity-0">
              {" "}
              <span className="text-[hsl(288,97%,61%)] slideFromRight opacity-0">
                cool things
              </span>{" "}
              with code...
            </h1>
            <span className="slideFromRight opacity-0">
              and a little bit of magic
            </span>
          </div>
        </div>

        <div className="Brief-Info text-white mt-35 text-left">
          <h1 className="slideFromLeft opacity-0" >I'm an all-around developer</h1>
          <p className="slideFromLeft opacity-0">
            Currently, I'm a college student at{" "}
            <a href="https://up.phinma.edu.ph">
              PHinma University of Pangasinan
            </a>
            .
          </p>
          <p className="slideFromLeft opacity-0">
            I have experience with multiple programming languages and frameworks
            such as
          </p>
          <div className="flex justify-left gap-2 mt-2 slideFromLeft opacity-0">
            <img
              className="h-6 w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
              alt="Python"
            />
            <img
              className="h-6 w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
              alt="Javascript"
            />
            <img
              className="h-6 w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/1200px-Lua-Logo.svg.png"
              alt="LUA"
            />
            <img
              className="h-6 w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
              alt="VUE"
            />
            <img
              className="h-6 w-6"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="React"
            />
            <img
              className="h-6 w-6"
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/electron-icon.png"
              alt="Electron"
            />
            <img
              className="h-6 w-6"
              src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
              alt="Firebase"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;

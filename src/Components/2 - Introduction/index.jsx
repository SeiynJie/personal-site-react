import React from "react";
import ProfPic from "./Profile-Picture.jpg";

function Introduction() {
  return (
    <>
      <div className="h-full">
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
              src={ProfPic}
              className="rounded-full w-48 h-64 absolute left-12"
              alt="Profile"
              style={{ zIndex: 1 }}
            />
          </div>

          <div className="Introduction">
            <div className="Greeting ">
              <img className="w-12 h-12 absolute left-66 top-1/6 -translate-x-1/2 -translate-y-1/2 transform scale-y-[-1] invert brightness-0" src="https://static.thenounproject.com/png/1563368-200.png" alt="hand waving emoji" />

              <span className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">Hi, I'm Aaron!</span>
            </div>

            <span>A Web-Developer who</span>
            <h1>
              creates{" "}
              <span className="text-[hsl(288,97%,61%)]">cool things</span> with
              code...
            </h1>
            <span>and a little bit of magic</span>
          </div>
        </div>

        <div className="Brief-Info text-white mt-35 text-left">
          <h1>I'm an all-around developer</h1>
          <p>
            Currently, I'm a college student at{" "}
            <a href="https://up.phinma.edu.ph">
              PHinma University of Pangasinan
            </a>
            .
          </p>
          <p>
            I have experience with multiple programming languages and
            frameworks such as
          </p>
          <div className="flex justify-left gap-2 mt-2">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduction;

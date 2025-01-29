import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//* Components
import Masthead from "./Components/1 - Masthead";
import Introduction from "./Components/2 - Introduction";
import Work from "./Components/3 - Work Experience";
import CodingStory from "./Components/4 - Coding Story";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* The masthead is in front with a high z-index, doesn't affect stuff below. */}
      <Masthead />

      {/* Main container with proper height and scroll behavior */}
      <div className="flex flex-col items-center justify-center min-h-screen overflow-y-auto">
        {/* Content container */}
        <div className="flex flex-col items-center w-full max-w-screen-md p-8 rounded-lg shadow-lg">
          {/* Removed extreme margins and fixed spacing */}
          <div className="w-full mt-16 mb-32">
            <Introduction />
          </div>

          <Work />
          <CodingStory />
        </div>
      </div>
    </>
  );
}

export default App;

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
      <Masthead />
      <div className="flex flex-col items-center justify-center h-screen overflow-y-scroll">
        {/* Container for all components */}
        <div className="flex flex-col items-center w-full max-w-screen-md mt-120 p-8 rounded-lg shadow-lg">
          <div className="w-full h-full mt-500 mb-25">
            <Introduction />
          </div>
          <Work />
          <CodingStory/>
        </div>
      </div>
    </>
  );
}

export default App;

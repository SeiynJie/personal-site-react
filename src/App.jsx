import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//* Components
import Masthead from "./Components/1 - Masthead";
import Introduction from "./Components/2 - Introduction";
import Work from "./Components/3 - Work Experience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen overflow-auto">
        {/* Container for all components */}
        <div className="flex flex-col items-center w-full max-w-screen-md mt-100 p-8 rounded-lg shadow-lg">
          <Masthead />
          <div className="w-full mt-50 mb-25">
            <Introduction />
          </div>
          <Work />
        </div>
      </div>
    </>
  );
}

export default App;

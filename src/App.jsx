import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

//*  Components
import Masthead from "./Components/Masthead";
import Introduction from "./Components/Introduction";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="flex flex-col">
        <Masthead />
        <div class="p-8 flex items-center justify-center">
          <Introduction />
        </div>
      </div>
    </>
  );
}

export default App;

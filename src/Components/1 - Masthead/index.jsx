function Masthead() {
  return (
    <div className="fixed top-0 left-0 w-full bg-[hsl(266,61%,11%)] text-white flex justify-center items-center gap-4 md:gap-8 lg:gap-10 z-10">
        <FancyLoader/>

      {/* <img
        src="https://images.vexels.com/media/users/3/155652/isolated/preview/885cef5de29fca521c468ac4b32a279f-ancient-egyptian-hieroglyphics-symbol.png"
        alt="JarPy head"
        className="h-12 md:h-12 lg:h-12 invert brightness-0 mb-2"
      /> */}
      <a href="" className="hover:bg-[hsl(265,80%,35%)] rounded px-3 py-2">
        Home
      </a>
      <a href="" className="hover:bg-[hsl(265,80%,35%)] rounded px-3 py-2">
        About
      </a>
      <a href="" className="hover:bg-[hsl(265,80%,35%)] rounded px-3 py-2">
        Work Experience
      </a>
      <a href="" className="hover:bg-[hsl(265,80%,35%)] rounded px-3 py-2">
        Coding Story
      </a>
      <a href="" className="hover:bg-[hsl(265,80%,35%)] rounded px-3 py-2">
        Hobbies
      </a>
      <a href="" className="hover:bg-[hsl(265,80%,35%)] rounded px-3 py-2">
        Contact
      </a>
    </div>
  );
}

function FancyLoader() {
  return (
    <>
      <div class="honeycomb ml-5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
export default Masthead;

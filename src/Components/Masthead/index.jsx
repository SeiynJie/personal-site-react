function Masthead() {
    return (
        <div className="wrapper bg-[hsl(266,61%,11%)] w-full h-15 text-white flex justify-center items-center gap-4 md:gap-8 lg:gap-36">
            <img 
                src="https://images.vexels.com/media/users/3/155652/isolated/preview/885cef5de29fca521c468ac4b32a279f-ancient-egyptian-hieroglyphics-symbol.png" 
                alt="JarPy head" 
                className="h-12 md:h-12 lg:h-12 invert brightness-0 mb-2"
            />
            <a href="" className="hover:bg-[hsl(217,100%,10%)] rounded px-3 py-2 transition duration-300 ease-in-out mb-2">Home</a>
            <a href="" className="hover:bg-[hsl(217,100%,10%)] rounded px-3 py-2 transition duration-300 ease-in-out mb-2">About</a>
            <a href="" className="hover:bg-[hsl(217,100%,10%)] rounded px-3 py-2 transition duration-300 ease-in-out mb-2">Work</a>
        </div>
    );
}

export default Masthead;
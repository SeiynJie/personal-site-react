function Masthead(){
    return(
        <div className="wrapper bg-[hsl(266,61%,11%)] w-screen h-15 text-white flex justify-center items-center gap-16">
            <img src="https://images.vexels.com/media/users/3/155652/isolated/preview/885cef5de29fca521c468ac4b32a279f-ancient-egyptian-hieroglyphics-symbol.png" alt="JarPy head" class="h-12 mr-64 invert brightness-0"></img>
            <a href="" className="hover:bg-[hsl(217,100%,10%)] rounded px-3 py-2 transition duration-300 ease-in-out">Home</a>
            <a href="" className="hover:bg-[hsl(217,100%,10%)] rounded px-3 py-2 transition duration-300 ease-in-out">About</a>
            <a href="" className="hover:bg-[hsl(217,100%,10%)] rounded px-3 py-2 transition duration-300 ease-in-out">Lab</a>
        </div>
    )
}

export default Masthead
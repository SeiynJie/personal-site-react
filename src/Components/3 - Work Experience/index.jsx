function Work() {
  return (
    <>
      <div className="w-full h-100 text-white">
        <h1 class="text-left">Work Experience</h1>
        
        <ExperienceCard
          media={{
            type: "image",
            src: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
          }}
          title="Das gay"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. "
        />

      </div>
    </>
  );
}

function ExperienceCard({ media, title, description }) {
  return (
    <div className="relative h-72 w-full rounded-2xl group">
      {/* Blurred Background */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[hsl(276,100%,60%)] w-full h-full [filter:blur(4rem)] opacity-0 group-hover:opacity-100"></div>

      {/* Card Content */}
      <div className="duration-500 cursor-pointer overflow-hidden relative text-gray-50 h-full w-full rounded-2xl hover:duration-700">
        {/* Media Section */}
        <div className="h-72 w-full relative z-0">
          {media?.type === "image" && (
            <img
              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
              alt={title}
              className="h-full w-full object-cover"
            />
          )}
          {media?.type === "video" && (
            <video
              src={media.src}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
            ></video>
          )}
          <div className="absolute inset-0 flex justify-between p-2">
            <svg
              className="fill-current stroke-current w-8 h-8 p-2 hover:bg-[hsl(260,40%,30%)] rounded-full"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8,32.9V15.8m0,0H32.9m-17.1,0L37.2,37.2m47-4.3V15.8m0,0H67.1m17.1,0L62.8,37.2m-47,29.9V84.2m0,0H32.9m-17.1,0L37.2,62.8m47,21.4L62.8,62.8M84.2,84.2V67.1m0,17.1H67.1"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              ></path>
            </svg>
            <svg
              className="fill-current stroke-current w-8 h-8 p-2 hover:bg-[hsl(260,40%,30%)] rounded-full"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width="100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50,17.4h0M50,50h0m0,32.6h0M50,22a4.7,4.7,0,1,1,4.7-4.6A4.7,4.7,0,0,1,50,22Zm0,32.7A4.7,4.7,0,1,1,54.7,50,4.7,4.7,0,0,1,50,54.7Zm0,32.6a4.7,4.7,0,1,1,4.7-4.7A4.7,4.7,0,0,1,50,87.3Z"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
              ></path>
            </svg>
          </div>
        </div>

        {/* Info Section */}
        <div
          className="absolute bg-gray-50 -bottom-24 w-full p-4 flex flex-col gap-2 group-hover:-bottom-0 group-hover:duration-600 duration-500"
          style={{
            backgroundColor: "rgba(45, 55, 72, 0.75)",
            color: "hsl(260, 30%, 90%)",
          }}
        >
          <span className="font-bold text-xs uppercase mb-6 text-neutral-400">
            Hover over me uWu
          </span>
          <span className="font-bold text-3xl">{title}</span>
          <p className="text-neutral-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Work;

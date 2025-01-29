function Work() {
  return (
    <>
      <div className="w-full h-full text-white mb-25">
        <h1 class="text-right">Work Experience</h1>

        <ExperienceCard
          media={{
            type: "video",
            src: "https://i.imgur.com/XaIBD71.mp4",
          }}
          title="Playwright Fastmoss Scraper Demo"
          description="I utilized cookies to bypass the log in process and used Playwright (which is much faster and has better features than Selenium but I have used Selenium as well) for dynamically loaded sites like this one. I also used asynchronous processing which made things faster and and more efficient than my selenium multithreaded version. Also, made it click some stuff for data that can only be accessed after interacting with stuff."
        />
        <ExperienceCard
          media={{
            type: "video",
            src: "https://i.imgur.com/roEsg71.mp4",
          }}
          title="Google reCaptcha Audio Bypass"
          description="This is a project that utilizes OpenAI's Whisper model. Basically what it does is when encountering a reCaptcha: it tries to get an audio version > get the audio file > use Whisper model to transcribe > return the transcribed audio > input the text > bypass captcha. It has a 95% chance of success even while using just the base model. Google's reCaptcha has static and stuff to make it undetectable but this bypasses said feature."
        />
        <ExperienceCard
          media={{
            type: "video",
            src: "https://i.imgur.com/5fXRILJ.mp4",
          }}
          title="Responsive Web-Design"
          description="I was just bored. This is when I was practicing Vue."
        />
        <ExperienceCard
          media={{
            type: "image",
            src: "https://creatorspace.imgix.net/users/cliom1y0y01amp501rxau0xmb/O7qR114MnUdsmdbx-image_2024-07-24_184241097.png?w=750&h=750",
          }}
          title="Point of Contact Specialist - Team Leader at NBCN"
          description="Deals with recording data (data entry), data analysis, and back-office work. Lead generation is the most important part of this job as it requires getting the contact information of creators. I have also created workflows for the whole department"
        />
        <ExperienceCard
          media={{
            type: "video",
            src: "https://i.imgur.com/DvPApoD.mp4",
          }}
          title="EngagementX: Social Media Bot"
          description="A project I made when I was working with a client. He requested that I make an all-around social media bot that can do. There are a ton of needs for social media engagement and it's very hard to do this especially if your time is limited. EngagementX fixes that for you! With the ability to: Run manual interaction, AI Auto-replying, Create flows (drag and drop feature), See results of performed actions on the dashboard"
        />
      </div>
    </>
  );
}

function ExperienceCard({ media, title, description }) {
  return (
    <div className="relative h-92 w-full rounded-2xl group mb-5">
      {/* Blurred Background */}
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[hsl(276,100%,60%)] w-full h-full [filter:blur(4rem)] opacity-40 group-hover:opacity-100"></div>

      {/* Card Content */}
      <div className="duration-500 cursor-pointer overflow-hidden relative text-gray-50 h-full w-full rounded-2xl hover:duration-700">
        {/* Media Section */}
        <div className="h-92 w-full relative z-0">
          {media?.type === "image" && (
            <img
              src={media.src}
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
          <span className="font-bold text-xs uppercase mb-3 text-neutral-400">
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

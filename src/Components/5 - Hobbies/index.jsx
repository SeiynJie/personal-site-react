import keyboard from "./Keyboard.png";
import workout from "./Workout.png";

function Hobbies() {
  return (
    <>
      <div className="w-full h-full text-white">
        <h1 className="text-white text-right">Hobbies</h1>
        <HobbyCard
          title="Piano"
          description="I like playing piano pieces / songs that are relaxing"
          imgSrc={keyboard}
          primaryAction={{ href: "", label: "Like" }}
          variant="normal"
        />
        <HobbyCard
          title="Working out"
          description="Trying to get those GAINS"
          imgSrc={workout}
          primaryAction={{ href: "", label: "Like" }}
          variant="inverted"
        />
        <HobbyCard
          title="Coding"
          description="I like making websites and webapps. Solving problems that bother my life."
          imgSrc="https://cdn.pixabay.com/photo/2024/04/25/02/23/ai-generated-8718795_1280.png"
          primaryAction={{ href: "", label: "Like" }}
          variant="normal"
        />
        <HobbyCard
          title="Eating"
          description="I love food and eating out with my friends and family. Of course, I workout as well."
          imgSrc="https://cdni.iconscout.com/illustration/premium/thumb/man-eating-food-illustration-download-in-svg-png-gif-file-formats--male-fast-having-people-pack-illustrations-6551733.png?f=webp"
          primaryAction={{ href: "", label: "Like" }}
          variant="inverted"
        />
        <HobbyCard
          title="Choir"
          description="I like singing at church."
          imgSrc="https://png.pngtree.com/png-vector/20230131/ourmid/pngtree-music-and-singing-in-choir-concept-png-image_6577189.png"
          primaryAction={{ href: "", label: "Like" }}
          variant="normal"
        />
      </div>
    </>
  );
}

function HobbyCard({
  title,
  description,
  imgSrc,
  primaryAction,
  variant = "normal", // Accepts "normal" or "inverted"
}) {
  const isInverted = variant === "inverted";

  return (
    <div className="relative my-16 group">
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[hsla(171,100%,50%,1)] w-full h-full [filter:blur(4rem)] opacity-40 group-hover:opacity-100"></div>

      <div className="w-[calc(100%_-_3rem)] mx-auto max-w-lg lg:max-w-5xl xl:max-w-7xl bg-[#2A004E] rounded-4xl p-15 rotate-3 group-hover:rotate-[0deg]" >
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 items-center">
          {/* Content Section */}
          <div
            className={`col-span-12 lg:col-span-6 ${
              isInverted ? "lg:order-2" : ""
            }`}
          >
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-[#FFC785] text-4xl">{title}</h1>
              <p className="leading-normal">{description}</p>

              <div className="flex flex-wrap gap-4 items-center justify-center">
                <a
                  href={primaryAction?.href || "#0"}
                  className="bg-indigo-700 text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
                >
                  {primaryAction?.label || "Download"}
                </a>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`col-span-12 lg:col-span-6 ${
              isInverted ? "lg:order-1" : ""
            }`}
          >
            <figure>
              <img
                className="w-full rounded-xl"
                src={
                  imgSrc ||
                  "https://d3ae4wrz2ljkbq.cloudfront.net/components/img-3-2-light-1.svg"
                }
                alt="Image description"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hobbies;

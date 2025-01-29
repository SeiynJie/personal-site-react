import keyboard from "./Keyboard.png";

function Hobbies() {
  return (
    <>
      <div className="w-full h-full text-white mb-25">
        <h1 className="text-white text-right">Hobbies</h1>
        <HobbyCard
          title="My Favorite Hobby"
          description="I love spending my free time exploring new things and engaging in my hobby."
          imgSrc={keyboard}
          primaryAction={{ href: "", label: "Like" }}
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
}) {
  return (
    <>
      <div class="relative my-16 group">
        <div className="absolute inset-0 -z-10 rounded-2xl bg-[hsla(17,72%,57%,1)] w-full h-full [filter:blur(4rem)] opacity-40 group-hover:opacity-100"></div>

        <div class="w-[calc(100%_-_3rem)] mx-auto max-w-lg lg:max-w-5xl xl:max-w-7xl bg-[#2A004E] rounded-4xl">
          <div class="grid grid-cols-12 gap-y-8 lg:gap-8 items-center">
            <div class="col-span-12 lg:col-span-6">
              <div class="flex flex-col gap-4">
                <h1 class="font-bold text-[#FFC785] text-4xl">{title}</h1>
                <p class="leading-normal">{description}</p>

                <div class="flex flex-wrap gap-4 items-center justify-center">
                  <a
                    href={primaryAction?.href || "#0"}
                    class="bg-indigo-700 text-white shadow-md text-[1em] px-4 py-2 rounded-md relative inline-flex justify-center items-center whitespace-nowrap cursor-pointer no-underline leading-tight transition-all duration-200 hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-700"
                  >
                    {primaryAction?.label || "Download"}
                  </a>
                </div>
              </div>
            </div>

            <div class="col-span-12 lg:col-span-6">
              <figure>
                <img
                  class="w-full rounded-xl"
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
    </>
  );
}

export default Hobbies;

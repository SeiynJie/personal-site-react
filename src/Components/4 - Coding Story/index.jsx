function CodingStory() {
  const timelineItems = [
    {
      title: "The Beginning",
      date: "01/01/2021",
      description:
        "Where it all started: I was busy playing roblox games but then, I encountered ROBLOX HACKING. I got interested and searched how to do this and this is what enticed me to start my coding journey. \nIt was very confusing... so I stopped after a few days",
      type: "normal",
    },
    {
      title: "The Continuation",
      date: "Around March 2021",
      description:
        "I was determined to start this again and learn how to code on my own, even if it will be incredibly difficult. \nI started researching, trying to learn what my first step should be. And once again... I failed.\nDisappointed, I stepped back from it again and focused on other things like Choir.",
      type: "normal",
    },
    {
      title: "The Reawakening",
      date: "May 2022",
      description:
        "I tried putting my hands back on the wheel and try again, this time, without giving up no matter how hard and confusing it gets. FINALLY! I was able to start, though it was rough.\n I started following tutorials",
      type: "important",
    },
  ];

  return (
    <>
      <div className="w-full h-full gap-10 text-white">
        <h1 class="text-left">Coding Story</h1>
        <CodingTimeline items={timelineItems} />;
      </div>
    </>
  );
}

function TimelineItem({ title, date, description, type }) {
    const isImportant = type === "important";
    return (
      <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
        {/* For the green check sign or the important one */}
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full border border-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${
            isImportant
              ? "bg-amber-500 text-amber-50"
              : "bg-emerald-500 text-emerald-50"
          }`}
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width={isImportant ? "12" : "12"}
            height={isImportant ? "12" : "10"}
          >
            {isImportant ? (
              <path d="M12 0a12 12 0 1 0-24 0 12 12 0 0 0 24 0zm0 11a1 1 0 1 1-2 0V5a1 1 0 1 1 2 0v6z" />
            ) : (
              <path
                fillRule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            )}
          </svg>
        </div>
        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
          <div className="flex items-center justify-between space-x-2 mb-1">
            <div className="font-bold text-slate-900">{title}</div>
            <time
              className={`font-caveat font-medium ${
                isImportant ? "text-amber-500" : "text-indigo-500"
              }`}
            >
              {date}
            </time>
          </div>
          <div className="text-slate-500">
            {description.split("\n").map((line, index) => (
              <div className="mt-3" key={index}>{line}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
    

function CodingTimeline({ items }) {
  return (
    // For the time LINE, edit the via-fuschia-500 property to change the color
    <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-fuchsia-500 before:to-transparent">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
          type={item.type}
        />
      ))}
    </div>
  );
}

export default CodingStory;

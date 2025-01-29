function CodingStory() {
  const timelineItems = [
    {
      title: "The Beginning",
      date: "January 1, 2021",
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
      "I tried putting my hands back on the wheel and try again, this time, without giving up no matter how hard and confusing it gets. FINALLY! I was able to start, though it was rough.\n I started following tutorials like `Zero to Hero` and basic Roblox LUAU Scripting.",
      type: "important",
    },
    {
      title: "Major Discovery",
      date: "July 2, 2022",
      description:
      "I discovered GitHub which is very much needed for version control and this has changed my life ever since because I can deal with code changes. And to this day, I still use it. \nI made my very first commit today.",
      type: "normal",
    },
    {
      title: "Stagnancy",
      date: "August 2022 onwards",
      description:
      "I just kept practicing my coding skills and made things for fun!",
      type: "normal",
    },
    {
      title: "Hands-on Experience",
      date: "January 2023",
      description:
      "Finally, our long awaited OJT / Immersion has started. I ran out of slots for the companies I'd wanna work with but this might've just been fate since the company and the department I worked with is the MIS (Management Information System).\n I met one of my mentors who I still talk to till this day. He is the head that built the SYSTEM they are using. \n One of the best things he taught me is about modularizing my code to make it seamless to transition to different programming languages.",
      type: "important",
    },
    {
      title: "Freedom",
      date: "April 2023",
      description:
      "I have graduated from my Senior-Highschool and now have freedom! Alas! But... what now? \nI started with making different projects, games in particular, and slowly built my 1st game.",
      type: "normal",
    },
    {
      title: "The Dilemma",
      date: "June 2023",
      description:
      "I have the decision now to pursue my college degree OR continue to pursue something I truly want, coding the projects that mean something to me. Guess what I chose. \nIt was at this time as well that I took on a massive solo game project.",
      type: "normal",
    },
    {
      title: "Small Success",
      date: "September 2023",
      description:
      "I have finished most of my 1st massive game project! It took me 3 months straight of coding, and if I must say so myself, it looked quite nice! \nBut... there aren't any players yet. Time to advertise on TikTok!\n I started making game advertisements in the form of devlogs and this quickly gained traction over the course of a few weeks. It has gotten to the point where I got 70k VIEWS on one of my videos. \n I made it in the style of also adding the attacks my viewers have suggested, but I was the one giving them choices to pick from.\n In reality, I have already finished those xD.",
      type: "important",
    },
    {
      title: "Another Attempt",
      date: "November 2023",
      description:
      "I focused on my game and advertised it but I think I'm prepared to take on another project. This time, an entirely new one, a horror game.\n This was a big project and I wasn't sure but I was very inspired and had a lot of bold ideas I know I could execute. And, I also had the support of my fans!\n Fast forward a few weeks, I started making a ton of progress and my horror game is looking AND sounding REALLY GREAT! \n I have high-hopes for this game.",
      type: "normal",
    },
    {
      title: "End of a Chapter: New Beginnings",
      date: "April 2024",
      description:
      "I have been making the horror game steadily and it looked quite nice. BUT THAT ISN'T ENOUGH, it was taking too long. I'm just alone and there are times that I wasn't motivated/disciplined to continue it. The potential is there, but I just couldn't execute it being a solo-developer.\nThere is also the issue of needing to start earning money since I chose not to go to college yet to explore. And because of this, I started looking for work from home jobs and I found one through the help of my aunt! \nLittle did I know, this would change my coding journey!",
      type: "normal",
    },
    {
      title: "Snekkk",
      date: "April 2024",
      description:
      "My job is something I really hated because again, I don't like doing things that don't mean much to me. But because of that hatred, that necessity, I started to innovate and thought of ways to make this job easier. I found Python.\n I learned the basics in 5 days (since I already learned to modularize my code when transitioning) and made a working automated bot. My work is now easy!",
      type: "normal",
    },
    {
      title: "Iron Man",
      date: "September 2024",
      description:
      "So everything has become easier because of my coding experience. But I still PROCRASTINATE a lot, and that's why I thought of building my own AI Assistant. JARVIS. \n JARVIS has been very helpful to this day but building him wasn't easy. I had to learn 3 new languages entirely.\n Actually, I've already started learning front-end prior to this, yeah, the timeline is a bit mixed up lol.\n Back to JARVIS, I used Python for the backend, websockets, flask, and CORS for communicating to front-end, and used Electron and Vue JS for the front-end.",
      type: "normal",
    },
    {
      title: "Iron Man v2",
      date: "Present - Jan 2025",
      description:
      "Since then, I have been using JARVIS to help me not procrastinate and do quite a lot like help me manage my schedule, look for files, and a ton more (34 features as of now). It's a lot, yeah.\n Also, I've embarked on learning Tailwind CSS and React Framework, and this is my first project built with it! So yeah, this is a school project but has served its purpose well!",
      type: "important",
    },
  ];
  
  return (
    <>
      <div className="w-full h-full gap-10 text-white">
        <h1 class="text-left">Coding Story</h1>
        <CodingTimeline items={timelineItems} />
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

import React from "react";

function Features() {
  const featuresList = [
    "Explore a variety of landscapes, including mountains, forests, deserts, and ancient ruins.",
    "Use the Alabay's abilities to solve puzzles that involve moving objects, activating mechanisms, or finding hidden clues.",
    "Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.",
    "Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.",
    "Challenge Modes:",
    "- Time Trials: Compete in special timed challenges where the Alabai must navigate through complex mazes or complete puzzles within a time limit.",
    "- Exploration Mastery: A mode that rewards players for fully exploring every nook and cranny of the game's world, uncovering all secrets",
  ];

  return (
    <section className="flex z-10 items-start self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col self-stretch font-bold max-md:max-w-full">
        <h2 className="self-start text-3xl leading-none text-green-300">
          FEATURES
        </h2>
        <ul className="mt-10 text-2xl leading-6 text-white max-md:mt-10 max-md:max-w-full">
          {featuresList.map((feature, index) => (
            <li key={index} className="mb-4">
              {feature.split(" ").map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={
                    word === "mountains" ||
                    word === "forests" ||
                    word === "deserts" ||
                    word === "ancient" ||
                    word === "abilities" ||
                    word === "puzzles" ||
                    word === "Time" ||
                    word === "Trials:" ||
                    word === "Exploration" ||
                    word === "Mastery:"
                      ? "text-green-300"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <aside className="flex flex-col mt-3 max-md:hidden">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/24b9bd5c017e34c69073e2ca66fd5416d2233c448a2aa87086b2f97cbd14efee?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a"
          alt=""
          className="object-contain aspect-square w-[34px]"
        />
        <div className="flex flex-col self-center mt-3 w-[22px] max-md:hidden">
          <div className="flex flex-col pt-36 rounded-2xl bg-zinc-300 bg-opacity-30 max-md:hidden max-md:pt-24">
            <div className="flex shrink-0 bg-green-300 rounded-2xl h-[148px]" />
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a16989ad648818b15ce0c3df1425877fdd7e138ae0926167ec59250a437f455f?placeholderIfAbsent=true&apiKey=2705f1c8cdd44f6a9089432dd175790a"
          alt=""
          className="object-contain mt-3 aspect-square w-[34px]"
        />
      </aside>
    </section>
  );
}

export default Features;
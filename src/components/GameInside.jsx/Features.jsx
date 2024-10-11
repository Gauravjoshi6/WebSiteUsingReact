import React from "react";

function Features() {
  const features = [
    { text: "Explore a variety of landscapes, including ", highlights: ["mountains", "forests", "deserts", "ancient ruins"] },
    { text: "Use the Alabay's ", highlights: ["abilities"], text2: " to solve ", highlights2: ["puzzles"], text3: " that involve moving objects, activating mechanisms, or finding hidden clues." },
    { text: "Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the breed's role in ancient history." },
    { text: "Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles." },
    { text: "Challenge Modes:", subFeatures: [
      { text: "Time Trials", description: ": Compete in special timed challenges where the Alabai must navigate through complex mazes or complete puzzles within a time limit." },
      { text: "Exploration Mastery", description: ": A mode that rewards players for fully exploring every nook and cranny of the game's world, uncovering all secrets" }
    ]}
  ];

  return (
    <section className="self-stretch mt-10 text-2xl leading-6 text-white max-md:mt-10 max-md:max-w-full">
      {features.map((feature, index) => (
        <p key={index}>
          {feature.text}
          {feature.highlights && feature.highlights.map((highlight, hIndex) => (
            <React.Fragment key={hIndex}>
              <span className="text-indigo-300">{highlight}</span>
              {hIndex < feature.highlights.length - 1 && ", "}
            </React.Fragment>
          ))}
          {feature.text2}
          {feature.highlights2 && feature.highlights2.map((highlight, hIndex) => (
            <React.Fragment key={hIndex}>
              <span className="text-indigo-300">{highlight}</span>
              {hIndex < feature.highlights2.length - 1 && ", "}
            </React.Fragment>
          ))}
          {feature.text3}
          {feature.subFeatures && (
            <ul>
              {feature.subFeatures.map((subFeature, sfIndex) => (
                <li key={sfIndex}>
                  - <span className="text-indigo-300">{subFeature.text}</span>{subFeature.description}
                </li>
              ))}
            </ul>
          )}
          <br />
          <br />
        </p>
      ))}
    </section>
  );
}

export default Features;
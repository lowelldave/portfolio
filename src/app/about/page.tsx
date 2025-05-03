import React from "react";

import { Section } from "@/components";

const About = () => {
  return (
    <>
      <Section title="About Me">
        <p>
          I create apps, tools, from scratch using Javascript frameworks like
          React and Vue. I'm also passionate and intricate on designs and
          details of the page to make it better and presentable. I'm trained in
          pressure and learned how to be adaptive for new tech quickly to be
          up-to-date with the trends and standards.
        </p>
      </Section>

      <Section
        settings={{
          bgSrc: "/pup.png",
          bgPosition: "right",
          overlay: {
            style: "dotted",
            color: "#ffd698",
          },
        }}
        className="shadow-innerShadow"
      >
        <div className="education">
          <h2 className="education__school">
            Polytechnic University of the Philippines
          </h2>
          <h2 className="education__course">
            Bachelor of Science in Information Technology
          </h2>
          <h2 className="education__year">2019</h2>
        </div>
      </Section>

      <Section title="Hobbies"></Section>
    </>
  );
};

export default About;

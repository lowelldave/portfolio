import React from "react";

import { Section, Education, AboutMe } from "@/components";

const About = async () => {
  return (
    <>
      <Section
        settings={{
          bg: {
            src: 'sample.jpg',
            isFill: true,
          },
          overlay: {
            style: 'dotted',
            opacity: 0.5
          }
        }}
      >
        <AboutMe />
      </Section>

      <Section className="shadow-innerShadow" title="Education" variant="dark">
        <Education />
      </Section>

      {/* <Section title=""></Section> */}
    </>
  );
};

export default About;

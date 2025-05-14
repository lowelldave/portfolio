import React from "react";

import { AboutMe, Education } from './(sections)';

import { Section } from "@/components";

const Project = async () => {
  return (
    <>
      <Section>
        <AboutMe />
      </Section>

      <Section className="shadow-innerShadow" title="Education" variant="dark">
        <Education />
      </Section>

      {/* <Section title=""></Section> */}
    </>
  );
};

export default Project;

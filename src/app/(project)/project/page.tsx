import { Section } from "@/components";

import { AboutMe, Education } from "./sections";

const Project = () => {
  return (
    <>
      <Section>
        <AboutMe />
      </Section>

      <Section variant="muted" eyebrow="Background" title="Education">
        <Education />
      </Section>
    </>
  );
};

export default Project;

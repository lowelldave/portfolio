import { readJSON } from "@/utils/file";
import type { IResponse } from "@/types/data.type";

import { Section } from "@/components";
import { Hero, ContactMe, ProjectHistory, TechStack, Training, WorkHistory } from './(sections)';

export default async function Home() {
  const { project, stack, training, work, social }: IResponse = await readJSON(
    "/data.json"
  );

  return (
    <>
      <Section
        className="h-screen flex"
        settings={{
          bg: {
            src: "/hero-bg.jpg",
            isFill: true,
            objectPosition: "90% 0",
          },
          overlay: {
            style: "dotted",
          },
        }}
        id="hero"
      >
        <Hero data={social} />
      </Section>

      <Section title="Tech Stack" className="shadow-innerShadow" id="techstack">
        <TechStack data={stack} />
      </Section>

      <Section title="Work History" variant="dark" id="work">
        <WorkHistory data={work} />
      </Section>

      <Section title="Project History" className="shadow-innerShadow" id="project">
        <ProjectHistory data={project} />
      </Section>

      <Section title="Trainings and Certifications" variant="dark" id="training">
        <Training data={training} />
      </Section>

      <Section className="shadow-innerShadow">
        <ContactMe data={social} />
      </Section>
    </>
  );
}

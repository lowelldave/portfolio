import { readJSON } from "@/utils/file";
import type { IResponse } from "@/types/data.type";

import {
  Hero,
  Section,
  TechStack,
  WorkHistory,
  ProjectHistory,
  Training,
  ContactMe,
} from "../components";

export default async function Home() {
  const { project, stack, training, work }: IResponse = await readJSON(
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
            objectPosition: "right",
          },
          overlay: {
            style: "dotted",
          },
        }}
      >
        <Hero />
      </Section>

      <Section title="Tech Stack" className="shadow-innerShadow">
        <TechStack data={stack} />
      </Section>

      <Section title="Work History" variant="dark">
        <WorkHistory data={work} />
      </Section>

      <Section title="Project History" className="shadow-innerShadow">
        <ProjectHistory data={project} />
      </Section>

      <Section title="Trainings and Certifications" variant="dark">
        <Training data={training} />
      </Section>

      <Section className="shadow-innerShadow">
        <ContactMe />
      </Section>
    </>
  );
}

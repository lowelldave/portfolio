import { readJSON } from "@/utils/file";
import type { IResponse } from "@/types/data.type";

import {
  Hero,
  Section,
  TechStack,
  WorkHistory,
  ProjectHistory,
  Training,
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
          bgPosition: "fill",
          bgSrc: "/sample.jpg",
          overlay: {
            style: "dotted",
          },
        }}
      >
        <Hero />
      </Section>

      <Section title="Tech Stack" className="bg-background shadow-innerShadow">
        <TechStack data={stack} />
      </Section>

      <Section title="Work History">
        <WorkHistory data={work} />
      </Section>

      <Section title="Project History" className="bg-mainDark shadow-innerShadow">
        <ProjectHistory data={project} />
      </Section>

      <Section title="Trainings and Certifications">
        <Training data={training} />
      </Section>

      <Section
        className="shadow-innerShadow"
        settings={{
          bgPosition: "fill",
          bgSrc: "/sample.jpg",
          overlay: {
            style: "dotted",
            opacity: 0.5,
          },
        }}
      >
        <h2>SAMPLE</h2>
      </Section>
    </>
  );
}

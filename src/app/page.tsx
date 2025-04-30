import { Hero, Section, TechStack, WorkHistory, ProjectHistory } from '../components';

export default function Home() {
  return (
    <>
      <Section className="h-screen flex" bgsrc="/sample.jpg">
        <Hero />
      </Section>

      <Section title="Tech Stack" className="bg-background shadow-[inset_0px_0px_10px_5px_rgba(0,_0,_0,_0.1)]">
        <TechStack />
      </Section>

      <Section title="Work History">
        <WorkHistory />
      </Section>

      <Section title="Project History" className="bg-mainDark shadow-[inset_0px_0px_10px_5px_rgba(0,_0,_0,_0.1)]">
        <ProjectHistory />
      </Section>
    </>
  );
}

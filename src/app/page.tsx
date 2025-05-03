import { Hero, Section, TechStack, WorkHistory, ProjectHistory } from '../components';

export default function Home() {
  return (
    <>
      <Section
        className="h-screen flex"
        settings={{
          bgPosition:'fill',
          bgSrc: '/sample.jpg',
          overlay: {
            style: 'dotted',
          }
        }}
      >
        <Hero />
      </Section>

      <Section title="Tech Stack" className="bg-background shadow-innerShadow">
        <TechStack />
      </Section>

      <Section title="Work History">
        <WorkHistory />
      </Section>

      <Section title="Project History" className="bg-mainDark shadow-innerShadow">
        <ProjectHistory />
      </Section>

      <Section title="Trainings and Certifications">
        <h2>SAMPLE</h2>
      </Section>

      <Section
        className="shadow-innerShadow"
        settings={{
          bgPosition:'fill',
          bgSrc: '/sample.jpg',
          overlay: {
            style: 'dotted',
            opacity: .5
          }
        }}
      >
        
        <h2>SAMPLE</h2>
      </Section>
    </>
  );
}

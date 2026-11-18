import ProjectDetails from "./ProjectDetails";
import "@/app/styles/detail.css";

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <ProjectDetails projectId={Number(id)} />
    </div>
  );
};

export default ProjectPage;

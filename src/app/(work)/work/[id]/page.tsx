import WorkDetails from "./WorkDetails";
import "@/app/styles/detail.css";

const WorkPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <WorkDetails workId={Number(id)} />
    </div>
  );
};

export default WorkPage;

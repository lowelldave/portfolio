"use client";

import { useQuery } from "@tanstack/react-query";

import { Skeleton } from "@/components";
import { dataQuery } from "@/api/data";

import ProjectHistoryItem from "./ProjectHistoryItem";
import "./style.css";

const ProjectHistory = () => {
  const { data = [], isPending } = useQuery({
    ...dataQuery,
    select: ({ project, stack }) =>
      project.map((item) => ({
        ...item,
        tags: item.stack_id
          .map((id) => stack.find((s) => s.id === id)?.label)
          .filter((label): label is string => !!label),
      })),
  });

  return (
    <div className="project-grid">
      {isPending ? (
        <Skeleton variant="card" count={4} />
      ) : (
        data.map((item, idx) => (
          <ProjectHistoryItem data={item} index={idx} key={`project-${item.id}`} />
        ))
      )}
    </div>
  );
};

export default ProjectHistory;

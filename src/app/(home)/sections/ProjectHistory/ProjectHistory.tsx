"use client";

import React from "react";
import { useProjects } from "@/hooks/useProject";
import { ItemLoader } from "@/components";

import ProjectHistoryItem from "./ProjectHistoryItem";
import "./style.css";

const ProjectHistory = () => {
  const { data, isFetching } = useProjects();

  return (
    <div className="project-history">
      {isFetching ? (
        <ItemLoader />
      ) : (
        <div className="project-history__wrapper">
          {data.map((item) => (
            <ProjectHistoryItem data={item} key={`project-${item.id}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectHistory;

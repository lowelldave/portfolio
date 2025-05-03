import React from "react";

import type { IProjectItem } from '@/types/data.type';

import ProjectHistoryItem from "./ProjectHistoryItem";
import "./style.css";

const ProjectHistory = ({ data }: { data: IProjectItem[] }) => {
  return (
    <div className="project-history">
      { data.map(item => <ProjectHistoryItem data={item} key={`project-${item.id}`} />) }
    </div>
  );
};

export default ProjectHistory;

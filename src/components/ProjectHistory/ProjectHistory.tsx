import React from "react";

import { readJSON } from '@/utils/file';
import type { IResponse } from '@/types/data.type';

import ProjectHistoryItem from "./ProjectHistoryItem";
import "./style.css";

const ProjectHistory = async () => {
  const { project }: IResponse = await readJSON('/data.json');

  return (
    <div className="project-history">
      { project.map(item => <ProjectHistoryItem data={item} key={`project-${item.id}`} />) }
    </div>
  );
};

export default ProjectHistory;

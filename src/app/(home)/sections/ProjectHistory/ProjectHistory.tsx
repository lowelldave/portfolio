'use client';

import React from "react";

import { useQuery } from "@tanstack/react-query";

import type { IProjectItem } from "@/types/data.type";
import { ItemLoader } from "@/components";
import { getProject } from "@/api/data";

import ProjectHistoryItem from "./ProjectHistoryItem";
import "./style.css";

const ProjectHistory = () => {
    const { data, isFetching } = useQuery<IProjectItem[]>({
        queryKey: ["api/getProject"],
        queryFn: getProject,
        initialData: [],
    });

    return (
        <div className="project-history">
            {isFetching ? (
                <ItemLoader />
            ) : (
              <div className="project-history__wrapper">
                {
                  data.map((item) => (
                      <ProjectHistoryItem
                          data={item}
                          key={`project-${item.id}`}
                      />
                  ))
                }
              </div>
            )}
        </div>
    );
};

export default ProjectHistory;

"use client";

import React from "react";
import Image from "next/image";

import { ItemLoader } from "@/components";
import { useProject } from "@/hooks/useProject";

import StackList from "./StackList";
import "./style.css";

interface IProjectDetails {
  projectId: string;
}

const ProjectDetails = ({ projectId }: IProjectDetails) => {
  const { data, isFetching } = useProject({ id: projectId });

  if (!data || isFetching) {
    return <ItemLoader />;
  }

  return (
    <>
      <div className="project__wrapper">
        <h1 className="project__title">{data?.title}</h1>
        <h2 className="project__subtitle">{`${data?.company ?? "Unknown"} Project`}</h2>

        <p className="project__description">{data?.description || "N/A"}</p>

        {data?.imgUrl && (
          <div className="project__image-wrapper">
            <Image src={data.imgUrl} alt="project-image" fill />
          </div>
        )}
      </div>
      <StackList data={{ stack: data?.stack ?? [] }} />
    </>
  );
};

export default ProjectDetails;

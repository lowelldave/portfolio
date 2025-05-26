'use client';

import React from "react";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import type { IResponseGetProjectData } from "@/types/data.type";
import { getProjectById } from "@/api/data";
import { ItemLoader } from "@/components";

import StackList from "./StackList";
import "./style.css";

interface IProjectDetails {
    projectId: string;
}

const ProjectDetails = ({ projectId }: IProjectDetails) => {

    const { data, isFetching } = useQuery<
        IResponseGetProjectData | undefined
    >({
        queryKey: ["api/getProjectById"],
        queryFn: () => getProjectById(parseInt(projectId)),
    });

    if (!data || isFetching) return <ItemLoader />;

    return (
        <>
            <div className="project__wrapper">
                <h1 className="project__title">{data.project?.title}</h1>
                <h2 className="project__subtitle">{`${data.work?.name ?? 'Unknown'} Project`}</h2>

                <p className="project__description">{data.project?.description}</p>

                {data.project?.imgUrl && (
                    <div className="project__image-wrapper">
                        <Image src={data.project.imgUrl} alt="project-image" fill />
                    </div>
                )}
            </div>
            <StackList data={{ stack: data?.stack ?? [] }} />
        </>
    );
};

export default ProjectDetails;

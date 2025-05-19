import React from "react";
import Image from "next/image";

import { readJSON } from "@/utils/file";
import type { IResponse } from "@/types/data.type";
import { StackItem } from "@/components";

import "./style.css";

interface IProjectPage {
    params: Promise<{ id: string }>;
}

const ProjectPage = async ({ params }: IProjectPage) => {
    const { project, work, stack }: IResponse = await readJSON("/data.json");
    const { id } = await params;

    const projectData = project.find((item) => item.id === parseInt(id));

    if (!projectData) return;

    const workData = work.find((item) => projectData.work_id === item.id);

    if (!workData) return;

    return (
        <div className="project">
            <div className="project__wrapper">
                <h1 className="project__title">{projectData.title}</h1>
                <h2 className="project__subtitle">{`${workData.name} Project`}</h2>

                <p className="project__description">
                    {projectData.description}
                </p>

                {projectData.imgUrl && (
                    <div className="project__image-wrapper">
                        <Image
                            src={projectData.imgUrl}
                            alt="project-image"
                            fill
                        />
                    </div>
                )}
            </div>
            <div className="stack">
                <h2 className="stack__title">Tech Stack Used:</h2>
                <div className="stack__container">
                    {/* change to customized stack */}
                    {stack.map((item) => (
                        <StackItem data={item} key={`stack-${item.id}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;

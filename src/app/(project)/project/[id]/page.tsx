import React from "react";

import ProjectDetails from "./ProjectDetails";
import "./style.css";

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div className="project">
            <ProjectDetails projectId={id} />
        </div>
    );
};

export default ProjectPage;

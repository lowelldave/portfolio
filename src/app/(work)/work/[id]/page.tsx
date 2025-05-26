import React from "react";

import WorkDetails from "./WorkDetails";
import "./style.css";

const ProjectPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;

    return (
        <div className="work">
            <WorkDetails workId={id} />
        </div>
    );
};

export default ProjectPage;

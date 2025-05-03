import React from "react";

import type { ITrainingItem } from "@/types/data.type";

import TrainingItem from "./TrainingItem";
import "./style.css";

const Training = ({ data }: { data: ITrainingItem[] }) => {
    return (
        <div className="training">
            {data.map((item) => (
                <TrainingItem data={item} key={`training-${item.id}`} />
            ))}
        </div>
    );
};

export default Training;

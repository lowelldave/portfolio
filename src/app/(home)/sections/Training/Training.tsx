"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import type { ITrainingItem } from "@/types/data.type";
import { ItemLoader } from "@/components";
import { getTraining } from "@/api/data";

import TrainingItem from "./TrainingItem";
import "./style.css";

const Training = () => {
    const { data, isFetching } = useQuery<ITrainingItem[]>({
        queryKey: ["api/getTraining"],
        queryFn: getTraining,
        initialData: [],
    });

    return (
        <div className="training">
            {isFetching ? (
                <ItemLoader />
            ) : (
                <div className="training__wrapper">
                {
                    data.map((item) => (
                        <TrainingItem data={item} key={`training-${item.id}`} />
                    )) 
                }    
                </div>
            )}
        </div>
    );
};

export default Training;

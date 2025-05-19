"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";

import type { IWorkItem } from "@/types/data.type";
import { ItemLoader } from "@/components";
import { getWork } from "@/api/data";

import WorkItem from "./WorkItem";
import "./style.css";

const WorkHistory = () => {
    const { data, isFetching } = useQuery<IWorkItem[]>({
        queryKey: ["api/getWork"],
        queryFn: getWork,
        initialData: [],
    });

    return (
        <div className="work">
            {isFetching ? (
                <ItemLoader />
            ) : (
                data.map((item) => (
                    <WorkItem data={item} key={`workItem-${item.id}`} />
                ))
            )}
        </div>
    );
};

export default WorkHistory;

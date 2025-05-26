'use client';

import React from "react";
import { useQuery } from "@tanstack/react-query";

import type { IStackItem } from "@/types/data.type";
import { StackItem, ItemLoader } from "@/components";
import { getStack } from "@/api/data";

import "./style.css";

const TechStack = () => {
    const { data, isFetching } = useQuery<IStackItem[]>({
        queryKey: ["api/getStack"],
        queryFn: getStack,
        initialData: [],
    });

    return (
        <div className="techstack">
            <div className="techstack__container">
                {isFetching ? (
                    <ItemLoader />
                ) : (
                    data.map((item) => (
                        <StackItem data={item} key={`stack-${item.id}`} />
                    ))
                )}
            </div>
        </div>
    );
};

export default TechStack;

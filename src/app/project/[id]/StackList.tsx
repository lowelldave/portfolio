import React from "react";

import type { IStackItem } from "@/types/data.type";
import { StackItem } from "@/components";

import "./style.css";

interface IStackList {
    data: {
        stack: IStackItem[];
    };
}

const StackList = ({ data }: IStackList) => {
    return (
        <div className="stack">
            <h2 className="stack__title">Tech Stack Used:</h2>
            <div className="stack__container">
                {data.stack.map((item) => (
                    <StackItem data={item} key={`stack-${item.id}`} />
                ))}
            </div>
        </div>
    );
};

export default StackList;

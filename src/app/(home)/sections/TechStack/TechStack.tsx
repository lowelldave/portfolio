"use client";

import React from "react";
import { StackItem, ItemLoader } from "@/components";
import useTechStack from "@/hooks/useTechStack";

import "./style.css";

const TechStack = () => {
  const { data, isFetching } = useTechStack();

  return (
    <div className="techstack">
      <div className="techstack__container">
        {isFetching ? (
          <ItemLoader />
        ) : (
          data.map((item) => <StackItem data={item} key={`stack-${item.id}`} />)
        )}
      </div>
    </div>
  );
};

export default TechStack;

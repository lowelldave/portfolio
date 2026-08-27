"use client";

import React from "react";
import { ItemLoader } from "@/components";
import useProfessionalExperience from "@/hooks/useProfessionalExp";

import WorkItem from "./WorkItem";
import "./style.css";

const WorkHistory = () => {
  const { data, isFetching } = useProfessionalExperience();

  return (
    <div className="work">
      {isFetching ? (
        <ItemLoader />
      ) : (
        data.map((item) => <WorkItem data={item} key={`workItem-${item.id}`} />)
      )}
    </div>
  );
};

export default WorkHistory;

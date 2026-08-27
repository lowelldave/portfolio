"use client";

import React from "react";
import { ItemLoader } from "@/components";
import useTraining from "@/hooks/useTraining";

import TrainingItem from "./TrainingItem";
import "./style.css";

const Training = () => {
  const { data, isFetching } = useTraining();

  return (
    <div className="training">
      {isFetching ? (
        <ItemLoader />
      ) : (
        <div className="training__wrapper">
          {data.map((item) => (
            <TrainingItem data={item} key={`training-${item.id}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Training;

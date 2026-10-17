"use client";

import React from "react";
import Link from "next/link";

import type { ITrainingItem } from "@/types/data.type";

import "./style.css";

const TrainingItem = ({ data }: { data: ITrainingItem }) => {
  return (
    <div className="training__item">
      <Link href={data.linkUrl} target="_blank" className="training__link">
        <h3 className="training__title">{data.name}</h3>
        <div className="training__details">
          <b className="training__provider">{data.provider}</b>
          <time className="training__date">{data.date}</time>
        </div>
      </Link>
    </div>
  );
};

export default TrainingItem;

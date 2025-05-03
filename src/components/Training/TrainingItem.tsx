"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

import type { ITrainingItem } from "@/types/data.type";

import "./style.css";

const TrainingItem = ({ data }: { data: ITrainingItem }) => {
  return (
    <motion.div
      className="training__item"
      initial={{
        transform: "translateY(10%)",
        opacity: 0,
      }}
      whileInView={{
        transform: "translateY(0%)",
        opacity: 1,
      }}
      whileHover={{
        transform: "translateY(-5%)",
      }}
    >
      <Link href={data.linkUrl} target="_blank" className="training__link">
        <h3 className="training__title">{data.name}</h3>
        <div className="training__details">
          <b className="training__provider">{data.provider}</b>
          <time className="training__date">{data.date}</time>
        </div>
      </Link>
    </motion.div>
  );
};

export default TrainingItem;

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { ImageWithFallback } from "@/components";
import type { IProjectItem } from "@/types/data.type";

import "./style.css";

const ProjectHistoryItem = ({ data }: { data: IProjectItem }) => {
  const [isShow, setIsShow] = useState(data.imgUrl !== "");

  return (
    <motion.div
      initial={{
        transform: "translateY(10%)",
        opacity: 0,
      }}
      whileInView={{
        transform: "translateY(0%)",
        opacity: 1,
      }}
      viewport={{ once: true }}
    >
        {/* Use Modal for details  */}
      <div className="project-history__item">
        {isShow && (
          <AnimatePresence mode="wait">
            <motion.div className="project-history__image-container" layout>
              <ImageWithFallback
                className="project-history__image"
                src={data.imgUrl}
                alt={`${data.title}-image`}
                loading="lazy"
                fill
                fallbackSrc="/default.webp"
                onError={() => setIsShow(false)}
              />
            </motion.div>
          </AnimatePresence>
        )}
        <div className="project-history__details-container">
          <h3 className="project-history__title">{data.title}</h3>
          <p className="project-history__description">{data.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectHistoryItem;

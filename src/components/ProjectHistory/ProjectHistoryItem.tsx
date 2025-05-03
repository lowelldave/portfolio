"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

import type { IProjectItem } from "@/types/data.type";

import ImageWithFallback from "../ImageWithFallback/ImageWIthFallback";
import "./style.css";

const ProjectHistoryItem = ({ data }: { data: IProjectItem }) => {
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
        >
            <Link
                href={`/project/${data.id}`}
                className="project-history__item"
            >
                <div className="project-history__image-container">
                    <ImageWithFallback
                        className="project-history__image"
                        src={data.imgUrl}
                        alt={`${data.title}-image`}
                        loading="lazy"
                        fill
                        fallbackSrc="/default.webp"
                    />
                </div>
                <div className="project-history__details-container">
                    <h3 className="project-history__title">{data.title}</h3>
                    <p className="project-history__description">
                        {data.description}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
};

export default ProjectHistoryItem;

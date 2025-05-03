"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

import type { IWorkItem } from "@/types/data.type";

import ImageWithFallback from "../ImageWithFallback/ImageWIthFallback";
import "./style.css";

const WorkItem = ({ data }: { data: IWorkItem }) => {
    return (
        <>
            <motion.div
                className="work__item"
                initial={{
                    transform: "translateX(30%)",
                    opacity: 0,
                }}
                whileInView={{
                    transform: "translateX(0%)",
                    opacity: 1,
                }}
            >
                <div className="work__item-wrapper" />
                <div className="work__info">
                    <div className="work__info-container">
                        <h2 className="work__name">{data.name}</h2>
                        <h3 className="work__position">{data.position}</h3>
                        <label className="work__date">{data.date}</label>
                    </div>

                    <div className="work__image-container">
                        <ImageWithFallback
                            className="work__image"
                            src={data.logoSrc}
                            alt={`${data.name}-logo`}
                            loading="lazy"
                            width={100}
                            height={0}
                            fallbackSrc="/default.webp"
                        />
                    </div>
                </div>

                <p className="work__details">{data.description}</p>

                <div className="work__action-container">
                    <Link
                        href={`/work-history/${data.id}`}
                        className="work__link-button"
                    >
                        More Details
                    </Link>
                </div>
            </motion.div>
        </>
    );
};

export default WorkItem;

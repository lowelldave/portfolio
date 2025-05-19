"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

import ImageWithFallback from "@/components/ImageWithFallback/ImageWIthFallback";

import type { IStackItem } from "@/types/data.type";

import "./style.css";

const TechStackItem = ({ data }: { data: IStackItem }) => {
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
            transition={{
                delay: 0.25,
            }}
            viewport={{ once: true }}
        >
            <Link
                href={data.url}
                rel="noopener noreferrer"
                target="_blank"
                className="stack__item"
            >
                <ImageWithFallback
                    src={data.imgUrl ?? "#"}
                    width={100}
                    height={100}
                    alt={data.name ?? ""}
                    loading="lazy"
                    className="stack__image"
                    fallbackSrc="/default.webp"
                />
                <label className="stack__name">{data.label ?? ""}</label>
            </Link>
        </motion.div>
    );
};

export default TechStackItem;

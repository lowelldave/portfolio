"use client";

import React from "react";
import Link from "next/link";

import ImageWithFallback from "@/components/ImageWithFallback/ImageWIthFallback";

import type { IStackItem } from "@/types/data.type";

import "./style.css";

const TechStackItem = ({ data }: { data: IStackItem }) => {
  return (
    <div>
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
    </div>
  );
};

export default TechStackItem;

import React from "react";
import Link from "next/link";

import { ImageWithFallback } from '@/components';

import type { IStackItem } from '@/types/data.type';

import "./style.css";

const TechStackItem = ({ data }: { data: IStackItem }) => {
  return (
      <Link
        href={data.url}
        rel="noopener noreferrer"
        target="_blank"
        className="techstack__item"
      >
        <ImageWithFallback
          src={data.imgUrl ?? "#"}
          width={0}
          height={0}
          alt={data.name ?? ""}
          loading="lazy"
          className="techstack__image"
          fallbackSrc="/default.webp"
        />
        <label className="techstack__name">{data.label ?? ""}</label>
      </Link>
  );
};

export default TechStackItem;

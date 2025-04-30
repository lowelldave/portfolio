import React from "react";
import Image from "next/image";
import Link from "next/link";

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
        <Image
          src={data.imgUrl ?? "#"}
          width={0}
          height={0}
          alt={data.name ?? ""}
          loading="lazy"
          className="techstack__image"
        />
        <label className="techstack__name">{data.label ?? ""}</label>
      </Link>
  );
};

export default TechStackItem;

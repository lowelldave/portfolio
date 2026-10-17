"use client";

import { useState } from "react";
import Link from "next/link";

import { ImageWithFallback } from "@/components";
import type { IProjectItem } from "@/types/data.type";

import "./style.css";

const ProjectHistoryItem = ({ data }: { data: IProjectItem }) => {
  const [isShow, setIsShow] = useState(data.imgUrl !== "");

  return (
    <div>
      {/* Use Modal for details  */}
      <Link href={`/project/${data.id}`} className="project-history__item">
        {isShow && (
          <div className="project-history__image-container">
            <ImageWithFallback
              className="project-history__image"
              src={data.imgUrl}
              alt={`${data.title}-image`}
              loading="lazy"
              fill
              fallbackSrc="/default.webp"
              onError={() => setIsShow(false)}
            />
          </div>
        )}
        <div className="project-history__details-container">
          <h3 className="project-history__title">{data.title}</h3>
          <p className="project-history__description">{data.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectHistoryItem;

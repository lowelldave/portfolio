"use client";

import { useState } from "react";
import Link from "next/link";

import { ImageWithFallback } from "@/components";
import type { IProjectItem } from "@/types/data.type";

const MAX_TAGS = 3;

interface IProjectHistoryItem {
  data: IProjectItem & { tags: string[] };
  index: number;
}

const ProjectHistoryItem = ({ data, index }: IProjectHistoryItem) => {
  const [hasImage, setHasImage] = useState(data.imgUrl !== "");
  const extraTags = data.tags.length - MAX_TAGS;

  return (
    <Link href={`/project/${data.id}`} className="project-card reveal">
      {/* Only projects with a screenshot get a media area; the rest stay compact. */}
      {hasImage && (
        <div className="project-card__media">
          <ImageWithFallback
            className="project-card__image"
            src={data.imgUrl}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            loading="lazy"
            fallbackSrc="/default.webp"
            onError={() => setHasImage(false)}
          />
        </div>
      )}

      <div className="project-card__body">
        <p className="project-card__index">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="project-card__title">{data.title}</h3>
        <p className="project-card__description">{data.description}</p>

        <div className="project-card__footer">
          <ul className="project-card__tags">
            {data.tags.slice(0, MAX_TAGS).map((tag) => (
              <li key={tag} className="project-card__tag">
                {tag}
              </li>
            ))}
            {extraTags > 0 && <li className="project-card__tag">+{extraTags}</li>}
          </ul>
          <span className="link-arrow" aria-hidden="true">
            <span className="arrow">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectHistoryItem;

import Link from "next/link";

import { ImageWithFallback } from "@/components";
import type { IWorkItem } from "@/types/data.type";

const WorkItem = ({ data }: { data: IWorkItem }) => {
  return (
    <li className="timeline__item reveal">
      <div className="timeline__meta">
        <time className="timeline__date">{data.date}</time>
        <div className="timeline__logo">
          <ImageWithFallback
            src={data.logoSrc}
            alt={`${data.name} logo`}
            width={160}
            height={64}
            loading="lazy"
            fallbackSrc="/default.webp"
          />
        </div>
      </div>

      <div className="timeline__body">
        <h3 className="timeline__company">{data.name}</h3>
        <p className="timeline__role">{data.position}</p>
        <p className="timeline__description">{data.description}</p>
        <Link href={`/work/${data.id}`} className="link-arrow">
          View details <span className="arrow">→</span>
        </Link>
      </div>
    </li>
  );
};

export default WorkItem;

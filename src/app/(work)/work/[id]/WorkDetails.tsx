"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { dataQuery, selectWorkById } from "@/api/data";
import { Skeleton, StackList } from "@/components";

const WorkDetails = ({ workId }: { workId: number }) => {
  const { data, isPending } = useQuery({
    ...dataQuery,
    select: (d) => selectWorkById(d, workId),
    throwOnError: true,
  });

  if (isPending) {
    return (
      <div className="detail-skeleton">
        <Skeleton variant="block" count={1} />
        <Skeleton variant="row" count={3} />
      </div>
    );
  }
  if (!data) notFound();

  return (
    <article>
      <header className="detail__header">
        <div className="detail__heading">
          <p className="eyebrow">{data.work.date}</p>
          <h1 className="detail__title">{data.work.name}</h1>
          <p className="detail__subtitle">{data.work.position}</p>
        </div>

        {data.work.logoSrc && (
          <div className="detail__logo">
            <Image src={data.work.logoSrc} alt={`${data.work.name} logo`} fill sizes="160px" />
          </div>
        )}
      </header>

      <section className="detail__block">
        <h2 className="detail__block-title">Responsibilities</h2>
        <p className="detail__lead">{data.work.description}</p>
      </section>

      {data.project.length > 0 && (
        <section className="detail__block">
          <h2 className="detail__block-title">Projects</h2>
          <ol className="detail__projects">
            {data.project.map((item, idx) => (
              <li key={`project-${item.id}`}>
                <Link href={`/project/${item.id}`} className="detail__project">
                  <span className="detail__project-index">{String(idx + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="detail__project-title">{item.title}</h3>
                    <p className="detail__project-description">{item.description}</p>
                  </div>
                  <span className="link-arrow" aria-hidden="true">
                    <span className="arrow">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </section>
      )}

      <StackList stack={data.stack} title="Tech used" />
    </article>
  );
};

export default WorkDetails;

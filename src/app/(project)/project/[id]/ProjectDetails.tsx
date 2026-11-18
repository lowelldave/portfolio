"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useQuery } from "@tanstack/react-query";

import { dataQuery, selectProjectById } from "@/api/data";
import { Skeleton, StackList } from "@/components";

const ProjectDetails = ({ projectId }: { projectId: number }) => {
  const { data, isPending } = useQuery({
    ...dataQuery,
    select: (d) => selectProjectById(d, projectId),
    throwOnError: true,
  });

  if (isPending) {
    return (
      <div className="detail-skeleton">
        <Skeleton variant="block" count={1} />
        <Skeleton variant="card" count={1} />
      </div>
    );
  }
  if (!data) notFound();

  return (
    <article>
      <header className="detail__header">
        <div className="detail__heading">
          {data.work ? (
            <Link href={`/work/${data.work.id}`} className="eyebrow hover:underline">
              {data.work.name} project
            </Link>
          ) : (
            <p className="eyebrow">Project</p>
          )}
          <h1 className="detail__title">{data.project.title}</h1>
        </div>
      </header>

      {data.project.imgUrl && (
        <div className="detail__media">
          <Image
            src={data.project.imgUrl}
            alt={`${data.project.title} screenshot`}
            fill
            sizes="(min-width: 896px) 896px, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <section className="detail__block">
        <h2 className="detail__block-title">Overview</h2>
        <p className="detail__lead">{data.project.description}</p>
      </section>

      <StackList stack={data.stack} title="Built with" />
    </article>
  );
};

export default ProjectDetails;

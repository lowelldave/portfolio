"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ItemLoader } from "@/components";
import { useWork } from "@/hooks/useWork";

import "./style.css";

interface IWorkDetails {
  workId: string;
}

const WorkDetails = ({ workId }: IWorkDetails) => {
  const { data, isFetching } = useWork({ id: workId });

  if (!data || isFetching) return <ItemLoader />;

  return (
    <>
      <div className="work__wrapper">
        <div className="work__container">
          <h1 className="work__title">{data?.name}</h1>

          {data?.logoSrc && (
            <div className="work__image-wrapper">
              <Image src={data.logoSrc} alt="work-image" fill />
            </div>
          )}
        </div>

        <h2 className="work__subtitle">Responsibilities:</h2>

        <p className="work__description">{data?.description}</p>
      </div>

      <div className="project">
        <h1 className="project__title">Projects:</h1>

        <div className="project__list">
          {data.project?.map((item) => (
            <Link
              href={`/project/${item.id}`}
              className="project__item"
              key={`project-${item.id}`}
            >
              <label className="project__item-title">{item.title}</label>

              <p className="project__item-description">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkDetails;

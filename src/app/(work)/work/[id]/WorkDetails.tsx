'use client';

import React from "react";
import Image from "next/image";

import { useQuery } from "@tanstack/react-query";

import type { IResponseGetWorkData } from "@/types/data.type";
import { getWorkById } from "@/api/data";
import { ItemLoader } from "@/components";

import StackList from "./StackList";
import "./style.css";

interface IWorkDetails {
    workId: string;
}

const WorkDetails = ({ workId }: IWorkDetails) => {

    const { data, isFetching } = useQuery<
        IResponseGetWorkData | undefined
    >({
        queryKey: ["api/getWorkById"],
        queryFn: () => getWorkById(parseInt(workId)),
    });

    if (!data || isFetching) return <ItemLoader />;

    return (
        <>
            <div className="work__wrapper">
                <div className="work__container">
                    <h1 className="work__title">{data.work?.name}</h1>

                    {data.work?.logoSrc && (
                    <div className="work__image-wrapper">
                        <Image src={data.work.logoSrc} alt="work-image" fill />
                    </div>
                )}
                </div>
                
                <h2 className="work__subtitle">Responsibilities:</h2>

                <p className="work__description">{data.work?.description}</p>
            </div>

            <div className="project">
                <h1 className="project__title">Projects:</h1>

                <div className="project__list">
                    {data.project?.map((item) => 
                        <div className="project__item" key={`project-${item.id}`}>
                            <label className="project__item-title">
                                {item.title}
                            </label>

                            <p className="project__item-description">
                                {item.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <StackList data={{ stack: data?.stack ?? [] }} />

        </>
    );
};

export default WorkDetails;

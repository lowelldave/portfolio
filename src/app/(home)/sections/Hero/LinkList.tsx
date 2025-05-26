"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import { ISocialItem } from '@/types/data.type';
import { getSocials } from "@/api/data";
import { ItemLoader } from '@/components';

import LinkItem from "./LinkItem";

const LinkList = () => {
    const { data, isFetching } = useQuery<ISocialItem[]>({
        queryKey: ["api/getSocials"],
        queryFn: getSocials,
        initialData: [],
        refetchOnWindowFocus: false
    });

    return (
        <div className="hero__links-container">
            <div className="hero__links-wrapper">
                {isFetching ? (
                    <ItemLoader />
                ) : (
                    data.map((item) => (
                        <LinkItem data={item} key={`link-${item.name}`} />
                    ))
                )}
            </div>
        </div>
    );
};

export default LinkList;

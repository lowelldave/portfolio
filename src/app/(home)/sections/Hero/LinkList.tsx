"use client";
import React from "react";
import { ItemLoader } from "@/components";
import useSocials from "@/hooks/useSocials";

import LinkItem from "./LinkItem";

const LinkList = () => {
  const { data, isFetching } = useSocials();

  return (
    <div className="hero__links-container">
      <div className="hero__links-wrapper">
        {isFetching ? (
          <ItemLoader />
        ) : (
          data.map((item) => <LinkItem data={item} key={`link-${item.name}`} />)
        )}
      </div>
    </div>
  );
};

export default LinkList;

import React from "react";
import Link from "next/link";

import { ImageWithFallback } from "@/components";
import type { ISocialItem } from '@/types/data.type';

const LinkItem = ({ data }: { data: ISocialItem }) => {
  return (
      <Link href={data.linkUrl} className="hero__links-item">
        <ImageWithFallback
          src={data.imgUrl}
          fill
          alt={data.name}
          className="hero__links-image"
          loading="lazy"
          fallbackSrc="/default.webp"
        />
      </Link>
  );
};

export default LinkItem;

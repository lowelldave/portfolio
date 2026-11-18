import type { IStackItem } from "@/types/data.type";

import ImageWithFallback from "../ImageWithFallback/ImageWithFallback";
import "./style.css";

const StackItem = ({ data }: { data: IStackItem }) => {
  return (
    <a
      href={data.url}
      rel="noopener noreferrer"
      target="_blank"
      className="stack-item"
      title={`${data.label} — opens in a new tab`}
    >
      <ImageWithFallback
        src={data.imgUrl}
        width={40}
        height={40}
        alt=""
        loading="lazy"
        className="stack-item__logo"
        fallbackSrc="/default.webp"
      />
      <span className="stack-item__name">{data.label}</span>
    </a>
  );
};

export default StackItem;

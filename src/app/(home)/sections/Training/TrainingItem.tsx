import type { ITrainingItem } from "@/types/data.type";

const TrainingItem = ({ data }: { data: ITrainingItem }) => {
  return (
    <li className="reveal">
      <a
        href={data.linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="training-item"
        aria-label={`${data.name} certificate (opens in a new tab)`}
      >
        <div>
          <h3 className="training-item__title">{data.name}</h3>
          <p className="training-item__meta">
            <span>{data.provider}</span>
            <span aria-hidden="true">·</span>
            <time>{data.date}</time>
          </p>
        </div>
        <span className="training-item__icon" aria-hidden="true">
          ↗
        </span>
      </a>
    </li>
  );
};

export default TrainingItem;

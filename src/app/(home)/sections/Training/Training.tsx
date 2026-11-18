"use client";

import { useQuery } from "@tanstack/react-query";

import { Skeleton } from "@/components";
import { dataQuery } from "@/api/data";

import TrainingItem from "./TrainingItem";
import "./style.css";

const Training = () => {
  const { data = [], isPending } = useQuery({ ...dataQuery, select: (d) => d.training });

  return (
    <ul className="training-list">
      {isPending ? (
        <Skeleton variant="block" count={4} />
      ) : (
        data.map((item) => <TrainingItem data={item} key={`training-${item.id}`} />)
      )}
    </ul>
  );
};

export default Training;

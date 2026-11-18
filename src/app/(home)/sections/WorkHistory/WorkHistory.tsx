"use client";

import { useQuery } from "@tanstack/react-query";

import { Skeleton } from "@/components";
import { dataQuery } from "@/api/data";

import WorkItem from "./WorkItem";
import "./style.css";

const WorkHistory = () => {
  const { data = [], isPending } = useQuery({ ...dataQuery, select: (d) => d.work });

  return (
    <ol className="timeline">
      {isPending ? (
        <Skeleton variant="row" count={3} />
      ) : (
        data.map((item) => <WorkItem data={item} key={`work-${item.id}`} />)
      )}
    </ol>
  );
};

export default WorkHistory;

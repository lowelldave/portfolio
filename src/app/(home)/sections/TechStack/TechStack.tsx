"use client";

import { useQuery } from "@tanstack/react-query";

import { StackItem, Skeleton } from "@/components";
import { dataQuery } from "@/api/data";

const TechStack = () => {
  const { data = [], isPending } = useQuery({ ...dataQuery, select: (d) => d.stack });

  return (
    <div className="stack-grid reveal">
      {isPending ? (
        <Skeleton variant="tile" count={16} />
      ) : (
        data.map((item) => <StackItem data={item} key={`stack-${item.id}`} />)
      )}
    </div>
  );
};

export default TechStack;

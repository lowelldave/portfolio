import type { IStackItem } from "@/types/data.type";

import StackItem from "../StackItem/StackItem";

const StackList = ({ stack, title = "Tech stack" }: { stack: IStackItem[]; title?: string }) => {
  if (stack.length === 0) return null;

  return (
    <section className="mt-16">
      <h2 className="mb-6 text-2xl font-medium">{title}</h2>
      <div className="stack-grid">
        {stack.map((item) => (
          <StackItem data={item} key={`stack-${item.id}`} />
        ))}
      </div>
    </section>
  );
};

export default StackList;

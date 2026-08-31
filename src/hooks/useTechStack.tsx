import { useQuery } from "@tanstack/react-query";
import { getStack } from "@/api/data";
import type { IStackItem } from "@/types/data.type";
import { StackResponse } from "@/api/data";

const useTechStack = () => {
  const { data, isFetching } = useQuery<StackResponse>({
    queryKey: ["api/getStack"],
    queryFn: getStack,
    initialData: [],
    staleTime: 0,
  });

  const formatData: IStackItem[] = data.map(
    ({ id, name, label, img_url, link_url }) => ({
      id,
      name: name ?? "",
      label: label ?? "",
      imgUrl: img_url ?? "/default.png",
      url: link_url ?? "",
    }),
  );

  return { data: formatData, isFetching };
};

export default useTechStack;

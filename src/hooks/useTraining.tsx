import { useQuery } from "@tanstack/react-query";
import { getTraining } from "@/api/data";
import type { ITrainingItem } from "@/types/data.type";
import { TrainingResponse } from "@/api/data";

const useTraining = () => {
  const { data, isFetching } = useQuery<TrainingResponse>({
    queryKey: ["api/getTraining"],
    queryFn: getTraining,
    initialData: [],
    staleTime: 0,
  });

  const formatData: ITrainingItem[] = data.map(
    ({ id, name, provider, date, link_url }) => ({
      id,
      name: name ?? "",
      provider: provider ?? "",
      date: date ?? "",
      linkUrl: link_url ?? "",
    }),
  );

  return { data: formatData, isFetching };
};

export default useTraining;

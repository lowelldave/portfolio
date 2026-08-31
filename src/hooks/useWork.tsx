import { useQuery } from "@tanstack/react-query";
import { getWork } from "@/api/data";
import type { IWorkItem } from "@/types/data.type";
import { WorkResponse } from "@/api/data";

interface UseWorkInterface {
  id?: string;
}

export const useWork = ({ id = "" }: UseWorkInterface) => {
  const { data, isFetching, error } = useQuery<WorkResponse>({
    queryKey: ["api/getWork", id],
    queryFn: getWork(id),
    staleTime: 0,
  });

  if (!data) {
    return { error: error };
  }

  const formatData = data.reduce<IWorkItem>(
    (prev, curr) => {
      const { id, company, date, description, logo_src, position, project } =
        curr;

      return {
        id,
        name: company.name ?? "",
        position: position ?? "",
        date: date ?? "",
        description: description ?? "",
        logoSrc: logo_src ?? "",
        project: project,
      };
    },
    {
      date: "",
      description: "",
      id: 0,
      logoSrc: "",
      position: "",
      project: [],
    },
  );

  return { data: formatData, isFetching };
};

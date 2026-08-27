import { useQuery } from "@tanstack/react-query";
import { getProfessionalExp } from "@/api/data";
import { ProfessionalExpResponse } from "@/api/data";

const useProfessionalExperience = () => {
  const { data, isFetching } = useQuery<ProfessionalExpResponse>({
    queryKey: ["api/getProfessionalExp"],
    queryFn: getProfessionalExp,
    initialData: [],
    staleTime: 0,
  });

  const formatData = data.map(
    ({ id, position, description, date, logo_src }) => ({
      id: id ?? 0,
      position: position ?? "",
      description: description ?? "",
      date: date ?? "",
      logoSrc: logo_src ?? "",
      project: [],
    }),
  );

  return { data: formatData, isFetching };
};

export default useProfessionalExperience;

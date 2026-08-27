import { useQuery } from "@tanstack/react-query";
import { getSocials } from "@/api/data";
import type { ISocialItem } from "@/types/data.type";
import { SocialResponse } from "@/api/data";

const useSocials = () => {
  const { data, isFetching } = useQuery<SocialResponse>({
    queryKey: ["api/getSocials"],
    queryFn: getSocials,
    initialData: [],
    staleTime: 0,
  });

  const formatData: ISocialItem[] = data.map(
    ({ id, name, label, img_url, link_url }) => ({
      id,
      name: name ?? "",
      label: label ?? "",
      imgUrl: img_url ?? "/default.png",
      linkUrl: link_url ?? "",
    }),
  );

  return { data: formatData, isFetching };
};

export default useSocials;

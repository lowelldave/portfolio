import { useQuery } from "@tanstack/react-query";
import { getProjects, getProject } from "@/api/data";
import type { IProjectItem, IStackItem } from "@/types/data.type";
import { ProjectsResponse, ProjectResponse } from "@/api/data";

interface UseProjectInterface {
  id?: string;
}

export const useProjects = () => {
  const { data, isFetching } = useQuery<ProjectsResponse>({
    queryKey: ["api/getProject"],
    queryFn: getProjects,
    initialData: [],
    staleTime: 0,
  });

  const formatData: IProjectItem[] = data.map(
    ({
      id,
      title,
      description,
      img_url,
      work_id,
      professional_experience,
    }) => ({
      id,
      title,
      company: professional_experience.company?.name,
      description,
      imgUrl: img_url,
      work_id: work_id,
      stack: [],
    }),
  );

  return { data: formatData, isFetching };
};

export const useProject = ({ id = "" }: UseProjectInterface) => {
  const { data, isFetching, error } = useQuery<ProjectResponse>({
    queryKey: ["api/getProject", id],
    queryFn: getProject(id),
    staleTime: 0,
  });
  
  if (!data) { return { error: error } }

  const formatData = data.reduce<IProjectItem>((prev, curr) => {
    const { project } = curr;
    const { id, img_url, label, link_url, name } = curr.tech_stack;

    const currentStack: IStackItem = {
      id,
      label: label ?? '',
      name: name ?? '',
      url:link_url ?? '',
      imgUrl: img_url ?? '',
    }

    return {
      id: project.id,
      title: project.title,
      company: project.professional_experience.company.name,
      description: project.description,
      imgUrl: project.img_url,
      work_id: project.id,
      stack: [...prev.stack, currentStack],
    };
  }, {
    id: 0,
    title: '',
    company: '',
    description: '',
    imgUrl: '',
    work_id: 0,
    stack: [],
  });

  return { data: formatData, isFetching };
};

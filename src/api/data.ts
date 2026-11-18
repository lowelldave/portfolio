import { queryOptions } from "@tanstack/react-query";

import type { IResponse, IResponseGetProjectData, IResponseGetWorkData } from "@/types/data.type";

const fetchData = async (): Promise<IResponse> => {
  const res = await fetch("/data.json");

  if (!res.ok) throw new Error(`Failed to load data.json (${res.status})`);

  return res.json();
};

/**
 * All sections read from the same static file, so they share a single query
 * (one network request) and pick their slice via `select`.
 */
export const dataQuery = queryOptions({
  queryKey: ["data"],
  queryFn: fetchData,
  staleTime: Infinity,
});

/** Returns `null` when no project matches `id`. */
export const selectProjectById = (
  { project, work, stack }: IResponse,
  id: number,
): IResponseGetProjectData | null => {
  const projectData = project.find((item) => item.id === id);
  if (!projectData) return null;

  return {
    project: projectData,
    work: work.find((item) => item.id === projectData.work_id),
    stack: stack.filter((item) => projectData.stack_id.includes(item.id)),
  };
};

/** Returns `null` when no work entry matches `id`. */
export const selectWorkById = (
  { project, work, stack }: IResponse,
  id: number,
): IResponseGetWorkData | null => {
  const workData = work.find((item) => item.id === id);
  if (!workData) return null;

  const projectData = project.filter((item) => item.work_id === id);
  const stackIds = new Set(projectData.flatMap((item) => item.stack_id));

  return {
    work: workData,
    project: projectData,
    stack: stack.filter((item) => stackIds.has(item.id)),
  };
};

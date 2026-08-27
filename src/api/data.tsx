import { createClient } from "@/utils/supabase/client";

const supabase = createClient();

// export const getWorkById = async (
//   id: number,
// ): Promise<IResponseGetWorkData | undefined> => {
//   try {
//     const { project, work, stack }: IResponse = await fetch("/data.json").then(
//       (data) => data.json(),
//     );

//     const returnObj: IResponseGetWorkData = {};

//     const workData = work.find((item) => item.id === id);

//     if (!workData) throw new Error("No found data");

//     const projectData = project.filter((item) => item.work_id === id);

//     returnObj.project = projectData;

//     if (workData) returnObj.work = workData;

//     const stackIdList: number[] = projectData.reduce(
//       (prev: number[], curr, idx) => {
//         if (idx === 0) return [...curr.stack_id];

//         // return new unique array of ids
//         return [...new Set([...prev, ...curr.stack_id])];
//       },
//       [],
//     );

//     const stackList = stack.filter((item) => stackIdList.includes(item.id));

//     returnObj.stack = stackList;

//     return returnObj;
//   } catch (err) {
//     console.log("Error", err);
//   }
// };

export const getSocials = async () => {
  const { data, error } = await supabase
    .from("social")
    .select(
      `
      id,
      name,
      label,
      img_url,
      link_url,
      profile!inner(
        name
      )
    `,
    )
    .eq("profile.id", 1);

  if (error) throw error;
  return data;
};

export const getStack = async () => {
  const { data, error } = await supabase.from("tech_stack").select("*");

  if (error) throw error;
  return data;
};

export const getProfessionalExp = async () => {
  const { data, error } = await supabase
    .from("professional_experience")
    .select(
      `
    id,
    position,
    description,
    date,
    logo_src,
    profile!inner(
      name
    )
    `,
    )
    .eq("profile.id", 1);

  if (error) throw error;
  return data;
};

export const getProjects = async () => {
  const query = supabase
    .from("project")
    .select(
      `
    id,
    title,
    description,
    img_url,
    work_id,
    profile_id,
    profile!inner(
      id,
      name
    ),
    professional_experience!inner(
      id,
      position,
      company:company(name)
    )
    `,
    )
    .eq("profile.id", 1);

  const { data, error } = await query;

  if (error) throw error;
  return data;
};

export const getTraining = async () => {
  const { data, error } = await supabase
    .from("training")
    .select(
      `
    id,
    name,
    link_url,
    date,
    provider,
    profile!inner(
      name
    )
    `,
    )
    .eq("profile.id", 1);

  if (error) throw error;
  return data;
};

export const getProject = (id: string) => async () => {
  const query = supabase
    .from("project_stack")
    .select(
      `
    id,
    project!inner(
      id,
      title,
      description,
      img_url,
      professional_experience!inner(
        position,
        company!inner(
          name
        )
      )
    ),
    tech_stack!inner(
      id,
      name,
      label,
      link_url,
      img_url
    )
    `,
    )
    .eq("project.id", parseInt(id));

  const { data, error } = await query;

  if (error) throw error;

  return data;
};

export const getWork = (id: string) => async () => {
  const query = supabase
    .from("professional_experience")
    .select(
      `
    id,
    position,
    description,
    date,
    logo_src,
    company!inner(
      name
    ),
    project!inner(
      id,
      title,
      description,
      img_url
    )
    `,
    )
    .eq("id", parseInt(id));

  const { data, error } = await query;

  if (error) throw error;

  return data;
};

export type StackResponse = Awaited<ReturnType<typeof getStack>>;
export type SocialResponse = Awaited<ReturnType<typeof getSocials>>;
export type ProfessionalExpResponse = Awaited<
  ReturnType<typeof getProfessionalExp>
>;
export type TrainingResponse = Awaited<ReturnType<typeof getTraining>>;
export type ProjectsResponse = Awaited<ReturnType<typeof getProjects>>;
export type ProjectResponse = Awaited<
  ReturnType<ReturnType<typeof getProject>>
>;
export type WorkResponse = Awaited<ReturnType<ReturnType<typeof getWork>>>;

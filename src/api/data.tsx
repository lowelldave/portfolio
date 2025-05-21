import type { IResponse, IResponseGetProjectData } from "@/types/data.type";

export const getSocials = async () => {
    const { social }: IResponse = await fetch("/data.json").then((data) =>
        data.json()
    );

    return social ?? [];
};

export const getStack = async () => {
    const { stack }: IResponse = await fetch("/data.json").then((data) =>
        data.json()
    );

    return stack ?? [];
};

export const getWork = async () => {
    const { work }: IResponse = await fetch("/data.json").then((data) =>
        data.json()
    );

    return work ?? [];
};

export const getProject = async () => {
    const { project }: IResponse = await fetch("/data.json").then((data) =>
        data.json()
    );

    return project ?? [];
};

export const getTraining = async () => {
    const { training }: IResponse = await fetch("/data.json").then((data) =>
        data.json()
    );

    return training ?? [];
};

export const getProjectById = async (id: number): Promise<IResponseGetProjectData | undefined> => {
    try {
        const { project, work, stack }: IResponse = await fetch("/data.json").then(
            (data) => data.json()
        );

        const returnObj: IResponseGetProjectData = {};

        const projectData = project.find((item) => item.id === id);

        if (!projectData) throw new Error('No found data');
        returnObj.project = projectData;

        const workData = work.find((item) => item.id === projectData.work_id);
        if (workData) returnObj.work = workData;

        const stackData = stack.filter((item) => projectData.stack_id.includes(item.id));
        returnObj.stack = stackData;

        return returnObj;
    } catch(err) {
        console.log('Error', err);
    }
};

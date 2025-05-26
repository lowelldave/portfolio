import type {
    IResponse,
    IResponseGetProjectData,
    IResponseGetWorkData,
} from "@/types/data.type";

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

export const getProjectById = async (
    id: number
): Promise<IResponseGetProjectData | undefined> => {
    try {
        const { project, work, stack }: IResponse = await fetch(
            "/data.json"
        ).then((data) => data.json());

        const returnObj: IResponseGetProjectData = {};

        const projectData = project.find((item) => item.id === id);

        if (!projectData) throw new Error("No found data");
        returnObj.project = projectData;

        const workData = work.find((item) => item.id === projectData.work_id);
        if (workData) returnObj.work = workData;

        const stackData = stack.filter((item) =>
            projectData.stack_id.includes(item.id)
        );
        returnObj.stack = stackData;

        return returnObj;
    } catch (err) {
        console.log("Error", err);
    }
};

export const getWorkById = async (
    id: number
): Promise<IResponseGetWorkData | undefined> => {
    try {
        const { project, work, stack }: IResponse = await fetch(
            "/data.json"
        ).then((data) => data.json());

        const returnObj: IResponseGetWorkData = {};

        const workData = work.find((item) => item.id === id);

        if (!workData) throw new Error("No found data");

        const projectData = project.filter((item) => item.work_id === id);

        returnObj.project = projectData;

        if (workData) returnObj.work = workData;

        const stackIdList: number[] = projectData.reduce(
            (prev: number[], curr, idx) => {
                if (idx === 0) return [...curr.stack_id];
                
                // return new unique array of ids
                return [...new Set([...prev, ...curr.stack_id])];
            },
            []
        );

        const stackList = stack.filter((item) => stackIdList.includes(item.id));

        returnObj.stack = stackList;

        return returnObj;
    } catch (err) {
        console.log("Error", err);
    }
};

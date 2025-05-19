export interface IWorkItem {
    id: number;
    name: string;
    position: string;
    date: string;
    description: string;
    logoSrc: string;
};

export interface IStackItem {
    id: number;
    url: string;
    name: string;
    label: string;
    imgUrl: string;
}

export interface IProjectItem {
    id: number;
    title: string;
    description: string;
    imgUrl: string;
    work_id: number;
}

export interface ISocialItem {
    id: number;
    name: string;
    label: string;
    imgUrl: string;
    linkUrl: string;
}

export interface ITrainingItem {
    id: number;
    name: string;
    provider: string;
    date: string;
    linkUrl: string;
}

export interface IResponse {
    work: IWorkItem[];
    stack: IStackItem[];
    project: IProjectItem[];
    social: ISocialItem[];
    training: ITrainingItem[];
}
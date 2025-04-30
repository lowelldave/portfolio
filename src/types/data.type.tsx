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
}

export interface IResponse {
    work: IWorkItem[];
    stack: IStackItem[];
    project: IProjectItem[];
}
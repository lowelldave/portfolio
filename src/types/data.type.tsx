export interface IWorkItem {
  id: number;
  name?: string;
  position: string;
  date: string;
  description: string;
  logoSrc: string;
  project: {
    id: number;
    title: string | null;
    description: string | null;
    img_url: string | null;
  }[];
}

export interface IStackItem {
  id: number;
  url: string;
  name: string;
  label: string;
  imgUrl: string;
}

export interface IProjectItem {
  id: number;
  title: string | null;
  company: string | null | undefined;
  description: string | null;
  imgUrl: string | null;
  work_id: number | null;
  stack: IStackItem[];
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

export interface IResponseGetProjectData {
  project?: IProjectItem;
  work?: IWorkItem;
  stack?: IStackItem[];
}

export interface IResponseGetWorkData {
  work?: IWorkItem;
  project?: IProjectItem[];
  stack?: IStackItem[];
}

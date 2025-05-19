import type { IResponse } from '@/types/data.type';

export const getSocials = async () => {
    const response: IResponse = await fetch('/data.json').then(data => data.json());
    
    return response.social ?? [];
};

export const getStack = async () => {
    const response: IResponse = await fetch('/data.json').then(data => data.json());

    return response.stack ?? [];
};

export const getWork = async () => {
    const response: IResponse = await fetch('/data.json').then(data => data.json());

    return response.work ?? [];
};

export const getProject = async () => {
    const response: IResponse = await fetch('/data.json').then(data => data.json());

    return response.project ?? [];
};

export const getTraining = async () => {
    const response: IResponse = await fetch('/data.json').then(data => data.json());

    return response.training ?? [];
};
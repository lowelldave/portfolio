import path from 'path';
import { promises as fs } from 'fs';

export const readJSON = async (directory: string) => {
    const jsonDirectory = path.join(process.cwd(), 'public');
    const file = await fs.readFile(jsonDirectory + directory, 'utf8');
    const list = JSON.parse(file);

    return list;
};
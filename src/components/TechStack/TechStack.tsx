import React from 'react'

import { readJSON } from '@/utils/file';
import type { IResponse } from '@/types/data.type';

import TechStackItem from './TechStackItem';
import './style.css';

export default async function TechStack() {
  const { stack }: IResponse = await readJSON('/data.json');

  return (
    <div className="techstack">
        <div className="techstack__container">
          {stack.map((item, idx: number) => <TechStackItem data={item} key={`stack-${item.id}`} />)}
        </div>
    </div>
  )
};

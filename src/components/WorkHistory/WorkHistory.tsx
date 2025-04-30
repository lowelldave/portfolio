import React from 'react';

import { readJSON } from '@/utils/file';
import type { IResponse } from '@/types/data.type';

import WorkItem from './WorkItem';
import './style.css';

const WorkHistory = async () => {
  const { work }: IResponse = await readJSON('/data.json');

  return (
    <div className="work">
      {work.map((item) =>  <WorkItem data={item} key={`workItem-${item.id}`} />)}
    </div>
  )
};

export default WorkHistory;

import React from 'react';

import type { IWorkItem } from '@/types/data.type';

import WorkItem from './WorkItem';
import './style.css';

const WorkHistory = ({ data }: { data: IWorkItem[] }) => {
  return (
    <div className="work">
      {data.map((item) =>  <WorkItem data={item} key={`workItem-${item.id}`} />)}
    </div>
  )
};

export default WorkHistory;

import React from 'react';

import type { IStackItem } from '@/types/data.type';

import TechStackItem from './TechStackItem';
import './style.css';

const TechStack = ({ data }: { data: IStackItem[] }) => {
  return (
    <div className="techstack">
        <div className="techstack__container">
          {data.map(item => <TechStackItem data={item} key={`stack-${item.id}`} />)}
        </div>
    </div>
  )
};

export default TechStack;
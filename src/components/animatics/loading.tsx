'use client'

import React from 'react'
import { GiAbstract016 } from "react-icons/gi";

interface LoadingProps {
    isLoading: boolean;
    color: string;
    size: number;
}

const Loading = ({ isLoading, color, size }: LoadingProps) => {
  return (
    <div>
        {isLoading && (
            <GiAbstract016 size={size} className={color + 'animate-spin transition-all'}/>
        )}
    </div>
  )
}

export default Loading
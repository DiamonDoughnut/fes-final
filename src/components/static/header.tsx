import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';
import { TooltipContent, Tooltip, TooltipTrigger } from '../ui/tooltip';
import {} from '@radix-ui/react-tooltip';

const Header = () => {
  return (
    <div className='h-fit relative w-[1280px] max-h-[80px]'>
        <header>
            <div className="flex justify-between mx-4 my-6 absolute top-0 left-0 h-full w-full bg-gray-900 text-slate-200">
                <div className="logo">
                    <Tooltip>
                        <TooltipTrigger>
                            {/* <Logo/> */}
                        </TooltipTrigger>
                        <TooltipContent className="text-white bg-slate-600 rounded-lg">
                            <p>Home/New Search</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
                <nav>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href={''} target='_blank'>Info</Link>
                        </TooltipTrigger>
                        <TooltipContent className="text-white bg-slate-600 rounded-lg">
                            <p >More about this App</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                            <Button asChild className='bg-slate-500 hover:bg-slate-300 active:bg-white rounded-lg'>
                                <Link href={''} target='_blank'>Contact</Link>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent className="text-white bg-slate-600 rounded-lg">
                            <p>Contact the creator of this App</p>
                        </TooltipContent>
                    </Tooltip>
                </nav>
            </div>
        </header>
    </div>
  )
}

export default Header
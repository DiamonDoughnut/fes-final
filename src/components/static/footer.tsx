import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between mx-4 my-6 w-[1280px] max-h-[80px] bg-black'>
        <div className="logo flex flex-col gap-y-2 text-slate-200">
            {/* <Logo /> */}
            <p className='text-sm'> © DiamonDoughnut 2025 </p>
        </div>
        <div className="links flex gap-x-2 text-slate-300">
            <Link href={''} target='_blank' className="hover:text-slate-100 active:text-white">Contact</Link>
            <Link href={''} target='_blank' className="hover:text-slate-100 active:text-white">Info</Link>
            <Link href={''} target='_blank' className="hover:text-slate-100 active:text-white">Source</Link>
        </div>
    </div>
  )
}

export default Footer
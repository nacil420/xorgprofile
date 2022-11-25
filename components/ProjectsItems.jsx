import React from 'react'
import Image from 'next/image'
import propertyImg from '../public/assets/projects/property.jpg'
import Link from 'next/link'

const ProjectsItems = ({title, backgroundImg, projectUrl}) => {
  return (
    
    <div className='realtive flex items-center justify-center h-auto w-full shadow-xl shadow-black-800 rounded-xl p-4 group hover:bg-gradient-to-r from-[#9c9c9c] to-[#ececec]'>
    <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/>
<div className='hidden group-hover:block absolute top-[50] left-[50] translate-x-[-50] translate-y-[-50]'>
    <h3 className='text-2xl text-orange-600 font-bold tracking-wider text-center'>{title}</h3>
    <p className='pb-4 pt-2 text-white text-center'>React JS & Next JS</p>
    <Link href={projectUrl}>
        <p className='text-center py-3 rounded-lg bg-orange-600 text-white font-bold text-lg cursor-pointer '>More Info</p>
    </Link>
</div>
</div>
  )
}

export default ProjectsItems
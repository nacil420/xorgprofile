import React from 'react'
import Image from 'next/image'
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'
import jsImg from '../public/assets/skills/javascript.png'
import reactImg from '../public/assets/skills/react.png'
import twImg from '../public/assets/skills/tailwind.png'
import nextImg from '../public/assets/skills/nextjs.png'
import nodeImg from '../public/assets/skills/node.png'
import gitImg from '../public/assets/skills/github1.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full  lg:h-screen p-2 '>
        <div className='max-w-[1240px] pt-20 mx-auto flex flex-col justify-center h-full py-16'>
            <p className='uppercase text-2xl tracking-widest text-center text-[#ff5e00]'>Skills</p>
            <h2 className='py-4 text-4xl text-center font-bold'>What I Can Do</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={htmlImg} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>HTML</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={cssImg} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>CSS</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={jsImg} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>JavaScript</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={reactImg} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>React</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={twImg} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Tailwind</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={nextImg} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>NextJS</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={nodeImg} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>NodeJS</h3>
                </div>
            </div>
            </div>
            <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                <Image src={gitImg} width="64" height="64" alt="/"/>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <h3>Github</h3>
                </div>
            </div>
            </div>

            </div>
        </div>
    </div>
  )
}

export default Skills
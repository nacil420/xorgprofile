/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsWhatsapp} from 'react-icons/bs'
import { FaGithub, FaInstagramSquare} from 'react-icons/fa'

const Main = () => { const text = `you're free`;
  return ( 
    <div id='main' className='w-full h-screen text-center'>
        <div className='max-w-[1230px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-4xl font-bold text-gray-700'>Hi, I'm <span className='text-[#ff5e00]'>XORG</span></h1>
                <h1 className='py-1 text-4xl font-bold text-gray-700'>A  Front-End Web Developer</h1>
                <p className='py-4 text-gray-800 max-w-[70%] m-auto'>
                    I'm a front-end developer specializing in building (and occasionally designing) exeptional digital experiences. Currently I'm focused on building responsive front-end web applications while learning back-end technologies
                </p>
                <div className='flex items-center justify-around max-w-[330] m-auto py-4'>
                    <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <a href='https://www.instagram.com/ramdhanihadiw_/'><FaInstagramSquare/></a>
                    </div>
                    <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <a href='https://github.com/nacil420'><FaGithub/></a>
                    </div>
                    <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <a href="https://www.ramdhanihw420@gmail.com"><AiOutlineMail/></a>
                    </div>
                    <div className='rounded-full justify-center items-center shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 '>
                        <a href='https://wa.me/6281225568420'><BsWhatsapp/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
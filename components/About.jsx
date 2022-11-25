/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 items-center py-16  bg-orange-600'>
        <div className='max-w-[1240px] h-screen justify-center text-center pt-20 px-8 text-white items-center m-auto md:grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-2xl tracking-widest text-white '>About</p>
                <h2 className='py-4 text-4xl text-black font-bold'>Who I Am</h2>
                <p className='py-2 text-white-600'>// I am not your normal developer \\</p>
                <p className='py-2 text-white-600'>I have spent the last 2 years working as a professional design graphic freelance. I started working with HTML & CSS to make some edits on a small business website that I was operating. What I thought was just a few small edits turned into a love for programming.</p>
                <p className='py-2 text-white-600'>Fascinated with how intricate programming can be I was quickly drawn to learn more. I started learning javascript and was oven more ethused with making websites interactive. I then started freelancing for TopUP companies on the multiple platforms. I am now spending my time building projects with React JS,Next JS, and learning new technologies</p>
                <p className='py-2 text-gray-600 cursor-pointer font-bold underline'><Link href="/#projects">Check out some of my latest projects.</Link></p>
            </div>
        </div>
    </div>
  )
}

export default About
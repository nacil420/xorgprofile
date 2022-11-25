/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Image from 'next/image'
import propertyImg from '../public/assets/projects/property.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import Link from 'next/link'
import ProjectsItems from './ProjectsItems'

const Projects = () => {
  return (
    <div id='projects' className='w-full py-16 bg-orange-600'>
        <div className='max-w-[1240px] mx-auto px-2 pt-20 py-16'>
            <p className='text-xl text-center tracking-widest uppercase text-white'>Projects</p>
            <h2 className='py-4 text-center font-bold text-2xl'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectsItems title='Property Finder' backgroundImg={propertyImg} projectUrl='https://wa.me/6281225568420'/>
                <ProjectsItems title='Crypto App' backgroundImg={cryptoImg} projectUrl='https://wa.me/6281225568420'/>
                <ProjectsItems title='Netflix' backgroundImg={netflixImg} projectUrl='https://wa.me/6281225568420'/>
                <ProjectsItems title='Twitct App' backgroundImg={twitchImg} projectUrl='https://wa.me/6281225568420'/>

            </div>
        </div>
    </div>
  )
}

export default Projects
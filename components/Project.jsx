'use client'
import React from 'react'
import Image from 'next/image'


const Project = (props) => {
    return (
        <div className='flex gap-16 my-24 justify-center'>
            <div className='card rounded-lg relative w-2/5 h-96'>
                <a href={props.liveLink} target="_blank">

                    <Image
                        src={props.imageSrc}
                        alt={`screenshot of my project named ${props.name}`}
                        fill={true}
                        loading='eager'
                        className='rounded-lg'
                    />
                </a>
            </div>


            <div className='w-2/5 flex flex-col gap-8 justify-between py-6'>
                <h3 className='text-5xl font-bold'>{props.name}</h3>
                <div className='text-gray-400 text-2xl'>
                    {props.children}
                </div>

                <div className='flex gap-10 text-2xl'>
                    <a href={props.liveLink} target="_blank">
                        <div className='flex gap-1 hover:text-yellow-200'>
                            LIVE PREVIEW
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="sc-bBXxYQ cIgwYf" height="27" width="27" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </div>
                    </a>

                    <a href={props.githubLink} target="_blank">
                        <div className='flex gap-1 hover:text-yellow-200'>
                            GITHUB
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="sc-bBXxYQ cIgwYf" height="27" width="27" xmlns="http://www.w3.org/2000/svg"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        </div>
                    </a>
                </div>


            </div>

        </div>
    )
}

export default Project
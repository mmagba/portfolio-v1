'use client'
import { useEffect } from "react";
import Image from 'next/image'


const Project = (props) => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        });

        const hiddenElementsRight = document.querySelectorAll(".custom__hidden_right");
        const hiddenElementsLeft = document.querySelectorAll(".custom__hidden_left");

        hiddenElementsRight.forEach((element) => {
            observer.observe(element);
        });

        hiddenElementsLeft.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            hiddenElementsRight.forEach((element) => {
                observer.unobserve(element);
            });
            hiddenElementsLeft.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);








    return (
        <div className={`flex gap-16 px-2 my-24 justify-center items-center lg:flex-row flex-col ${props.imageOnRight === true ? ' lg:flex-row-reverse' : ''}`} >





            <Image
                src={props.imageSrc}
                alt={`screenshot of my project named ${props.name}`}
                width={600}
                height={400}
                loading='eager'
                className={`rounded-lg ${props.imageOnRight === true ? 'custom__hidden_left' : 'custom__hidden_right '}`}
            />




            <div className={`text-center lg:text-left md:w-4/5 lg:w-2/5 flex flex-col gap-8 justify-between py-6 ${props.imageOnRight === true ? 'custom__hidden_left late' : 'custom__hidden_right late'}`}>
                <h3 className='text-5xl font-bold'>{props.name}</h3>
                <div className='text-gray-400 text-2xl'>
                    {props.children}
                </div>

                <div className='flex gap-10 text-2xl mx-auto lg:mx-0'>
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

        </div >
    )
}

export default Project
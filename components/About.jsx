'use client'

import { useEffect } from "react";



const About = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".custom__hidden_left");

        hiddenElements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            hiddenElements.forEach((element) => {
                observer.unobserve(element);
            });
        };
    }, []);






    return (
        <section className='gray__bg'>
            <div id='about' className='custom__container text-white flex flex-col lg:flex-row justify-between py-12 gap-12'> 

                <div className='lg:w-1/2 text-xl custom__hidden_left late mt-8 text-left'>
                    <h2 className='text-white text-4xl mb-6 text-left'><span className='text-base'>01. </span>About</h2>
                    <p>Hi there! I'm Mahmoud, a web developer. (as you might have guessed with the title).</p>
                    <p className='mt-4'>I'm deeply passionate about transforming ideas into seamless digital experiences, specializing in crafting code that breathes life into your visions.</p>
                    <p className='mt-4'>With a focus on client satisfaction, I bring technical expertise, creative problem-solving, and a client-centered approach to every project. Let's work together to create exceptional web experiences.
                    </p>


                </div>

                <div className="grid-container custom__hidden_left">

                    <div className="item">
                        <i className="devicon-html5-plain colored"></i>
                        <span>HTML</span>
                    </div>

                    <div className="item">
                        <i className="devicon-css3-plain colored"></i>
                        <span>CSS</span>
                    </div>

                    <div className="item">
                        <i className="devicon-javascript-plain colored"></i>
                        <span>Javascript</span>
                    </div>

                    <div className="item">
                        <i className="devicon-react-original colored"></i>
                        <span>React</span>
                    </div>

                    <div className="item">
                        <i className="devicon-nextjs-original"></i>
                        <span>Next.js</span>
                    </div>

                    <div className="item">
                        <i className="devicon-tailwindcss-plain colored"></i>
                        <span>Tailwind</span>
                    </div>

                    <div className="item">
                        <i className="devicon-nodejs-plain"></i>
                        <span>Node.js</span>
                    </div>

                    <div className="item">
                        <i className="devicon-express-original"></i>
                        <span>Express.js</span>
                    </div>

                    <div className="item">
                        <i className="devicon-mongodb-plain colored"></i>
                        <span>MongoDB</span>
                    </div>

                    <div className="item">
                        <i className="devicon-git-plain colored"></i>
                        <span>Git</span>
                    </div>

                    <div className="item">
                        <i className="devicon-github-original"></i>
                        <span>Github</span>
                    </div>

                    <div className="item">
                        <i className="devicon-npm-original-wordmark colored"></i>
                        <span>npm</span>
                    </div>
                </div>
            </div>



        </section>
    )
}

export default About
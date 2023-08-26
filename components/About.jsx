import React from 'react'

const About = () => {
    return (
        <section className='gray__bg'>
            <div id='about' className='custom__container text-white py-6 flex flex-col md:flex-row justify-between'>

                <div className='md:w-1/2 text-xl '>
                    <h2 className='text-white text-4xl mb-6'><span className='text-base'>01. </span>About</h2>
                    <p>Hi there! I'm Mahmoud, a web developer. (as you might have guessed with the title)</p>
                    <p className='mt-4'>I'm deeply passionate about transforming ideas into seamless digital experiences, specializing in crafting code that breathes life into your visions.</p>
                    <p className='mt-4'>With a focus on time management and client satisfaction, I deliver results that surpass deadlines and expectations. I bring technical expertise, creative problem-solving, and a client-centered approach to every project. Let's work together to create exceptional web experiences
                    </p>


                </div>

                <div className="grid-container">

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
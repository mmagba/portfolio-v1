'use client'
import Project from './Project'

const Projects = () => {
  return (
    <section id='projects' >
      <div className="custom__container">
        <h2 className='text-4xl my-4'><span className='text-base'>02. </span>Projects</h2>
      </div>

      <Project
        name='Manage Landing Page'
        githubLink='https://github.com/mmagba/manage-landing-page'
        liveLink='https://manage-landing-page-one-pink.vercel.app/'
        imageSrc='/manageScreenShot.png'
      >
        <p className='mb-7'>This is a Frontend Mentor challange (the original designs can be found <a className='underline' target="_blank" href="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5">here</a>).</p>
        <p className='italic'>Built using React, Next.js and Tailwind CSS.</p>
      </Project>
      <div className="seperator"></div>

      <Project
        name='Gym Website'
        githubLink='https://github.com/mmagba/gym-website'
        liveLink='https://mmagba.github.io/gym-website/#/'
        imageSrc='/gymScreenShot.png'
      >
        <p className='mb-7'>A fully responsive informational multi-page gym website with multiple hover effects.</p>
        <p className='italic'>Built using React, React Router and Vanilla CSS.</p>
      </Project>

    </section>
  )
}

export default Projects
'use client'
import Project from './Project'

const Projects = () => {
  return (
    <section id='projects' className='py-12' >
      <div className="custom__container">
        <h2 className='text-4xl my-4'><span className='text-base'>02. </span>Projects</h2>
      </div>

      
      <Project
        name='URL Shortener'
        githubLink='https://github.com/mmagba/url-shortener'
        liveLink='https://url-shortener-j9pru7umt-mmagba.vercel.app/'
        imageSrc='/shortScreenShot.png'
        imageOnRight={false}
      >
        <p className='mb-4'>A fully responsive landing page with link shortening functionality using a 3rd party API, displayed results are saved in local storage.</p>
        <p className='mb-7'>This is a Frontend Mentor challange (the original designs can be found <a className='underline' target="_blank" href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G">here</a>).</p>
        <p className='italic'>Built using React, Next.js, and Tailwind CSS.</p>
      </Project>





      <div className="seperator"></div>

      <Project
        name='Gym Website'
        githubLink='https://github.com/mmagba/gym-website'
        liveLink='https://mmagba.github.io/gym-website/#/'
        imageSrc='/screenSizes.png'
        imageOnRight={true}
      >
        <p className='mb-7'>A fully responsive multi-page informational gym website with multiple hover effects.</p>
        <p className='italic'>Built using React, React Router, and Vanilla CSS.</p>
      </Project>

      <div className="seperator"></div>


      <Project
        name='Manage Landing Page'
        githubLink='https://github.com/mmagba/manage-landing-page'
        liveLink='https://manage-landing-page-one-pink.vercel.app/'
        imageSrc='/manageScreenShot.png'
        imageOnRight={false}
      >
        <p className='mb-7'>This is a Frontend Mentor challange (the original designs can be found <a className='underline' target="_blank" href="https://www.frontendmentor.io/challenges/manage-landing-page-SLXqC6P5">here</a>).</p>
        <p className='italic'>Built using React, Next.js, and Tailwind CSS.</p>
      </Project>

    </section>
  )
}

export default Projects
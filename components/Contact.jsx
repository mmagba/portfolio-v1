import React from 'react'

const Contact = () => {
    return (
        <section className='custom__container' id='contact'>

            <h2 className='text-white text-4xl my-4'><span className='text-base'>03. </span>Contact</h2>

            <div className='flex flex-col items-center justify-center w-screen'>

                <button className='text-white bg-lime-500 hover:bg-lime-400 p-4 pb-6 m-4 rounded-lg text-5xl'>
                    <a href={'https://www.upwork.com/freelancers/~0115b1a3e4a0b71b2a'} target="_blank">
                        Contact me on Upwork
                    </a>
                </button>
            </div>
        </section>
    )
}

export default Contact
import React from 'react'

const Contact = () => {
    return (
        <section className='gray__bg' id='contact'>
            <div className='custom__container'>


                <h2 className='text-white text-4xl my-10'><span className='text-base'>03. </span>Contact</h2>

                <div className='flex justify-center'>

                    <button className='text-white bg-lime-500 hover:bg-lime-400 p-4 pb-6 rounded-lg text-5xl mt-16 mb-20  '>
                        <a href={'https://www.upwork.com/freelancers/~0115b1a3e4a0b71b2a'} target="_blank">
                            Contact me on Upwork
                        </a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Contact
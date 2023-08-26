'use client'


const Nav = () => {


    const smoothScroll = (targetId) => {
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <nav className='fixed  py-4 text-yellow-100 w-full text-xl'>
            <div className='flex gap-8 custom__container'>
                <a onClick={() => smoothScroll('#about')} className='cursor-pointer'>About</a>
                <a onClick={() => smoothScroll('#projects')} className='cursor-pointer'>Projects</a>
                <a onClick={() => smoothScroll('#contact')} className='cursor-pointer'>Contact</a>
            </div>

        </nav>
    )
}

export default Nav
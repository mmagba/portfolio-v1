'use client'

export default function Title() {

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const hackerEffect = (event) => {
        let interval = null;
        let iteration = 0;

        clearInterval(interval);


        interval = setInterval(() => {


            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if (iteration >= event.target.dataset.value.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }



    return (
        <>
            
            <div className='flex flex-col justify-center items-center h-screen w-screen bg-black text-white text-6xl md:text-8xl lg:text-9xl text-left'>

                <div>
                    <h1 data-value="MAHMOUD" onMouseOver={hackerEffect} className='hover:bg-white hover:text-black rounded-md title__word font-thin'>
                        MAHMOUD
                    </h1>
                    <h1 data-value="AGBARIA" onMouseOver={hackerEffect} className='hover:bg-white hover:text-black rounded-md ml-16 title__word'>
                        AGBARIA
                    </h1>
                    <h1 data-value="WEB" onMouseOver={hackerEffect} className='hover:bg-white hover:text-black rounded-md ml-32 font-extrabold title__word'>
                        WEB
                    </h1>
                    <h1 data-value="DEVELOPER" onMouseOver={hackerEffect} className='hover:bg-white hover:text-black rounded-md ml-48 font-extrabold title__word'>
                        DEVELOPER
                    </h1>
                </div>
            </div>
            <div className="thinGrayLine"></div>
        </>
    )
}
import React from "react";
import { ButtonOutline, ButtonPrimary } from "./Button"

 
 const Hero = () => {
    const cvFilePath = "/images/Rovsen - Cv L - Kopya.pdf";
    const fileName = "Rovsen-Cv.pdf"

   return (
     <section id='home' className='pt-28 lg:pt-36'>

            <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10 flex flex-col gap-10 '>
                <div>
                    <div className="flex items-center gap-3">
                        <figure className='img-box w-9 h-9 rounded-lg'>
                            <img  width={40} height={40} src="/images/avatar-1.jpg" alt="Rovsen Medetov portrait" className='img-cover' />
                        </figure>

                        <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide'>
                            <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                                <span className='absolute animate-ping inset-0 rounded-full bg-emerald-400'></span>
                            </span>

                            Available for work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                    Building Scalable Modern Websites for the Future
                    </h2>

                    <div className='flex items-center gap-3 justify-center lg:justify-start '>
                        <ButtonPrimary
                        label="Download CV"
                        icon="download"
                        fileUrl={cvFilePath }
                        filaName={fileName}
                        />

                        <ButtonOutline
                        href="#about"
                        label="Scroll down"
                        icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className=''>
                    <figure className='w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden'>
                        <img src="/images/Rovsen999.jpg" width={656} height={800} alt="Rovsen Medetov" className='w-full' />
                    </figure>
                </div>
            </div>
     </section>
   )
 }
 
 export default Hero

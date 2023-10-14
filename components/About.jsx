import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I have spent the last 4 years learning coding and web development and everything I can learn about it.
                    It started when I was first introduced to HTML and CSS from a friend. I had no idea what it was or what it can do, 
                    but when I saw wht I can put on a computer screen, 
                    I fell in love. From that point on, I have been sharpening my skills in Front-End development and my goal everyday is trying to create beautiful and aesthetically pleasing websites.
                    My focus these days is building websites for clients and bringing their vision to the screen.    
                </p>
                <p className='py-2 text-gray-600'>
                    When I'm not at the computer, I'm spending time with my wife and daughter, 
                    making coffee, watching movies, exercising and trying new food recipes that will convince my wife I'm a good cook.
                </p>
                <Link href='/#projects'><p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p></Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl' src="/assets/projects/ralphie.png" width='500' height='50' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About;
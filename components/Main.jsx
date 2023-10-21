import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { GrDocument } from 'react-icons/gr';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase tracking-widest text-gray-600'>Crafting Your Digital Vision with Precision and Passion.</p>
                <h1 className='py-4 text-gray-700'>Hi, I'm <span className='text-[#5651e5]'>Ralphie</span></h1>
                <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a Full-stack developer specializing in Front-End development. Always ready for a new challenge that will push me to grow as a developer.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://www.linkedin.com/in/rafaelceledon/' title='LinkedIn' target='_blank'>
                            <FaLinkedinIn />
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='https://github.com/ralphie94' title='Github' target='_blank'>
                            <FaGithub />
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='mailto:ralphie0319@gmail.com' title='Mail' target='_blank'>
                            <AiOutlineMail />
                        </a>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <a href='/Ralph-Celedon-Resume.pdf' title='Resume' target='_blank'>
                            <GrDocument />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
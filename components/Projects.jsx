import Image from 'next/image';
import React from 'react';
import cateringImg from '../public/assets/projects/borja.png';
import barberImg from '../public/assets/projects/barber.png';
import qcpaImg from '../public/assets/projects/qcpa.png';
import cinefileImg from '../public/assets/projects/cinefile-update.png';
import triviaImg from '../public/assets/projects/trivia.png';
import movietriviaImg from '../public/assets/projects/movietrivia.png';
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

            <ProjectItem title='Borja Banquets' backgroundImg={cateringImg} projectUrl='https://www.chefborjabanquets.com/' githubUrl='https://github.com/ralphie94/borja-catering-website' tech='React, Node.js & Express' />
            <ProjectItem title='Hybrid Barber Portfolio' backgroundImg={barberImg} projectUrl='https://jerrymadrid.com/' githubUrl='https://github.com/ralphie94/hybrid-barber-portfolio' tech='HTML5, CSS3 & JavaScript' />
            <ProjectItem title='QCPAccounting' backgroundImg={qcpaImg} projectUrl='https://qcpaccounting.com/' githubUrl='https://github.com/ralphie94/qcpaccounting-website' tech='React, Node.js & Express' />
            <ProjectItem title='Cinefile' backgroundImg={cinefileImg} projectUrl='https://cinefile.netlify.app/' githubUrl='https://github.com/ralphie94/movie-site' tech='React' />
            <ProjectItem title='React Trivia' backgroundImg={triviaImg} projectUrl='https://react-ts-trivia.netlify.app/' githubUrl='https://github.com/ralphie94/react-typescript-quiz' tech='React & TypeScript' />
            <ProjectItem title='Movie Trivia' backgroundImg={movietriviaImg} projectUrl='https://ralphie94.github.io/Movie-trivia/' githubUrl='https://github.com/ralphie94/Movie-trivia' tech='HTML5, CSS3 & JQuery' />

            </div>
        </div>
    </div>
  )
}

export default Projects;
import Head from 'next/head';
import Navbar from '../components/Navbar'
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ralphie Celedon | Front-End Developer</title>
        <meta name="description" content="I am a Web Developer based in Los Angeles striving to make my dreams into reality." />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
    <Navbar />
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
      
    </div>
  )
}

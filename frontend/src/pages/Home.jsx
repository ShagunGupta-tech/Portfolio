import React from 'react'
import { Navbar } from '../components/Navbar'
import About from '../components/About'
import { Skills } from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

const Home = ({ mode, setMode }) => {
    return (
        <main className='w-full'>
            <Navbar mode={mode} setMode={setMode} />
            <Hero mode={mode} />
            <About mode={mode} />
            <Skills mode={mode} />
            <Projects mode={mode} />
            <Contact mode={mode} />
        </main>
    )
}

export default Home

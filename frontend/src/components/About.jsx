import React from 'react'
import myphoto from '../assets/myphoto.jpeg'
import { themes } from '../themes/PortfolioTheme'


const About = ({ mode }) => {
    const theme = themes[mode].about ?? themes.warm.about

    return (
        <section className={theme.section}>
            <div className="absolute -left-20 top-20 h-40 w-40 rounded-full bg-[#f4a8be]/35 blur-3xl" />
            <div className="absolute bottom-10 -right-16 h-44 w-44 rounded-full bg-[#d6b08a]/35 blur-3xl" />

            <div className={theme.shell}>
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className={theme.leftPanel}>
                        <div id="About" className={`absolute left-4 top-5 rotate-[-10deg] text-6xl font-black uppercase leading-none md:text-7xl ${theme.titleMark}`}>
                            <p>about</p>
                            <p>me</p>
                        </div>

                        <div className={theme.photoFrame}>
                            <div className={theme.photoInner}>
                                <p className={`text-xs uppercase tracking-[0.3em] ${theme.eyebrow}`}>
                                    Shagun Gupta
                                </p>
                                <img src={myphoto} className="rounded-[1.3rem] h-full" alt="Shagun Gupta" />
                            </div>
                        </div>
                    </div>

                    <div className={theme.rightPanel}>
                        <div className="mb-6 flex flex-wrap items-center gap-4">
                            <p className={`text-sm uppercase tracking-[0.32em] ${theme.eyebrow}`}>
                                About Me
                            </p>
                            <div className={theme.namePill}>
                                Shagun Gupta
                            </div>
                        </div>

                        <h2 className={`mb-5 text-4xl font-serif md:text-5xl ${theme.headingClass}`}>
                            {theme.heading}
                        </h2>

                        <p className={`mb-6 max-w-2xl text-base leading-8 md:text-lg ${theme.body}`}>
                            {theme.intro}
                        </p>

                        <div className="grid gap-5 md:grid-cols-[1.05fr_0.95fr]">
                            <div className={theme.quickCard}>
                                <p className={`mb-4 text-sm uppercase tracking-[0.3em] ${theme.eyebrow}`}>
                                    Quick Notes
                                </p>
                                <div className="space-y-3">
                                    {theme.notes.map((note) => (
                                        <div key={note} className={theme.quickItem}>
                                            {note}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div className={theme.skillsCard}>
                                    <p className={`mb-3 text-sm uppercase tracking-[0.3em] ${theme.eyebrow}`}>
                                        I Do
                                    </p>
                                    <ul className={`space-y-2 ${theme.body}`}>
                                        {theme.favorites.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

import React from 'react'
import { themes } from '../themes/PortfolioTheme'

const projects = [
    {
        title: 'Memories Time Capsule',
        type: 'Full-Stack MERN App',
        description:
            'A digital time capsule app where users can lock memories, photos, notes, and moments, then set a future unlock date. Built with JWT auth, Cloudinary media storage, and a diary-inspired interface.',
        stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'JWT'],
        liveUrl: 'https://memories-time-capsule.vercel.app/',
        githubUrl: 'https://github.com/ShagunGupta-tech/Memories-Time-Capsule',
    },
    {
        title: 'Portfolio Website',
        type: 'Personal Brand',
        description:
            'A responsive portfolio designed to present my work, development skills, and visual approach in a more intentional personal brand experience.',
        stack: ['React', 'Tailwind CSS', 'GSAP'],
        liveUrl: null,
        githubUrl: 'https://github.com/ShagunGupta-tech/Portfolio',
    },
]


const Projects = ({ mode }) => {
    const theme = themes[mode].projects ?? themes.warm.projects

    return (
        <section id="Projects" className={theme.section}>
            <div className="absolute bottom-12 left-[-4rem] h-44 w-44 rounded-full bg-[#efb0c3]/30 blur-3xl" />
            <div className="absolute right-[-3rem] top-16 h-40 w-40 rounded-full bg-[#d7b187]/35 blur-3xl" />

            <div className={theme.shell}>
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                    <div className={theme.leftPanel}>
                        <p className={`mb-4 text-sm uppercase tracking-[0.32em] ${theme.eyebrow}`}>
                            My Projects
                        </p>

                        <h2 className={`mb-5 text-4xl font-serif md:text-5xl ${theme.headingClass}`}>
                            {theme.heading}
                        </h2>

                        <p className={`mb-6 max-w-xl text-base leading-8 md:text-lg ${theme.body}`}>
                            {theme.intro}
                        </p>

                        <div className="space-y-4">
                            {theme.highlights.map((item) => (
                                <div key={item} className={theme.highlight}>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className={theme.focusCard}>
                            <div className={theme.focusInner}>
                                <p className={`text-sm uppercase tracking-[0.28em] ${theme.eyebrow}`}>
                                    Build Focus
                                </p>
                                <p className={`mt-3 text-sm leading-7 ${theme.body}`}>
                                    {theme.focusText}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-5">
                        {projects.map((project, index) => (
                            <article key={project.title} className={theme.cardTone[index]}>
                                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                                    <div>
                                        <p className={`text-sm uppercase tracking-[0.3em] ${theme.eyebrow}`}>
                                            {project.type}
                                        </p>
                                        <h3 className={`mt-2 text-2xl font-serif ${theme.title}`}>
                                            {project.title}
                                        </h3>
                                    </div>

                                    <span className={theme.badge}>
                                        Featured
                                    </span>
                                </div>

                                <p className={`mb-5 max-w-2xl text-base leading-7 ${theme.body}`}>
                                    {project.description}
                                </p>

                                <div className="mb-5 flex flex-wrap gap-3">
                                    {project.stack.map((item) => (
                                        <span key={item} className={theme.tag}>
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={theme.primaryCta}
                                        >
                                            Live Demo &rarr;
                                        </a>
                                    ) : (
                                        <a href="#Contact" className={theme.primaryCta}>
                                            Ask About This Project
                                        </a>
                                    )}
                                    {project.githubUrl ? (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={theme.secondaryCta}
                                        >
                                            GitHub &rarr;
                                        </a>
                                    ) : (
                                        <a href="#Skills" className={theme.secondaryCta}>
                                            View My Stack
                                        </a>
                                    )}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects

import React from 'react'
import { themes } from '../themes/PortfolioTheme'

const sharedSkillGroups = [
    { title: 'Frontend', skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS'] },
    { title: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'MySQL'] },
    { title: 'Tools', skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'] },
]



export const Skills = ({ mode }) => {
    const theme = themes[mode].skills ?? themes.warm.skills

    return (
        <section id="Skills" className={theme.section}>
            <div className="absolute left-[-4rem] top-12 h-44 w-44 rounded-full bg-[#f2b5c5]/35 blur-3xl" />
            <div className="absolute bottom-12 right-[-3rem] h-40 w-40 rounded-full bg-[#ddb991]/35 blur-3xl" />

            <div className={theme.shell}>
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className={theme.leftPanel}>
                        <p className={`mb-4 text-sm uppercase tracking-[0.32em] ${theme.eyebrow}`}>
                            My Skills
                        </p>

                        <h2 className={`mb-5 text-4xl font-serif md:text-5xl ${theme.headingClass}`}>
                            {theme.heading}
                        </h2>

                        <p className={`mb-6 max-w-xl text-base leading-8 md:text-lg ${theme.body}`}>
                            {theme.intro}
                        </p>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {theme.strengths.map((item) => (
                                <div key={item} className={theme.highlight}>
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className={theme.learningCard}>
                            <div className={theme.learningInner}>
                                <p className={`text-sm uppercase tracking-[0.28em] ${theme.eyebrow}`}>
                                    Currently Learning
                                </p>
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {theme.learningNow.map((skill) => (
                                        <span key={skill} className={theme.learningPill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5">
                        {sharedSkillGroups.map((group, index) => (
                            <div key={group.title} className={theme.groupCard[index]}>
                                <div className="mb-4 flex items-center justify-between gap-3">
                                    <h3 className={`text-2xl font-serif ${theme.groupTitle}`}>
                                        {group.title}
                                    </h3>
                                    <span className={theme.groupBadge}>
                                        Stack
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-3">
                                    {group.skills.map((skill) => (
                                        <div key={skill} className={theme.skillPill}>
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

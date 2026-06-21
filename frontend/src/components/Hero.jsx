import React from 'react'
import heroAnime from '../assets/hero_anime.webm'
import { themes } from '../themes/PortfolioTheme'

const Hero = ({ mode }) => {
    const theme = themes[mode].hero ?? themes.warm.hero

    return (
        <section id="Home" className={theme.section}>
            <div className={`absolute -left-16 top-20 h-40 w-40 rounded-full blur-3xl ${theme.softBlobOne}`} />
            <div className={`absolute -right-16 top-28 h-44 w-44 rounded-full blur-3xl ${theme.softBlobTwo}`} />
            <div className={`absolute bottom-8 left-[10%] h-32 w-32 rounded-full blur-3xl ${theme.softBlobThree}`} />

            <div className="pointer-events-none absolute inset-x-0 top-18 z-0 flex justify-center">
                <p className={`text-[22vw] font-black uppercase tracking-[-0.08em] md:text-[12vw] ${theme.backgroundWord}`}>
                    PORTFOLIO
                </p>
            </div>

            <div className="relative z-20 mx-auto grid min-h-screen max-w-6xl items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
                <div className="space-y-6">
                    <div className={theme.badge}>
                        <span className={`h-2.5 w-2.5 rounded-full ${theme.badgeDot}`} />
                        <p className={`text-xs uppercase tracking-[0.34em] ${theme.badgeText}`}>
                            Shagun Gupta
                        </p>
                    </div>

                    <div className="max-w-3xl">
                        <p className={`mb-4 text-sm uppercase tracking-[0.34em] ${theme.eyebrow}`}>
                            {theme.role}
                        </p>

                        <h1 className={`text-5xl font-serif leading-[1.02] md:text-7xl lg:text-[5.3rem] ${theme.heading}`}>
                            {theme.title}
                            {theme.titleLines.map((line) => (
                                <span key={line} className={`block ${theme.headingAccent}`}>
                                    {line}
                                </span>
                            ))}
                        </h1>

                        <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${theme.body}`}>
                            {theme.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        {theme.cards.map((item) => (
                            <span key={item} className={theme.tag}>
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a href="#Projects" className={theme.primaryCta}>
                            View Projects
                        </a>
                        <a href="#About" className={theme.secondaryCta}>
                            About Me
                        </a>
                    </div>
                </div>

                <div className="relative flex min-h-[32rem] items-center lg:min-h-[36rem]">
                    <div className="grid w-full gap-5">
                        <div className={theme.mediaWrap}>
                            <div className={theme.mediaInner}>
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full rounded-[1.4rem]"
                                >
                                    <source src={heroAnime} type="video/webm" />
                                </video>
                            </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
                            <div className={theme.infoCardOne}>
                                <p className={`text-xs uppercase tracking-[0.28em] ${theme.infoEyebrow}`}>
                                    {theme.sideTitle}
                                </p>
                                <p className={`mt-3 text-xl font-serif ${theme.infoHeading}`}>
                                    {theme.sideValue}
                                </p>
                            </div>

                            <div className={theme.infoCardTwo}>
                                <p className={`text-xs uppercase tracking-[0.28em] ${theme.infoEyebrow}`}>
                                    {theme.noteTitle}
                                </p>
                                <p className={`mt-3 text-base leading-7 ${theme.body}`}>
                                    {theme.noteValue}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero

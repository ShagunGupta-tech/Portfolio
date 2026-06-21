import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useWindowScroll } from 'react-use'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export const Navbar = ({ mode, setMode }) => {
    const [isNavVisible, setIsNavVisible] = useState(true)
    const [activeLink, setActiveLink] = useState('Home')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navContainerRef = useRef(null)
    const lastScrollyRef = useRef(0)
    const { y: currentScrolly } = useWindowScroll()

    const isProfessional = mode === 'professional'

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
        setIsMobileMenuOpen(false)
    }

    useEffect(() => {
        const navElement = navContainerRef.current
        const lastScrolly = lastScrollyRef.current

        if (!navElement) {
            return
        }

        if (currentScrolly === 0) {
            setIsNavVisible(true)
            navElement.classList.remove('floating-nav')
        } else if (currentScrolly > lastScrolly) {
            setIsNavVisible(false)
            navElement.classList.add('floating-nav')
        } else if (currentScrolly < lastScrolly) {
            setIsNavVisible(true)
            navElement.classList.add('floating-nav')
        }

        lastScrollyRef.current = currentScrolly
    }, [currentScrolly])

    useEffect(() => {
        if (!navContainerRef.current) {
            return
        }

        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    }, [isNavVisible])

    const navShellClasses = isProfessional
        ? 'rounded-[1.75rem] border border-white/12 bg-[#0f172a]/82 px-4 py-3 shadow-[0_16px_40px_rgba(15,23,42,0.38)] backdrop-blur-md md:px-6'
        : 'rounded-[1.75rem] border border-[#e3c7af] bg-[#fbf2e7]/90 px-4 py-3 shadow-[0_16px_40px_rgba(89,57,35,0.16)] backdrop-blur-sm md:px-6'

    const brandClasses = isProfessional
        ? 'text-2xl font-semibold uppercase tracking-[0.16em] text-white md:text-3xl'
        : 'text-3xl font-fleur text-pink-500 md:text-4xl'

    const getDesktopLinkClasses = (item) =>
        `rounded-full px-4 py-2 text-sm transition-all duration-300 ${activeLink === item
            ? isProfessional
                ? 'bg-[#38bdf8] text-[#082f49]'
                : 'bg-[#3b2416] text-[#fff6eb]'
            : isProfessional
                ? 'text-slate-300 hover:bg-white/10 hover:text-white'
                : 'text-[#6f5140] hover:bg-white/70'
        }`

    const getMobileLinkClasses = (item) =>
        `rounded-[1rem] px-4 py-3 text-sm transition-all duration-300 ${activeLink === item
            ? isProfessional
                ? 'bg-[#38bdf8] text-[#082f49]'
                : 'bg-[#3b2416] text-[#fff6eb]'
            : isProfessional
                ? 'bg-white/8 text-slate-300'
                : 'bg-white/70 text-[#6f5140]'
        }`

    const toggleMode = () => {
        setMode((currentMode) =>
            currentMode === 'warm' ? 'professional' : 'warm'
        )
    }

    return (
        <nav
            className="fixed left-1/2 top-4 z-50 w-[92%] max-w-6xl -translate-x-1/2"
            ref={navContainerRef}
        >
            <div className={navShellClasses}>
                <div className="flex items-center justify-between gap-4">
                    <a
                        href="#Home"
                        className={`shrink-0 ${brandClasses}`}
                        onClick={() => onUpdateActiveLink('Home')}
                    >
                        {isProfessional ? 'SG.DEV' : 'Shagun Gupta'}
                    </a>

                    <div className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={getDesktopLinkClasses(item)}
                                onClick={() => onUpdateActiveLink(item)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    <button
                        type="button"
                        className={`hidden rounded-full px-4 py-2 text-sm font-medium transition md:inline-flex ${isProfessional
                                ? 'border border-white/12 bg-white/8 text-slate-100 hover:bg-white/12'
                                : 'border border-[#d8baa0] bg-white/75 text-[#5c4030] hover:bg-white'
                            }`}
                        onClick={toggleMode}
                    >
                        {isProfessional ? 'Warm Mode' : 'Professional Mode'}
                    </button>

                    <button
                        type="button"
                        className={`flex h-11 w-11 items-center justify-center rounded-full md:hidden ${isProfessional
                                ? 'border border-white/12 bg-white/8 text-slate-100'
                                : 'border border-[#d8baa0] bg-white/80 text-[#5c4030]'
                            }`}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                    >
                        <span className="space-y-1.5">
                            <span className="block h-0.5 w-5 rounded-full bg-current" />
                            <span className="block h-0.5 w-5 rounded-full bg-current" />
                            <span className="block h-0.5 w-5 rounded-full bg-current" />
                        </span>
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div
                        className={`mt-4 grid gap-2 border-t pt-4 md:hidden ${isProfessional ? 'border-white/10' : 'border-[#ead6c3]'
                            }`}
                    >
                        <button
                            type="button"
                            className={`rounded-[1rem] px-4 py-3 text-left text-sm transition ${isProfessional
                                    ? 'border border-white/12 bg-white/8 text-slate-100'
                                    : 'border border-[#d8baa0] bg-white/70 text-[#5c4030]'
                                }`}
                            onClick={toggleMode}
                        >
                            {isProfessional ? 'Switch to Warm Mode' : 'Switch to Professional Mode'}
                        </button>

                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item}`}
                                className={getMobileLinkClasses(item)}
                                onClick={() => onUpdateActiveLink(item)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

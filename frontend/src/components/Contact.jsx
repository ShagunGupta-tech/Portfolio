import React, { useEffect, useState } from 'react'
import { themes } from '../themes/PortfolioTheme'

const contactCards = [
    {
        label: 'Location',
        value: 'Uttar Pradesh, India',
        tone: 'bg-[#f5d8df] border-[#e8b6c5]',
    },
    {
        label: 'Open To',
        value: 'Internships, freelance projects, and collaborations',
        tone: 'bg-[#f4e4d1] border-[#dec19f]',
    },
    {
        label: 'Best For',
        value: 'Frontend builds, full-stack practice projects, and UI-focused work',
        tone: 'bg-[#efe6d9] border-[#d8c5ad]',
    },
]

const initialFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
}

const initialErrors = {
    name: '',
    email: '',
    subject: '',
    message: '',
}

const apiBaseUrl =
    import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || 'http://localhost:5000'



const Contact = ({ mode }) => {
    const theme = themes[mode].contact ?? themes.warm.contact
    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState(initialErrors)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState({
        type: '',
        message: '',
    })
    const [toast, setToast] = useState({
        open: false,
        type: '',
        message: '',
    })

    useEffect(() => {
        if (!toast.open) {
            return
        }

        const timeoutId = window.setTimeout(() => {
            setToast({
                open: false,
                type: '',
                message: '',
            })
        }, 3500)

        return () => window.clearTimeout(timeoutId)
    }, [toast.open])

    const validateField = (name, value) => {
        const trimmedValue = value.trim()

        if (!trimmedValue) {
            return 'This field is required'
        }

        if (name === 'email') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

            if (!emailPattern.test(trimmedValue)) {
                return 'Enter a valid email address'
            }
        }

        if (name === 'subject' && trimmedValue.length < 4) {
            return 'Subject should be at least 4 characters'
        }

        if (name === 'message' && trimmedValue.length < 12) {
            return 'Message should be at least 12 characters'
        }

        return ''
    }

    const validateForm = () => {
        const nextErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            subject: validateField('subject', formData.subject),
            message: validateField('message', formData.message),
        }

        setErrors(nextErrors)

        return !Object.values(nextErrors).some(Boolean)
    }

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData((current) => ({
            ...current,
            [name]: value,
        }))

        setErrors((current) => ({
            ...current,
            [name]: current[name] ? validateField(name, value) : '',
        }))
    }

    const handleBlur = (event) => {
        const { name, value } = event.target

        setErrors((current) => ({
            ...current,
            [name]: validateField(name, value),
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setStatus({ type: '', message: '' })
        const isValid = validateForm()

        if (!isValid) {
            setToast({
                open: true,
                type: 'error',
                message: 'Please fix the highlighted fields first.',
            })
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch(`${apiBaseUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong while sending')
            }

            setStatus({
                type: 'success',
                message: data.message || 'Message sent successfully!',
            })
            setFormData(initialFormData)
            setErrors(initialErrors)
            setToast({
                open: true,
                type: 'success',
                message: data.message || 'Message sent successfully!',
            })
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || 'Failed to send message',
            })
            setToast({
                open: true,
                type: 'error',
                message: error.message || 'Failed to send message',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="Contact" className={theme.section}>
            {toast.open && (
                <div className="fixed right-4 top-24 z-[60] w-[calc(100%-2rem)] max-w-sm">
                    <div
                        className={`rounded-[1.35rem] border px-4 py-4 shadow-[0_18px_40px_rgba(89,57,35,0.18)] backdrop-blur-sm ${toast.type === 'success'
                            ? 'border-[#cfe2cf] bg-[#f4fbf2] text-[#315a35]'
                            : 'border-[#efc6c6] bg-[#fff3f1] text-[#7c3f3f]'
                            }`}
                    >
                        <p className="text-xs uppercase tracking-[0.28em]">
                            {toast.type === 'success' ? 'Success' : 'Notice'}
                        </p>
                        <p className="mt-2 text-sm leading-6">{toast.message}</p>
                    </div>
                </div>
            )}

            <div className="absolute -left-16 top-16 h-40 w-40 rounded-full bg-[#f1b3c6]/30 blur-3xl" />
            <div className="absolute bottom-10 -right-12 h-44 w-44 rounded-full bg-[#dbb187]/35 blur-3xl" />

            <div className={theme.shell}>
                <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className={theme.leftPanel}>
                        <p className={`mb-4 text-sm uppercase tracking-[0.32em] ${theme.eyebrow}`}>
                            Contact Me
                        </p>

                        <h2 className={`mb-5 text-4xl font-serif md:text-5xl ${theme.headingClass}`}>
                            {theme.heading}
                        </h2>

                        <p className={`mb-6 max-w-xl text-base leading-8 md:text-lg ${theme.body}`}>
                            {theme.intro}
                        </p>

                        <div className="space-y-4">
                            {contactCards.map((card) => (
                                <div key={card.label} className={`${theme.noteCard} ${card.tone}`}>
                                    <p className={`text-sm uppercase tracking-[0.28em] ${theme.eyebrow}`}>
                                        {card.label}
                                    </p>
                                    <p className={`mt-2 text-sm leading-7 ${theme.body}`}>
                                        {card.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className={theme.noteCard}>
                            <div className={theme.noteInner}>
                                <p className={`text-sm uppercase tracking-[0.28em] ${theme.eyebrow}`}>
                                    Quick Note
                                </p>
                                <p className={`mt-3 text-sm leading-7 ${theme.body}`}>
                                    {theme.noteText}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={theme.rightPanel}>
                        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <p className={`text-sm uppercase tracking-[0.3em] ${theme.eyebrow}`}>
                                    Send A Message
                                </p>
                                <h3 className={`mt-2 text-2xl font-serif ${theme.headingClass}`}>
                                    Tell me about your idea
                                </h3>
                            </div>

                            <span className={theme.pill}>
                                Contact Form
                            </span>
                        </div>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid gap-4 md:grid-cols-2">
                                <label className="block">
                                    <span className={`mb-2 block text-sm ${theme.label}`}>
                                        Your Name
                                    </span>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter your name"
                                        className={`${theme.inputBase} ${errors.name
                                            ? 'border-[#d78181]'
                                            : theme.inputOk
                                            }`}
                                        required
                                    />
                                    {errors.name && (
                                        <span className="mt-2 block text-sm text-[#b45454]">
                                            {errors.name}
                                        </span>
                                    )}
                                </label>

                                <label className="block">
                                    <span className={`mb-2 block text-sm ${theme.label}`}>
                                        Email Address
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder="Enter your email"
                                        className={`${theme.inputBase} ${errors.email
                                            ? 'border-[#d78181]'
                                            : theme.inputOk
                                            }`}
                                        required
                                    />
                                    {errors.email && (
                                        <span className="mt-2 block text-sm text-[#b45454]">
                                            {errors.email}
                                        </span>
                                    )}
                                </label>
                            </div>

                            <label className="block">
                                <span className={`mb-2 block text-sm ${theme.label}`}>
                                    Subject
                                </span>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="What would you like to discuss?"
                                    className={`${theme.inputBase} ${errors.subject
                                        ? 'border-[#d78181]'
                                        : theme.inputOk
                                        }`}
                                    required
                                />
                                {errors.subject && (
                                    <span className="mt-2 block text-sm text-[#b45454]">
                                        {errors.subject}
                                    </span>
                                )}
                            </label>

                            <label className="block">
                                <span className={`mb-2 block text-sm ${theme.label}`}>
                                    Message
                                </span>
                                <textarea
                                    rows="6"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Write your message here..."
                                    className={`${theme.inputBase} ${errors.message
                                        ? 'border-[#d78181]'
                                        : theme.inputOk
                                        }`}
                                    required
                                />
                                {errors.message && (
                                    <span className="mt-2 block text-sm text-[#b45454]">
                                        {errors.message}
                                    </span>
                                )}
                            </label>

                            {status.message && (
                                <div
                                    className={`rounded-[1.2rem] border px-4 py-3 text-sm ${status.type === 'success'
                                        ? 'bg-[#eef7ed] text-[#35603a]'
                                        : 'bg-[#fdeeee] text-[#7d3d3d]'
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}

                            <div className={theme.footer}>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={theme.submit}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

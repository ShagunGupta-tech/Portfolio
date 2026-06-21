const express = require('express')
const nodemailer = require('nodemailer')
const cors = require('cors')
require('dotenv').config()

const app = express()
const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173'

app.use(
    cors({
        origin: allowedOrigin,
    })
)
app.use(express.json())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
})

app.get('/api/health', (req, res) => {
    res.status(200).json({ success: true, message: 'Backend is running' })
})

app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required' })
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        return res.status(500).json({
            error: 'Email service is not configured on the server',
        })
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
            <h2>New message from your portfolio</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
        `,
    }

    try {
        await transporter.sendMail(mailOptions)
        res.status(200).json({
            success: true,
            message: 'Message sent successfully!',
        })
    } catch (error) {
        console.error('Email error:', error)
        res.status(500).json({ error: 'Failed to send message' })
    }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

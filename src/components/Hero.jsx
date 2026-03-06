
import React from 'react'

import {
    Github,
    Linkedin,
    Mail,
    Moon,
    Sun,
    Send,
    Download,
    ExternalLink,
    Menu,
    X,
    Code2,
    Sparkles,
    GraduationCap,
    Calendar,
    Award,
    ArrowLeft,
    Phone,
    MessageCircle,
    Zap,
    Rocket,
    Target,
    TrendingUp,
    Box,
    Database,
    Globe,
    Layers,
    Twitter,
    Facebook,
    Laptop,
} from "lucide-react"

import { motion, useInView, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"


function AnimatedSection({ children, className = "", delay = 0 }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

// Animation variants
const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
}

const handleResumeDownload = () => {
    const resumeReady = true

    if (resumeReady) {
        const link = document.createElement("a")
        link.href = "/MD_Sultan_Mia_Resume_(MERN).pdf"
        link.download = "/MD_Sultan_Mia_Resume_(MERN).pdf"
        link.click()
    } else {
        alert("Resume will be available soon! Button is functional and ready.")
    }
}


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
}

const heroImage = '/My-Professional-iamge (1).png'

const Hero = () => {
    return (
        <div>
            <section
                id="home"
                className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden"
            >
                <div className="absolute inset-0 grid-background opacity-10"></div>
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.1, 0.15, 0.1]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-chart-1/10 rounded-full blur-[100px]"
                    />
                </div>

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
                    {/* Left Side - Text Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="space-y-8 text-center lg:text-left"
                    >
                        <motion.div variants={fadeInUp} className="inline-block">
                            <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium backdrop-blur-sm">
                                👋 Welcome to my portfolio
                            </span>
                        </motion.div>

                        <div className="space-y-4">
                            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                                Hi, I'm{" "}
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-chart-1 to-chart-5 animate-gradient">
                                    Sultan Mia
                                </span>
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-2xl md:text-3xl font-semibold text-muted-foreground">MERN Stack Developer</motion.p>
                            <motion.p variants={fadeInUp} className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
                                Building scalable full-stack web applications with modern technologies. Passionate about creating
                                elegant solutions to complex problems.
                            </motion.p>
                        </div>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Button
                                size="lg"
                                className="group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
                                onClick={() => scrollToSection("contact")}
                            >
                                <Mail className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Get In Touch
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="group border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary bg-transparent"
                                onClick={handleResumeDownload}
                            >
                                <Download className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                Download Resume
                            </Button>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4 justify-center lg:justify-start pt-4">
                            {[
                                { href: "https://github.com/Sultanmia22", icon: Github },
                                { href: "https://www.linkedin.com/in/devmdsultanmia/", icon: Linkedin },
                                { href: "https://x.com/sultanmia5732", icon: Twitter },
                                { href: "https://www.facebook.com/", icon: Facebook },
                            ].map((social, index) => (
                                <motion.a
                                    key={social.href}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="relative flex items-center justify-center"
                    >
                        <div className="relative w-full max-w-lg mx-auto">
                            {/* Professional Photo Card with Glass Effect */}
                            <motion.div
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="glass-card p-8 space-y-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group"
                            >
                                {/* Image Container with Gradient Border */}
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-chart-1 to-chart-5 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>

                                    <div className="relative rounded-2xl overflow-hidden bg-muted border-2 border-border aspect-square">
                                        <img
                                            src={heroImage}
                                            alt="Alex Johnson - MERN Stack Developer"
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60"></div>

                                        {/* Floating Badge */}
                                        <div className="absolute bottom-4 left-4 right-4 backdrop-blur-xl bg-background/80 border border-primary/30 rounded-xl p-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                                <div>
                                                    <p className="text-sm font-bold text-foreground">Available for Work</p>
                                                    <p className="text-xs text-muted-foreground">Open to opportunities</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Code Snippet Decoration */}
                                <div className="relative p-4 bg-muted/50 rounded-xl border border-border/50 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                        </div>
                                        <span className="text-xs text-muted-foreground">developer.js</span>
                                    </div>

                                    <code className="text-xs font-mono block">
                                        <span className="text-chart-3">const</span>
                                        <span className="text-foreground"> developer = {"{"}</span>
                                        <br />
                                        <span className="text-muted-foreground ml-4">name: </span>
                                        <span className="text-chart-5">"Sultan Mia"</span>,
                                        <br />
                                        <span className="text-muted-foreground ml-4">role: </span>
                                        <span className="text-chart-5">"MERN Stack Developer"</span>,
                                        <br />
                                        <span className="text-muted-foreground ml-4">status: </span>
                                        <span className="text-green-500">"available"</span>
                                        <br />
                                        <span className="text-foreground">{"}"}</span>
                                    </code>
                                </div>
                            </motion.div>

                            {/* Background Glow Effects */}
                            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-3xl rounded-full"></div>
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -z-10 top-0 right-0 w-32 h-32 bg-chart-1/30 blur-2xl rounded-full"
                            />
                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute -z-10 bottom-0 left-0 w-32 h-32 bg-chart-5/30 blur-2xl rounded-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Hero
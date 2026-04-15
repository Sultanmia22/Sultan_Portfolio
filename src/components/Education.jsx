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

const Education = () => {

    const education = [
        {
            degree: "Diploma in Computer Science and Technology",
            institution: "Sherpur Govt. Polytechnic Institute",
            period: "2020 – 2024",
            status: "Completed",
            description:
                "Pursuing a 4-year Diploma in Computer Science and Technology, covering core subjects such as programming fundamentals, web development basics, data structures, algorithms, and software engineering principles. Gained a solid theoretical foundation along with practical experience in programming languages and web technologies, supporting continuous learning and hands-on project development.",
            achievements: [
                "CGPA: 3.36 / 4.0",
                "Ranked in Top 10% of the class",
                "Led and completed 3 major projects"
            ],
            icon: Award,
        },
        {
            degree: "Complete Web Development Course",
            institution: "Programming Hero",
            period: "Jul 2025 – Jan 2026",
            status: "Completed",
            description: "Currently learning web development through Programming Hero, covering HTML, CSS, Tailwind CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Gaining hands-on experience by building projects and applying industry best practices.",
            achievements: [
                "Building full-stack projects",
                "Learning MERN stack fundamentals",
                "Applying modern web development practices"
            ],
            icon: Laptop,
        }
    ];

    return (
        <div>
            <section id="education" className="py-24 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-chart-1/5 rounded-full blur-3xl"></div>

                <div className="max-w-5xl mx-auto relative z-10">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">Education</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Academic <span className="text-primary">Journey</span>
                        </h3>
                    </AnimatedSection>

                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

                        <div className="space-y-12">
                            {education.map((edu, index) => {
                                const Icon = edu.icon
                                return (
                                    <AnimatedSection key={index} delay={index * 0.15}>
                                        <div className="relative">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                                                className="absolute left-0 top-6 w-16 h-16 rounded-full bg-primary/10 border-4 border-background flex items-center justify-center hidden md:flex"
                                            >
                                                <Icon className="w-8 h-8 text-primary" />
                                            </motion.div>

                                            <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                                                <Card className="md:ml-24 p-8 hover:border-primary/30 transition-all hover:shadow-lg group">
                                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                                                        <div className="flex-1">
                                                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                                                                <Calendar className="w-3 h-3" />
                                                                {edu.period}
                                                            </span>
                                                            <h4 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                                                {edu.degree}
                                                            </h4>
                                                            <p className="text-lg text-muted-foreground">{edu.institution}</p>
                                                        </div>
                                                        <span className="px-4 py-2 bg-chart-1/10 border border-chart-1/20 text-chart-1 text-sm font-medium rounded-full">
                                                            {edu.status}
                                                        </span>
                                                    </div>

                                                    <p className="text-muted-foreground leading-relaxed mb-6">{edu.description}</p>

                                                    <div className="space-y-3">
                                                        <h5 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide flex items-center gap-2">
                                                            <Award className="w-4 h-4 text-primary" />
                                                            Key Achievements
                                                        </h5>
                                                        <div className="flex flex-wrap gap-3">
                                                            {edu.achievements.map((achievement, idx) => (
                                                                <motion.div
                                                                    key={idx}
                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                                    viewport={{ once: true }}
                                                                    transition={{ delay: idx * 0.1 }}
                                                                    whileHover={{ scale: 1.05 }}
                                                                    className="px-4 py-2 bg-accent border border-border rounded-lg text-sm font-medium hover:border-primary/30 transition-colors"
                                                                >
                                                                    {achievement}
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </Card>
                                            </motion.div>
                                        </div>
                                    </AnimatedSection>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Education
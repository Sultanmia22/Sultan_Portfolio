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

const Service = () => {

    const services = [
        {
            title: "Frontend Development",
            description: "Building responsive and interactive user interfaces with modern frameworks and libraries",
            icon: Globe,
            features: ["React Applications", "Responsive Design", "UI/UX Implementation", "Performance Optimization"],
        },
        {
            title: "MERN Stack Applications",
            description: "Full-stack web applications using MongoDB, Express, React, and Node.js ecosystem",
            icon: Layers,
            features: ["RESTful APIs", "Database Design", "User Authentication", "Real-time Features"],
        },
        {
            title: "Responsive UI Design",
            description: "Creating mobile-first, pixel-perfect designs that work seamlessly on all devices",
            icon: Sparkles,
            features: ["Mobile-First Approach", "Cross-Browser Compatible", "Modern Animations", "Accessibility"],
        },
    ]

    return (
        <div>
            <section id="services" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
                <div className="absolute inset-0 grid-background opacity-30"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">Services</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            What I <span className="text-primary">Offer</span>
                        </h3>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <AnimatedSection key={index} delay={index * 0.1}>
                                    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                                        <Card className="p-8 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10 group h-full">
                                            <div className="space-y-6">
                                                <motion.div
                                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                                    className="p-4 rounded-2xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-all"
                                                >
                                                    <Icon className="w-8 h-8 text-primary" />
                                                </motion.div>

                                                <div>
                                                    <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                                                    <ul className="space-y-2">
                                                        {service.features.map((feature, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                whileInView={{ opacity: 1, x: 0 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: idx * 0.1 }}
                                                                className="flex items-center gap-2 text-sm"
                                                            >
                                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                                                <span className="text-muted-foreground">{feature}</span>
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                </AnimatedSection>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service
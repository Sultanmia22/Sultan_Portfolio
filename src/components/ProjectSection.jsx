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


const ProjectSection = ({ selectedProject, setSelectedProject }) => {

    const projects = [
        {
            title: "ContestHub",
            description: "Complete contest management platform with creator tools, payment integration, and role-based dashboards",
            fullDescription:
                "A comprehensive contest management platform built with the MERN stack. Users can browse and participate in creative contests (design, article writing, business ideas), contest creators can manage their contests, admins can approve/reject contests, and winners are declared by creators. Features secure payment integration, JWT authentication, role-based dashboards, countdown timers, and winner announcements.",
            tech: ["React", "Node.js", "MongoDB", "Express", "TanStack Query", "JWT", "Stripe/Payment API"],
            mainTech: "MERN Stack (MongoDB, Express.js, React, Node.js)",
            image: "https://i.ibb.co.com/8DYKGg7Q/Screenshot-2026-01-05-153044.png",
            liveUrl: "https://contesthub-a73a8.web.app",
            githubUrl: "https://github.com/Sultanmia22/Contest-hub-client.git",
            challenges: [
                "Implementing secure payment gateway integration for contest registration fees with transaction tracking",
                "Managing complex role-based access control (Admin, Creator, Normal User) with protected routes and JWT authentication",
                "Building real-time countdown timers for contest deadlines and managing contest lifecycle states (pending, approved, rejected, ended)",
                "Optimizing database queries for contest search, filtering by types, and pagination with large datasets",
                "Implementing submission management system where users submit task-related links and creators declare winners"
            ],
            features: [
                "Three user roles: Admin, Contest Creator, Normal User with role-based dashboards",
                "Secure authentication with JWT and Google Sign-in integration",
                "Payment integration for contest participation with transaction tracking",
                "Real-time countdown timers for contest deadlines",
                "Search contests by type with backend filtering logic",
                "Creator tools: Add, edit, delete, and manage contests before approval",
                "Admin panel: Approve/reject contests and manage user roles",
                "Submission management system with task links and winner declaration",
                "User profiles with participation history and win percentage charts",
                "Fully responsive design (mobile, tablet, desktop) with dark/light theme toggle",
                "Leaderboard page ranking users by contest wins",
                "Sweet alerts/toasts for all user actions (login, signup, CRUD operations)",
                "TanStack Query for efficient data fetching and caching"
            ],
            futurePlans: [
                "Implement email notifications for contest status updates and winner announcements",
                "Add social sharing features for contest participation and winner celebrations",
                "Build advanced analytics dashboard for creators to track contest performance",
                "Integrate package system where creators can purchase packages for posting limited contests",
                "Add real-time notifications using WebSockets for submissions and approvals",
                "Implement dispute resolution system for contest-related issues"
            ],
        },

        {
            title: "ARTIFY – A Creative Artwork Showcase Platform",
            description: "An online art-sharing platform where artists can upload, display, and explore creative works with community interaction",
            fullDescription:
                "ARTIFY is a comprehensive art-sharing platform designed for artists and art enthusiasts to connect and collaborate. Artists can upload their creative works with detailed information, explore other artists' galleries, curate their favorite artworks, and interact through likes and comments. The platform features a modern UI with intuitive navigation, real-time updates, a like system with MongoDB, category filtering, dark/light mode toggle, and responsive design across all devices.",
            tech: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
            mainTech: "React, Express.js, MongoDB, Firebase Authentication, Tailwind CSS",
            image: "https://i.ibb.co.com/qL2HkXzG/Screenshot-2026-01-05-164055.png",
            liveUrl: "https://artify-d6b69.web.app/",
            githubUrl: "https://github.com/Sultanmia22/future-box-client.git",
            challenges: [
                "Implementing MongoDB $inc/$push/$pull operators for the like system with increase and decrease functionality",
                "Creating a real-time filter system for artworks by category without page reload",
                "Managing user authentication state across private routes to prevent unwanted redirects on page reload",
                "Integrating multiple libraries (react-image-gallery, React Simple Typewriter, React Awesome Reveal, React Tooltip) seamlessly",
                "Implementing dark/light mode toggle with localStorage persistence across all components",
            ],
            futurePlans: [
                "Add Artist Profile Page showing artist bio, total artworks, and follower count",
                "Implement Category Filter Page with tabbed view for grouped artworks",
                "Add advanced search with filters by medium, price range, and dimensions",
                "Create notification system for likes, favorites, and new artist follows",
                "Integrate payment gateway for artwork purchases",
                "Add comment/messaging system between artists and buyers",
            ],
        },
        {
            title: "SkillSwap – A Local Skill Exchange Platform",
            description: "An interactive platform for individuals to offer, learn, and trade skills within their local area with ratings and real-time booking",
            fullDescription:
                "SkillSwap is a comprehensive skill exchange platform that connects local skill providers and learners. Users can browse skill listings across multiple categories like music, language, coding, and wellness, view provider ratings and availability, book sessions through an intuitive interface, and manage their profiles. The platform features real-time slot availability, user authentication with Google login, profile management with image updates, password reset functionality, and a responsive design optimized for all devices.",
            tech: ["React", "Firebase Authentication", "JSON Data", "Tailwind CSS"],
            mainTech: "React, Firebase (Auth), Swiper.js, AOS, React Hot Toast, Tailwind CSS",
            image: "https://i.ibb.co.com/8L92XzCL/Screenshot-2026-01-05-164718.png",
            liveUrl: "https://skillswap-apps.netlify.app/",
            githubUrl: "https://github.com/Sultanmia22/Skillswap.git",
            challenges: [
                "Implementing protected routes with proper redirect logic after authentication to return users to their intended page",
                "Managing Firebase authentication state persistence across page reloads without errors in SPA",
                "Building a functional forgot password feature with email verification and Gmail redirect",
                "Creating a profile update form using Firebase updateProfile() method with image URL handling",
                "Implementing password toggle eye button with validation for uppercase, lowercase, and minimum 6 characters",
                "Integrating multiple npm packages (AOS, Swiper, React Hot Toast) seamlessly without conflicts",
            ],
            futurePlans: [
                "Add payment gateway integration for skill session booking and transactions",
                "Implement real-time chat/messaging system between skill providers and learners",
                "Create a review and rating system with detailed feedback for skill sessions",
                "Add calendar integration for appointment scheduling and availability management",
                "Build a skill provider dashboard with earnings, session management, and analytics",
                "Implement advanced filtering by category, price range, rating, and location proximity",
                "Add notification system for booking confirmations and session reminders",
            ],
        }
    ]

    return (
        <div>
            <section id="projects" className="py-24 px-4 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">Portfolio</h2>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6">
                            Featured <span className="text-primary">Projects</span>
                        </h3>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Here are some of my recent works that showcase my skills and experience
                        </p>
                    </AnimatedSection>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                                    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-border/50 h-full">
                                        <div className="relative overflow-hidden aspect-video bg-muted group">
                                            <motion.img
                                                whileHover={{ scale: 1.05 }}
                                                transition={{ duration: 0.5 }}
                                                src={project.image || "/placeholder.svg"}
                                                alt={project.title}
                                                className="object-cover w-full h-full"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>

                                        <div className="p-6 space-y-4">
                                            <h4 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2">
                                                {project.tech.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 text-xs font-medium bg-primary/5 border border-primary/10 text-primary rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="flex items-center gap-2 pt-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="flex-1 group/btn bg-transparent"
                                                    onClick={() => setSelectedProject(project)}
                                                >
                                                    View Details
                                                    <ArrowLeft className="ml-2 w-4 h-4 rotate-180 group-hover/btn:translate-x-1 transition-transform" />
                                                </Button>
                                                <Button size="sm" variant="ghost" className="group/btn" asChild>
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                    </a>
                                                </Button>
                                                <Button size="sm" variant="ghost" className="group/btn" asChild>
                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                        <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                                                    </a>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectSection
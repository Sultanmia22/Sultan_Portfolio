import React from 'react'

import {
    Github,
    ExternalLink,
    ArrowLeft,
} from "lucide-react"

import { motion, useInView, useScroll, useSpring, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRef } from "react"


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
            title: "TrustCare – Baby Sitting & Elderly Care Service Platform",
            description: "A comprehensive care service platform for booking trusted babysitters, elderly care, and special home care with dynamic booking, location selection, and real-time cost calculation.",
            fullDescription:
                "TrustCare is a full-featured web application that connects families with trusted caregivers for children, elderly, and sick individuals. Users can browse care services, view detailed service pages, and book sessions by selecting duration and location (Division, District, City, Area). The platform features dynamic total cost calculation, booking status tracking (Pending / Confirmed / Completed / Cancelled), a My Bookings dashboard, email invoice on booking, and optional Stripe payment integration. Built with Next.js and Firebase for a fast, secure, and accessible experience across all devices.",
            tech: ["Next.js", "MongoDB", "Firebase Auth", "Stripe", "Tailwind CSS"],
            mainTech: "Next.js 16, React 19, NextAuth, MongoDB, Stripe, React Hook Form, React Toastify, React Responsive Carousel",
            image: "https://i.ibb.co.com/tMbdQN5x/image.png",
            liveUrl: "https://trust-care-pi.vercel.app/",
            githubUrl: "https://github.com/Sultanmia22/TrustCare.git",
            challenges: [
                "Implementing protected private routes with proper redirect logic after login/registration to return users to their intended booking page",
                "Managing NextAuth session persistence across page reloads without errors in a Next.js SPA environment",
                "Building a dynamic booking flow with cascading location selectors (Division → District → City → Area) using controlled form state",
                "Calculating and displaying total cost in real-time based on selected duration × service charge per unit",
                "Integrating Stripe payment gateway and creating bookings only after successful payment confirmation",
                "Sending automated email invoices to users upon booking confirmation using a backend email service",
                "Validating registration form with React Hook Form including NID, password strength (6+ chars, uppercase, lowercase), and duplicate email checks",
            ],
            futurePlans: [
                "Build a full Admin Dashboard with payment histories, booking management, and caretaker verification",
                "Add real-time chat/messaging between caregivers and families for session coordination",
                "Implement a review and rating system with detailed feedback after each completed care session",
                "Add calendar integration for caregiver availability management and appointment scheduling",
                "Create a caregiver profile page with certifications, experience, and background check badge",
                "Implement push notifications for booking confirmations, status updates, and session reminders",
                "Add advanced filtering by service type, location proximity, price range, and caregiver rating",
            ],
        },
        
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
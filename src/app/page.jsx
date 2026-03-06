"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion, useInView, useScroll, useSpring, AnimatePresence } from "framer-motion"
import {
  Github,

  Moon,
  Sun,
  ExternalLink,
  Menu,
  X,
  Code2,
  Sparkles,
  ArrowLeft,
} from "lucide-react"
import ContactSection from "@/components/ContactSection"
import SkillSection from "@/components/SkillSection"
import ProjectSection from "@/components/ProjectSection"
import Education from "@/components/Education"
import Service from "@/components/Service"
import Hero from "@/components/Hero"
import About from "@/components/About"

// Animated section wrapper component
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

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  // Scroll progress indicator
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "services", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false)

    if (selectedProject) {
      setSelectedProject(null)
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }, 300)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 text-xl font-bold"
            >
              <div className="relative">
                <Code2 className="w-7 h-7 text-primary" />
                <div className="absolute inset-0 bg-primary/20 blur-xl animate-glow"></div>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-chart-1 to-chart-5">
                Sultan Mia
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-1">
              {["home", "about", "skills", "projects", "services", "education", "contact"].map((section, index) => (
                <motion.button
                  key={section}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(section)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`capitalize px-4 py-2 rounded-lg transition-all ${
                    activeSection === section
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {section}
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2.5 rounded-lg hover:bg-accent transition-all"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 rounded-lg hover:bg-accent transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {["home", "about", "skills", "projects", "services", "education", "contact"].map((section, index) => (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => scrollToSection(section)}
                    className={`block w-full text-left px-4 py-3 rounded-lg capitalize transition-all ${
                      activeSection === section
                        ? "bg-primary text-primary-foreground font-medium"
                        : "hover:bg-accent"
                    }`}
                  >
                    {section}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {selectedProject ? (
        // Project Details Page
        <div className="min-h-screen pt-24 pb-12 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Back button */}
            <Button variant="outline" onClick={() => setSelectedProject(null)} className="mb-8 group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Projects
            </Button>

            {/* Project header */}
            <div className="space-y-6 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold">{selectedProject.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>

              {/* Tech stack */}
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">MAIN TECHNOLOGY STACK</h3>
                <p className="text-lg font-medium text-primary">{selectedProject.mainTech}</p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group" asChild>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    View Live Project
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="group bg-transparent" asChild>
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                    View GitHub Repository
                  </a>
                </Button>
              </div>
            </div>

            {/* Project image */}
            <Card className="overflow-hidden mb-12">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover"
              />
            </Card>

            {/* Technologies used */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {selectedProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-base font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>

            {/* Challenges faced */}
            <Card className="p-8 mb-8 border-l-4 border-l-chart-1">
              <h2 className="text-2xl font-bold mb-6">Challenges Faced</h2>
              <ul className="space-y-4">
                {selectedProject.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chart-1/20 text-chart-1 flex items-center justify-center text-sm font-bold mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed">{challenge}</p>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Future improvements */}
            <Card className="p-8 border-l-4 border-l-primary">
              <h2 className="text-2xl font-bold mb-6">Future Improvements & Plans</h2>
              <ul className="space-y-4">
                {selectedProject.futurePlans.map((plan, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Sparkles className="flex-shrink-0 w-5 h-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground leading-relaxed">{plan}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      ) : (
        <>
          {/* Hero Section */}
          <Hero />

          {/* About Section */}
          <About />

          {/* Skill Section */}
          <SkillSection />

          {/* Projects Section */}
          <ProjectSection
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />

          {/* Services Section */}
          <Service />

          {/* Education Section */}
          <Education />

          {/* Contact Section */}
          <ContactSection />

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-border py-8 px-4"
          >
            <div className="max-w-7xl mx-auto text-center">
              <p className="text-muted-foreground">
                &copy; 2026 MD Sultan Mia. All rights reserved. <br />
                Built with React & Tailwind CSS.
              </p>
            </div>
          </motion.footer>
        </>
      )}
    </div>
  )
}
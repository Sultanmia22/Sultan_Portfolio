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

const SkillSection = () => {

     const skills = {
    frontend: [
      { name: "HTML5", icon: Globe, level: 90 },
      { name: "CSS3", icon: Layers, level: 88 },
      { name: "Tailwind CSS", icon: Sparkles, level: 92 },
      { name: "JavaScript", icon: Zap, level: 85 },
      { name: "TypeScript", icon: Zap, level: 75 },
      { name: "React", icon: Box, level: 87 },
      { name: "Next.js", icon: Box, level: 80 },
      { name: "Redux", icon: Layers, level: 50 },
    ],
    backend: [
      { name: "Node.js", icon: Code2, level: 83 },
      { name: "Express.js", icon: Rocket, level: 85 },
    ],
    database: [{ name: "MongoDB", icon: Database, level: 80 }],
    tools: [
      { name: "Git", icon: Code2, level: 88 },
      { name: "GitHub", icon: Github, level: 90 },
      { name: "VS Code", icon: Code2, level: 95 },
      { name: "Postman", icon: Target, level: 82 },
    ],
  }

  return (
    <div>
          {/* Skills Section */}
          <section id="skills" className="py-24 px-4 bg-muted/30 relative overflow-hidden">
            <div className="absolute inset-0 grid-background opacity-50"></div>

            <div className="max-w-6xl mx-auto relative z-10">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">Tech Stack</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Skills & <span className="text-primary">Technologies</span>
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Technologies and tools I use to bring ideas to life
                </p>
              </AnimatedSection>

              <div className="grid sm:grid-cols-2 gap-8">
                <AnimatedSection delay={0.1}>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Globe className="w-6 h-6 text-primary" />
                        </div>
                        <h4 className="text-2xl font-bold">Frontend</h4>
                      </div>
                      <div className="space-y-5">
                        {skills.frontend.map((skill, index) => {
                      const Icon = skill.icon
                      return (
                        <motion.div 
                          key={skill.name} 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-primary" />
                              <span className="font-medium">{skill.name}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-primary to-chart-1 rounded-full"
                            />
                          </div>
                        </motion.div>
                      )
                    })}
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="p-8 hover:border-chart-1/50 transition-all hover:shadow-lg hover:shadow-chart-1/10 group">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-chart-1/10 group-hover:bg-chart-1/20 transition-colors">
                          <Layers className="w-6 h-6 text-chart-1" />
                        </div>
                        <h4 className="text-2xl font-bold">Backend</h4>
                      </div>
                      <div className="space-y-5">
                        {skills.backend.map((skill, index) => {
                          const Icon = skill.icon
                          return (
                            <motion.div 
                              key={skill.name} 
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4 text-chart-1" />
                                  <span className="font-medium">{skill.name}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r from-chart-1 to-chart-2 rounded-full"
                                />
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="p-8 hover:border-chart-3/50 transition-all hover:shadow-lg hover:shadow-chart-3/10 group">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-chart-3/10 group-hover:bg-chart-3/20 transition-colors">
                          <Database className="w-6 h-6 text-chart-3" />
                        </div>
                        <h4 className="text-2xl font-bold">Database</h4>
                      </div>
                      <div className="space-y-5">
                        {skills.database.map((skill, index) => {
                          const Icon = skill.icon
                          return (
                            <motion.div 
                              key={skill.name} 
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4 text-chart-3" />
                                  <span className="font-medium">{skill.name}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r from-chart-3 to-chart-4 rounded-full"
                                />
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
                    <Card className="p-8 hover:border-chart-5/50 transition-all hover:shadow-lg hover:shadow-chart-5/10 group">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-xl bg-chart-5/10 group-hover:bg-chart-5/20 transition-colors">
                          <Box className="w-6 h-6 text-chart-5" />
                        </div>
                        <h4 className="text-2xl font-bold">Tools</h4>
                      </div>
                      <div className="space-y-5">
                        {skills.tools.map((skill, index) => {
                          const Icon = skill.icon
                          return (
                            <motion.div 
                              key={skill.name} 
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 }}
                              className="space-y-2"
                            >
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Icon className="w-4 h-4 text-chart-5" />
                                  <span className="font-medium">{skill.name}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                              </div>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
                                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r from-chart-5 to-primary rounded-full"
                                />
                              </div>
                            </motion.div>
                          )
                        })}
                      </div>
                    </Card>
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </section>
    </div>
  )
}

export default SkillSection
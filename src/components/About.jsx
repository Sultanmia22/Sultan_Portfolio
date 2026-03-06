import React from 'react'
import {  useRef } from "react"
import {
  Code2,
  Sparkles,

  Rocket,
  TrendingUp,
  Database,
  Layers,
} from "lucide-react"
import { motion, useInView} from "framer-motion"
import { Card } from "@/components/ui/card"

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

const About = () => {
  return (
    <div>
          <section id="about" className="py-24 px-4 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 right-20 w-72 h-72 bg-chart-1/20 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">About Me</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6">
                  Crafting Digital <span className="text-primary">Experiences</span>
                </h3>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <AnimatedSection delay={0.1} className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold mb-3 text-primary">My Programming Journey</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      My journey into web development began during my academic life, where I was first introduced to programming and
                      web technologies through my institute. While this built my foundation, my real learning accelerated when I
                      started learning from Programming Hero, where my curiosity quickly turned into a strong passion for web
                      development.
                    </p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    Through Programming Hero, I focused heavily on HTML, CSS, Tailwind CSS, JavaScript, and React, and gradually moved
                    into the MERN stack (MongoDB, Express.js, React, and Node.js). By building multiple hands-on projects and solving
                    real-world problems, I continue to improve my skills, write cleaner code, and grow as a fresher MERN Stack
                    Developer.
                  </p>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-primary">What I Enjoy</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      I love building web applications that solve real-world problems. There's something incredibly
                      satisfying about taking an idea from concept to deployment, especially when users benefit from
                      what I create. I particularly enjoy working on projects that challenge me to think creatively and
                      push the boundaries of what's possible with web technologies.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-3 text-primary">Beyond Coding</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      When I'm not coding, I enjoy playing cricket and watching football matches with friends. I'm also
                      passionate about photography and love capturing beautiful moments during my travels. Reading tech
                      blogs, exploring new gadgets, and contributing to open-source projects are some of my favorite
                      pastimes. I believe in maintaining a healthy work-life balance and find that these hobbies help me
                      stay creative and energized.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10"
                    >
                      <Rocket className="w-6 h-6 text-primary" />
                      <div>
                        <div className="font-bold text-2xl">3+</div>
                        <div className="text-sm text-muted-foreground">Projects</div>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-chart-1/5 border border-chart-1/10"
                    >
                      <Code2 className="w-6 h-6 text-chart-1" />
                      <div>
                        <div className="font-bold text-2xl">10+</div>
                        <div className="text-sm text-muted-foreground">Technologies</div>
                      </div>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-chart-5/5 border border-chart-5/10"
                    >
                      <TrendingUp className="w-6 h-6 text-chart-5" />
                      <div>
                        <div className="font-bold text-2xl">100%</div>
                        <div className="text-sm text-muted-foreground">Dedicated</div>
                      </div>
                    </motion.div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2} className="relative">
                  <Card className="p-8 glass-card">
                    <h4 className="text-xl font-bold mb-6">What I Do Best</h4>
                    <div className="space-y-5">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Code2 className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Full-Stack Development</h5>
                          <p className="text-sm text-muted-foreground">
                            Building complete web applications from database to user interface
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-start gap-4"
                      >
                        <div className="p-2 rounded-lg bg-chart-1/10">
                          <Layers className="w-5 h-5 text-chart-1" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">API Development</h5>
                          <p className="text-sm text-muted-foreground">
                            Creating robust RESTful APIs with proper authentication and security
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-4"
                      >
                        <div className="p-2 rounded-lg bg-chart-3/10">
                          <Sparkles className="w-5 h-5 text-chart-3" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Modern UI Design</h5>
                          <p className="text-sm text-muted-foreground">
                            Crafting responsive, accessible interfaces with smooth animations
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start gap-4"
                      >
                        <div className="p-2 rounded-lg bg-chart-5/10">
                          <Database className="w-5 h-5 text-chart-5" />
                        </div>
                        <div>
                          <h5 className="font-semibold mb-1">Database Design</h5>
                          <p className="text-sm text-muted-foreground">
                            Structuring efficient, scalable database schemas and relationships
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>
    </div>
  )
}

export default About
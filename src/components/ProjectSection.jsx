'use client'
import React, { useState, useEffect } from "react";

import { Github, ExternalLink, ArrowLeft } from "lucide-react";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

function AnimatedSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
  );
}


const ProjectSection =  ({ selectedProject, setSelectedProject }) => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://sultan-portfolio-server.vercel.app/api/v1/project/getAllProjects",
        );
        const data = await res.json();

        setProjects(data?.data || data || []);
      } catch (err) {
        console.error("Data fetch error:", err);
        setError("প্রজেক্ট লোড করতে ব্যর্থ হয়েছে!");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

if (loading) {
    return <div className="text-center py-24">লোডিং প্রজেক্টস...</div>;
  }

  if (error) {
    return <div className="text-center py-24 text-red-500">{error}</div>;
  }  

  return (
    <div>
      <section id="projects" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary mb-4 tracking-wider uppercase">
              Portfolio
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary">Projects</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and
              experience
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
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
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
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
                        <Button
                          size="sm"
                          variant="ghost"
                          className="group/btn"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="group/btn"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
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
  );
};

export default ProjectSection;

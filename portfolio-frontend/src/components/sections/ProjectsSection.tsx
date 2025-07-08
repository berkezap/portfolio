"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Zap } from "lucide-react";
import { projects } from "@/data/portfolio-data";

interface ProjectsSectionProps {
  xboxMode: boolean;
}

export default function ProjectsSection({ xboxMode }: ProjectsSectionProps) {
  return (
    <section id="projects" className={`py-20 px-4 transition-all duration-500 ${
      xboxMode ? "bg-green-900/10" : "bg-white/50 dark:bg-slate-900/50"
    }`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold text-center mb-16 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
            xboxMode 
              ? "from-green-400 to-green-500" 
              : "from-slate-900 to-blue-700 dark:from-white dark:to-blue-300"
          }`}>
            {xboxMode ? "Game Library" : "Projelerim"}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full transition-all duration-300 transform hover:scale-105 ${
                  project.highlight 
                    ? xboxMode 
                      ? 'border-2 border-green-500 bg-gradient-to-br from-green-950/30 to-black/30 xbox-glow hover:shadow-green-500/40' 
                      : 'border-2 border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/50 dark:to-purple-950/50'
                    : xboxMode 
                      ? 'hover:border-green-400/50 bg-gradient-to-br from-green-950/10 to-black/10 hover:shadow-xl hover:shadow-green-500/20'
                      : 'hover:border-blue-300 hover:shadow-xl'
                }`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl flex items-center gap-2">
                        {project.highlight && <Zap className="w-5 h-5 text-yellow-500" />}
                        {project.title}
                        {project.highlight && <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Öne Çıkan</span>}
                      </CardTitle>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors" />
                        </a>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
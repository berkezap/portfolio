"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio-data";

interface ExperienceSectionProps {
  xboxMode: boolean;
}

export default function ExperienceSection({ xboxMode }: ExperienceSectionProps) {
  return (
    <section id="experience" className="py-20 px-4">
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
            {xboxMode ? "Career Achievements" : "İş Deneyimi"}
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <Briefcase className="w-5 h-5 text-blue-600" />
                          {exp.title}
                        </CardTitle>
                        <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          {exp.period}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-500">
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {exp.descriptions.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                          <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
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
"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code } from "lucide-react";
import { skills } from "@/data/portfolio-data";

interface SkillsSectionProps {
  xboxMode: boolean;
}

export default function SkillsSection({ xboxMode }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-20 px-4">
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
            {xboxMode ? "Skill Tree" : "Teknik Yeteneklerim"}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full transition-all duration-300 transform ${
                  xboxMode 
                    ? "hover:shadow-xl hover:shadow-green-500/20 hover:scale-105 hover:border-green-400/50 bg-gradient-to-br from-green-950/10 to-black/10" 
                    : "hover:shadow-lg hover:scale-105"
                }`}>
                  <CardHeader>
                    <CardTitle className={`text-lg flex items-center gap-2 transition-colors ${
                      xboxMode ? "text-green-300" : ""
                    }`}>
                      <Code className={`w-5 h-5 ${
                        xboxMode ? "text-green-400" : "text-blue-600"
                      }`} />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, i) => (
                        <Badge 
                          key={i} 
                          variant="outline" 
                          className={`text-xs transition-all duration-200 ${
                            xboxMode 
                              ? "hover:bg-green-500/20 hover:border-green-400 hover:text-green-300 border-green-600/30 text-green-200" 
                              : "hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
                          }`}
                        >
                          {skill}
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
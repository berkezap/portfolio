"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

interface EducationSectionProps {
  xboxMode: boolean;
}

export default function EducationSection({ xboxMode }: EducationSectionProps) {
  return (
    <section id="about" className={`py-20 px-4 transition-all duration-500 ${
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
            {xboxMode ? "Level Up: Education" : "Eğitim ve Sertifikalar"}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="border-l-4 border-l-blue-500 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  Eğitim
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Bachelor of Science in Software Development
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Yeditepe Üniversitesi (2020 - 2025)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    Google Scholarship Program
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    Game and Application Academy (2022 - 2023)
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mt-1">
                    40,000+ başvuru arasından seçilen 2,000 kişiden biri olarak Flutter, Proje Yönetimi ve Girişimcilik alanlarında yetkinlik kazandım.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-500 h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-600" />
                  Sertifikalar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Google Project Management Professional Certificate</span>
                  <Badge variant="outline">Tamamlandı</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">University of Minnesota - Introduction to Software Testing</span>
                  <Badge variant="outline">Tamamlandı</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
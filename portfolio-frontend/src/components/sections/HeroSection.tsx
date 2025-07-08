"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  Gamepad2,
  Zap
} from "lucide-react";

interface HeroSectionProps {
  xboxMode: boolean;
}

export default function HeroSection({ xboxMode }: HeroSectionProps) {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center">
              <img 
                src="/profile-photo.jpg" 
                alt="İhsan Berke Özşap" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('span');
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <span className="text-3xl font-bold text-slate-700 dark:text-slate-300 hidden">IBO</span>
            </div>
          </div>
          
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
            xboxMode 
              ? "from-green-400 via-green-300 to-green-500" 
              : "from-slate-900 via-blue-700 to-purple-700 dark:from-white dark:via-blue-300 dark:to-purple-300"
          }`}>
            İhsan Berke Özşap
          </h1>
          
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <p className={`text-xl md:text-2xl transition-colors ${
              xboxMode ? "text-green-300" : "text-slate-600 dark:text-slate-400"
            }`}>
              Full-Stack Developer
            </p>
            <div className="flex items-center gap-2">
              <p className={`text-md md:text-lg transition-colors ${
                xboxMode ? "text-green-200" : "text-slate-500 dark:text-slate-500"
              }`}>
                {xboxMode ? "With a passion for gaming & clean code" : "Profesyonel yazılım geliştirici"}
              </p>
              {xboxMode ? (
                <Gamepad2 className="h-4 w-4 text-green-400" />
              ) : (
                <Zap className="h-4 w-4 text-yellow-500" />
              )}
            </div>
          </div>
          
          <p className={`text-lg max-w-3xl mx-auto mb-8 leading-relaxed transition-colors ${
            xboxMode ? "text-green-200" : "text-slate-600 dark:text-slate-400"
          }`}>
            {xboxMode 
              ? "Welcome, Player! Ben Berke. Karmaşık yazılım problemlerini raid boss'ları gibi ele alırım: mekaniklerini analiz ederim, ekibimle strateji geliştiririm ve temiz, verimli kodlarla execute ederim. Ana görevim React ve Java Spring Boot kullanarak efsanevi uygulamalar inşa etmek." 
              : "Merhaba! Ben Berke. Kullanıcıların hayatını kolaylaştıran, temiz ve ölçeklenebilir kodlar yazma tutkusuna sahip bir yazılım geliştiricisiyim. Karmaşık problemleri alıp modern teknolojilerle sezgisel ve etkili çözümlere dönüştürmekten keyif alıyorum."
            }
            <span className={`font-medium ${
              xboxMode ? "text-green-400" : "text-blue-600 dark:text-blue-400"
            }`}> React</span> ve <span className={`font-medium ${
              xboxMode ? "text-green-400" : "text-blue-600 dark:text-blue-400"
            }`}>Java Spring Boot</span> ile çalışmayı seviyorum.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:berke.ozsap@gmail.com">
              <Button variant="outline" size="lg" className="gap-2">
                <Mail className="w-4 h-4" /> E-posta
              </Button>
            </a>
            <a href="https://linkedin.com/in/berke-ozsap" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </Button>
            </a>
            <a href="https://github.com/berkezap" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-4 h-4" /> GitHub
              </Button>
            </a>
          </div>
          
          <a href="/Ihsan_Berke_Ozsap_CV.pdf" download>
            <Button size="lg" className={`text-white gap-2 transition-all duration-500 ${
              xboxMode 
                ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" 
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            }`}>
              <Download className="w-4 h-4" />
              {xboxMode ? "View Player Stats (CV)" : "CV İndir"}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
} 
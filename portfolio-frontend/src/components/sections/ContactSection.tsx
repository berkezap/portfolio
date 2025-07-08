"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

interface ContactSectionProps {
  xboxMode: boolean;
}

export default function ContactSection({ xboxMode }: ContactSectionProps) {
  return (
    <section id="contact" className={`py-20 px-4 transition-all duration-500 ${
      xboxMode ? "bg-green-900/10" : "bg-white/50 dark:bg-slate-900/50"
    }`}>
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-4xl font-bold mb-8 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
            xboxMode 
              ? "from-green-400 to-green-500" 
              : "from-slate-900 to-blue-700 dark:from-white dark:to-blue-300"
          }`}>
            {xboxMode ? "Join My Party" : "İletişime Geçin"}
          </h2>
          
          <p className={`text-lg mb-12 max-w-2xl mx-auto leading-relaxed transition-colors ${
            xboxMode ? "text-green-200" : "text-slate-600 dark:text-slate-400"
          }`}>
            {xboxMode 
              ? "Ready to team up for epic coding adventures? Let's build something legendary together!" 
              : "Yeni projeler, iş fırsatları veya sadece teknoloji hakkında sohbet etmek için benimle iletişime geçmekten çekinmeyin."
            }
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:berke.ozsap@gmail.com">
              <Button size="lg" className={`gap-2 transition-all duration-500 ${
                xboxMode 
                  ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" 
                  : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              }`}>
                <Mail className="w-5 h-5" />
                berke.ozsap@gmail.com
              </Button>
            </a>
            <a href="tel:05519805858">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="w-5 h-5" />
                05519805858
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
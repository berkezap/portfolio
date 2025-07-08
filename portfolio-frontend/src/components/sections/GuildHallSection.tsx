"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gamepad2, Code, Zap, Award } from "lucide-react";

interface GuildHallSectionProps {
  xboxMode: boolean;
}

export default function GuildHallSection({ xboxMode }: GuildHallSectionProps) {
  if (!xboxMode) return null;

  return (
    <section id="guild" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
            Guild Hall: Where Gaming Meets Professional Growth
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 bg-gradient-to-br from-green-950/20 to-black/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-green-300">
                    <Gamepad2 className="w-6 h-6 text-green-400" />
                    World of Warcraft / Destiny 2
                  </CardTitle>
                  <CardDescription className="text-green-200">
                    MMORPG Leadership & Team Coordination
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-100 leading-relaxed">
                    25-kişilik raid&apos;leri yönetmek bana proje yönetimi hakkında her şeyi öğretti: net hedefler belirleme, rol dağıtımı, kaynak yönetimi ve yoğun baskı altında sakin, etkili iletişim kurma. Bu, ultimate Agile takım deneyimi.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 bg-gradient-to-br from-green-950/20 to-black/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-green-300">
                    <Code className="w-6 h-6 text-green-400" />
                    Factorio / Satisfactory
                  </CardTitle>
                  <CardDescription className="text-green-200">
                    System Design & Optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-100 leading-relaxed">
                    Karmaşık otomatik fabrikalar tasarlamak sistem tasarımı, mantık ve ölçeklenebilirlik becerilerimi geliştirdi. Birbirine bağlı sistemleri düşünmeyi, darboğazları tespit etmeyi ve gelecek büyüme için planlama yapmayı öğretti.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 bg-gradient-to-br from-green-950/20 to-black/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-green-300">
                    <Zap className="w-6 h-6 text-green-400" />
                    League of Legends / StarCraft II
                  </CardTitle>
                  <CardDescription className="text-green-200">
                    Strategic Planning & Real-time Decision Making
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-100 leading-relaxed">
                    Yüksek riskli rekabetçi strateji oyunları hızlı karar verme, stratejik planlama ve öngörülemeyen zorluklara gerçek zamanlı adapte olma yeteneğimi geliştirdi. Durumu saniyeler içinde analiz edip stratejini pivot etmeyi öğretir.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 bg-gradient-to-br from-green-950/20 to-black/20">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-green-300">
                    <Award className="w-6 h-6 text-green-400" />
                    Elden Ring / Dark Souls
                  </CardTitle>
                  <CardDescription className="text-green-200">
                    Resilience & Problem-solving
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-100 leading-relaxed">
                    Bu oyunlar dayanıklılık, problem çözme ve başarısızlıktan öğrenme konusunda bir master class. Her &apos;You Died&apos; ekranı neyin yanlış gittiğini analiz etme ve soruna yeni, geliştirilmiş bir stratejiyle yaklaşma dersi.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
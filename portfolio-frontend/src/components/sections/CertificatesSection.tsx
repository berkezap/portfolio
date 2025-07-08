"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Medal } from "lucide-react";

interface CertificatesSectionProps {
  xboxMode: boolean;
}

export default function CertificatesSection({ xboxMode }: CertificatesSectionProps) {
  if (xboxMode) return null;

  return (
    <section id="certificates" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Sertifikalar & Başarılar
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Sürekli öğrenme ve gelişim yolculuğumda elde ettiğim sertifikalar ve başarılar
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Google Certificate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-blue-600">
                    <Award className="w-6 h-6" />
                    Google Scholarship
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    2,000 kişi 40,000+ başvuru arasından seçildi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    Google Academy tarafından verilen prestijli burs programı. Yazılım geliştirme alanında üstün başarı ve potansiyel gösterdiğim için seçildim.
                  </p>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300">
                    Aktif Bursiyer
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certificate 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-green-600">
                    <Award className="w-6 h-6" />
                    Professional Certificate
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Doğrulanmış Sertifika
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <a 
                      target="_blank" 
                      href="https://verified.sertifier.com/tr/verify/57397398195974/"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <img 
                        src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/57397398195974.png" 
                        alt="Professional Certificate"
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    </a>
                  </div>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300">
                    Doğrulandı
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certificate 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-blue-600">
                    <Medal className="w-6 h-6" />
                    Technical Certificate
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Teknik Yetkinlik Belgesi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <a 
                      target="_blank" 
                      href="https://verified.sertifier.com/tr/verify/30381818614014/"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <img 
                        src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/30381818614014.png" 
                        alt="Technical Certificate"
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    </a>
                  </div>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300">
                    Aktif
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certificate 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-purple-600">
                    <Award className="w-6 h-6" />
                    Specialized Certificate
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Uzmanlik Sertifikası
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <a 
                      target="_blank" 
                      href="https://verified.sertifier.com/tr/verify/89661636603693/"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <img 
                        src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/89661636603693.png" 
                        alt="Specialized Certificate"
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    </a>
                  </div>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300">
                    Tamamlandı
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certificate 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-orange-600">
                    <Medal className="w-6 h-6" />
                    Advanced Certificate
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    İleri Seviye Sertifika
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <a 
                      target="_blank" 
                      href="https://verified.sertifier.com/tr/verify/13163747653878/"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <img 
                        src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/13163747653878.png" 
                        alt="Advanced Certificate"
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    </a>
                  </div>
                  <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300">
                    Sertifikalı
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certificate 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-red-600">
                    <Award className="w-6 h-6" />
                    Expert Certificate
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Uzman Seviye Belge
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <a 
                      target="_blank" 
                      href="https://verified.sertifier.com/tr/verify/11007979773168/"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <img 
                        src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/11007979773168.png" 
                        alt="Expert Certificate"
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    </a>
                  </div>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300">
                    Onaylandı
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Badge 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-indigo-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-indigo-600">
                    <Medal className="w-6 h-6" />
                    Professional Badge
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Profesyonel Rozet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <a 
                      target="_blank" 
                      href="https://verified.sertifier.com/tr/verify/72949973101477/"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <img 
                        src="https://verified-bucket.s3.eu-central-1.amazonaws.com/badge/72949973101477.png" 
                        alt="Professional Badge"
                        className="w-full rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      />
                    </a>
                  </div>
                  <Badge variant="outline" className="bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300">
                    Kazanıldı
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>

            {/* Coursera Certificate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-l-cyan-500">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2 text-cyan-600">
                    <Award className="w-6 h-6" />
                    Coursera Certificate
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Online Kurs Sertifikası
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <a 
                      target="_blank" 
                      href="https://coursera.org/share/eee6dbb13175029c1c4488641ede45a1"
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <div className="w-full h-32 bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-950 dark:to-blue-950 rounded-lg shadow-md hover:shadow-lg transition-shadow flex items-center justify-center border-2 border-dashed border-cyan-300 dark:border-cyan-700">
                        <div className="text-center">
                          <Award className="w-12 h-12 text-cyan-500 mx-auto mb-2" />
                          <p className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">Coursera Sertifikası</p>
                          <p className="text-xs text-cyan-600 dark:text-cyan-400">Görüntülemek için tıklayın</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <Badge variant="outline" className="bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300">
                    Tamamlandı
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 
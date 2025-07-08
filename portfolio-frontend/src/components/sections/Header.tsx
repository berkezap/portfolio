"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Moon, 
  Terminal, 
  Gamepad2, 
  Menu, 
  X 
} from "lucide-react";
import { useTheme } from "next-themes";

interface HeaderProps {
  xboxMode: boolean;
  onToggleXboxMode: () => void;
}

export default function Header({ xboxMode, onToggleXboxMode }: HeaderProps) {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50 w-full border-b backdrop-blur-lg transition-all duration-500 ${
      xboxMode 
        ? "border-green-500/30 bg-black/80" 
        : "border-slate-200/50 bg-white/80 dark:border-slate-800/50 dark:bg-slate-900/80"
    }`}>
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-3">
          <div className={`rounded-lg p-2 transition-all duration-500 ${
            xboxMode 
              ? "bg-gradient-to-r from-green-500 to-green-600" 
              : "bg-gradient-to-r from-blue-600 to-purple-600"
          }`}>
            {xboxMode ? (
              <Gamepad2 className="h-5 w-5 text-white" />
            ) : (
              <Terminal className="h-5 w-5 text-white" />
            )}
          </div>
          <span className={`text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent transition-all duration-500 ${
            xboxMode 
              ? "from-green-400 to-green-500" 
              : "from-blue-600 to-purple-600"
          }`}>
            Ihsan Berke Ozsap
          </span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className={`text-sm font-medium transition-colors ${
            xboxMode 
              ? "text-green-300 hover:text-green-400" 
              : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          }`}>Eğitim</a>
          <a href="#experience" className={`text-sm font-medium transition-colors ${
            xboxMode 
              ? "text-green-300 hover:text-green-400" 
              : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          }`}>Deneyim</a>
          <a href="#projects" className={`text-sm font-medium transition-colors ${
            xboxMode 
              ? "text-green-300 hover:text-green-400" 
              : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          }`}>Projeler</a>
          <a href="#skills" className={`text-sm font-medium transition-colors ${
            xboxMode 
              ? "text-green-300 hover:text-green-400" 
              : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          }`}>Yetenekler</a>
          {!xboxMode && (
            <a href="#certificates" className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
              Sertifikalar
            </a>
          )}
          {xboxMode && (
            <a href="#guild" className="text-sm font-medium text-green-300 hover:text-green-400 transition-colors">
              Guild Hall
            </a>
          )}
          <a href="#contact" className={`text-sm font-medium transition-colors ${
            xboxMode 
              ? "text-green-300 hover:text-green-400" 
              : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          }`}>İletişim</a>
          
          <div className="flex items-center gap-2 ml-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onToggleXboxMode}
              className={xboxMode ? "bg-green-500 text-white border-green-500 hover:bg-green-600" : ""}
            >
              <Gamepad2 className="h-4 w-4" />
            </Button>
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onToggleXboxMode}
            className={xboxMode ? "bg-green-500 text-white border-green-500 hover:bg-green-600" : ""}
          >
            <Gamepad2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden border-t transition-all duration-300 ${
          xboxMode 
            ? "border-green-500/30 bg-black/95" 
            : "border-slate-200/50 bg-white/95 dark:border-slate-800/50 dark:bg-slate-900/95"
        }`}>
          <div className="container px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className={`text-sm font-medium transition-colors ${
                  xboxMode 
                    ? "text-green-300 hover:text-green-400" 
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Eğitim
              </a>
              <a 
                href="#experience" 
                className={`text-sm font-medium transition-colors ${
                  xboxMode 
                    ? "text-green-300 hover:text-green-400" 
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Deneyim
              </a>
              <a 
                href="#projects" 
                className={`text-sm font-medium transition-colors ${
                  xboxMode 
                    ? "text-green-300 hover:text-green-400" 
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projeler
              </a>
              <a 
                href="#skills" 
                className={`text-sm font-medium transition-colors ${
                  xboxMode 
                    ? "text-green-300 hover:text-green-400" 
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Yetenekler
              </a>
              {!xboxMode && (
                <a 
                  href="#certificates" 
                  className="text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sertifikalar
                </a>
              )}
              {xboxMode && (
                <a 
                  href="#guild" 
                  className="text-sm font-medium text-green-300 hover:text-green-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Guild Hall
                </a>
              )}
              <a 
                href="#contact" 
                className={`text-sm font-medium transition-colors ${
                  xboxMode 
                    ? "text-green-300 hover:text-green-400" 
                    : "text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                İletişim
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
} 
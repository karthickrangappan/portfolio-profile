import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "mx-4 mt-3 rounded-2xl"
          : "bg-transparent py-2"
      )}
      style={scrolled ? {
        background: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(124, 92, 252, 0.18)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(124,92,252,0.08)'
      } : {}}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32 flex justify-between items-center py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 sm:gap-3 font-bold text-lg sm:text-xl"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          <div className="relative">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-black text-white text-base sm:text-lg"
              style={{ background: 'linear-gradient(135deg, #7c5cfc, #00e5ff)', boxShadow: '0 0 20px rgba(124,92,252,0.5)' }}>
              K
            </div>
          </div>
          <span className="text-gradient">Karthick R</span>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="text-sm font-medium transition-all duration-300 relative group"
              style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}
              onMouseEnter={e => e.target.style.color = '#0f172a'}
              onMouseLeave={e => e.target.style.color = '#475569'}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                style={{ background: 'linear-gradient(90deg, #7c5cfc, #00e5ff)' }}></span>
            </motion.a>
          ))}
          <a
            href="#contact"
            className="btn-primary text-white px-5 py-2 rounded-xl text-sm font-semibold"
          >
            Hire Me ✦
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-xl transition-colors"
          style={{ background: 'rgba(124,92,252,0.15)', border: '1px solid rgba(124,92,252,0.25)', color: '#a78bfa' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.97)', border: '1px solid rgba(124,92,252,0.2)', boxShadow: '0 20px 60px rgba(0,0,0,0.6)' }}
          >
            <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-2 text-sm sm:text-base font-medium transition-colors"
                  style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary text-white py-2.5 sm:py-3 rounded-xl font-bold text-sm sm:text-base"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

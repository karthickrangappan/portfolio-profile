import { motion } from "framer-motion";
import { User, Mail, MapPin, Briefcase, Calendar, Smartphone } from "lucide-react";

export function About() {
  const aboutData = {
    name: "Karthick R",
    title: "Full Stack Developer",
    description:
      "A creative and detail-oriented Full Stack Developer with a strong focus on building premium user experiences. I bridge the gap between complex logic and beautiful design, ensuring every pixel serves a purpose.",
    image: "/profile2.png",
    details: [
      { label: "Birthday", value: "Dec 27, 2003", icon: <Calendar className="w-4 h-4" /> },
      { label: "Age", value: "22 Years", icon: <User className="w-4 h-4" /> },
      { label: "City", value: "Chennai, India", icon: <MapPin className="w-4 h-4" /> },
      { label: "Degree", value: "BE CSE", icon: <Briefcase className="w-4 h-4" /> },
      { label: "Mail", value: "karthickrangappan@gmail.com", icon: <Mail className="w-4 h-4" /> },
      { label: "Phone", value: "+91 8825415354", icon: <Smartphone className="w-4 h-4" /> },
    ]
  };

  const { name, title, description, image, details } = aboutData;

  return (
    <section id="about" className="bg-white py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
      <div className="divider-gradient mb-20"></div>
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center mb-10 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="section-label">Who I am</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gradient mt-2 mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              About Me
            </h2>
          </motion.div>
          <div className="w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #7c5cfc, #00e5ff)' }}></div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="md:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Glow behind image */}
              <div className="absolute -inset-6 rounded-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: 'radial-gradient(ellipse, #7c5cfc, transparent)', filter: 'blur(30px)' }}></div>

              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-24 h-24 rounded-full opacity-60"
                style={{ background: 'conic-gradient(from 0deg, #7c5cfc, #00e5ff, transparent)', filter: 'blur(2px)' }}></div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full opacity-50"
                style={{ background: 'conic-gradient(from 180deg, #f5a623, #ff4d8d, transparent)', filter: 'blur(2px)' }}></div>

              <div className="relative rounded-[2rem] overflow-hidden"
                style={{ border: '2px solid rgba(255,255,255,0.75)', boxShadow: '0 30px 90px rgba(124,92,252,0.18)' }}>
                <img
                  src={image}
                  alt={name}
                  className="w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px] xl:max-w-[520px] rounded-[2rem] group-hover:scale-105 transition-all duration-700 object-cover"
                  style={{ filter: 'brightness(1.02) contrast(1.08) saturate(1.12)' }}
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(135deg, rgba(124,92,252,0.22), transparent 55%)' }}></div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="md:col-span-7"
          >
            <div className="glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 lg:p-12" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))', border: '1px solid rgba(124,92,252,0.3)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            <h3 className="text-lg sm:text-xl md:text-2xl xl:text-3xl font-black mb-1" style={{ fontFamily: 'Syne, sans-serif', color: '#eef0f1' }}>
                Hello, I'm <span style={{ background: 'linear-gradient(135deg, #7c5cfc, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{name}</span>
              </h3>
              <p className="section-label mb-6">{title}</p>

            <p className="leading-relaxed text-xs sm:text-sm md:text-base mb-8 sm:mb-10" style={{ color: '#ffffff', fontFamily: 'DM Sans, sans-serif' }}>
                {description}
              </p>

              {/* DETAILS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-4 sm:gap-x-8 mb-8 sm:mb-10">
                {details.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(124,92,252,0.15)', border: '1px solid rgba(124,92,252,0.25)', color: '#a78bfa', width: '2rem', height: '2rem' }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="section-label" style={{ fontSize: '0.6rem' }}>{item.label}</p>
                      <p className="text-xs sm:text-sm font-medium break-words" style={{ color: '#ffffff', fontFamily: 'DM Sans, sans-serif' }}>{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="/Karthick_R.pdf" download className="btn-primary text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-center text-xs sm:text-sm md:text-base">
                  Download CV ↓
                </a>
                <a href="#contact" className="btn-secondary px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-center text-xs sm:text-sm md:text-base" style={{ color: '#bccee7' }}>
                  Get in Touch →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

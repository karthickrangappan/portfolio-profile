import { motion } from "framer-motion";
import { GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";

export function Experience() {
  const education = [
    {
      title: "B.E Computer Science Engineering",
      institution: "Shreenivasa Engineering College, Dharmapuri",
      period: "2021 – 2025",
      result: "CGPA: 7.83",
    },
    {
      title: "HSC (Class 12)",
      institution: "Government Higher Secondary School, Krishnagiri",
      period: "2021",
      result: "Percentage: 82.6%",
    },
    {
      title: "SSLC (Class 10)",
      institution: "Government High School, Krishnagiri",
      period: "2019",
      result: "Percentage: 71.8%",
    }
  ];

  const experience = [
    {
      title: "React Developer Intern",
      company: "Qtechx Solution, Tirupattur",
      period: "Oct 2025 – Mar 2026",
      description: "Developed and maintained e-commerce web applications using React.js and Tailwind CSS. Integrated Firebase for authentication and real-time database operations.",
      skills: ["React 19", "Tailwind CSS", "Firebase"],
      accent: "#7c5cfc"
    },
    {
      title: "Python Full Stack Intern",
      company: "QSpiders, Chennai",
      period: "Feb 2025 – Oct 2025",
      description: "Gained hands-on experience in Python, SQL, and frontend technologies. Built responsive UI and worked on backend integration and full-stack workflows.",
      skills: ["Python", "SQL", "Frontend"],
      accent: "#00e5ff"
    }
  ];

  return (
    <section id="experience" className="bg-white py-16 sm:py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
      <div className="divider-gradient mb-12 sm:mb-20"></div>
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">My journey</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gradient mt-2 mb-3 sm:mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Journey & Expertise
            </h2>
          </motion.div>
          <div className="w-16 sm:w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #7c5cfc, #00e5ff)' }}></div>
            <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm md:text-base" style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}>
            A timeline of my academic milestones and professional experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 relative">
          {/* Center divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px opacity-20"
            style={{ background: 'linear-gradient(to bottom, transparent, #7c5cfc, #00e5ff, transparent)' }}></div>

          {/* EDUCATION */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(124,92,252,0.2), rgba(0,229,255,0.1))', border: '1px solid rgba(124,92,252,0.3)', color: '#a78bfa' }}>
                <GraduationCap className="w-5 h-5" />
              </div>
          <h3 className="text-xl sm:text-2xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#1e293b' }}>Education</h3>
            </div>

            <div className="space-y-5 sm:space-y-6 relative pl-6">
              <div className="absolute left-[6px] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, rgba(124,92,252,0.5), transparent)' }}></div>

              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="timeline-dot" style={{ left: '-24px' }}></div>

                  <div
                    className="glass-card rounded-2xl p-5 sm:p-6"
                    style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))', border: '1px solid rgba(124,92,252,0.5)' }}
                  >
                    <div className="flex justify-between items-start mb-3 gap-3">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold transition-colors" style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}>
                        {edu.title}
                      </h4>
                      <span className="text-xs font-bold px-3 py-1 rounded-lg shrink-0 whitespace-nowrap"
                        style={{ background: 'rgba(255,255,255,0.08)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.12)' }}>
                        {edu.period}
                      </span>
                    </div>
                      <p className="text-xs sm:text-sm mb-3" style={{ color: '#cbd5e1', fontFamily: 'DM Sans, sans-serif' }}>{edu.institution}</p>
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold" style={{ color: '#7dd3fc' }}>
                      <CheckCircle2 className="w-3.5 h-3.5" /> {edu.result}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE */}
          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 mt-10 lg:mt-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(245,166,35,0.2), rgba(255,77,141,0.1))', border: '1px solid rgba(245,166,35,0.3)', color: '#f5a623' }}>
                <Briefcase className="w-5 h-5" />
              </div>
          <h3 className="text-xl sm:text-2xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#1e293b' }}>Work Experience</h3>
            </div>

            <div className="space-y-5 sm:space-y-6 relative pl-6">
              <div className="absolute left-[6px] top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, rgba(245,166,35,0.5), transparent)' }}></div>

              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute w-[14px] h-[14px] rounded-full border-2 z-10"
                    style={{ left: '-25px', top: '8px', background: exp.accent, borderColor: '#ffffff', boxShadow: `0 0 12px ${exp.accent}80` }}></div>

                  <div className="glass-card rounded-2xl p-5 sm:p-7" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))', border: '1px solid rgba(124,92,252,0.5)' }}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3">
                      <div>
                      <h4 className="text-sm sm:text-base md:text-lg xl:text-xl font-black" style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}>{exp.title}</h4>
                          <p className="text-xs sm:text-sm" style={{ color: '#cbd5e1', fontFamily: 'DM Sans, sans-serif' }}>{exp.company}</p>
                      </div>
                      <span className="inline-block text-xs font-bold px-4 py-1.5 rounded-xl self-start whitespace-nowrap"
                        style={{ background: 'rgba(255,255,255,0.08)', color: '#cbd5e1', border: '1px solid rgba(255,255,255,0.12)' }}>
                        {exp.period}
                      </span>
                    </div>
                      <p className="text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 italic" style={{ color: '#cbd5e1', fontFamily: 'DM Sans, sans-serif' }}>
                      "{exp.description}"
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => (
                        <span key={skill} className="text-xs font-bold px-3 py-1 rounded-lg"
                          style={{ background: 'rgba(124,92,252,0.14)', color: '#cbd5e1', border: '1px solid rgba(124,92,252,0.22)' }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

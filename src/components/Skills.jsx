import { motion } from "framer-motion";
import { Layout, Server, Database, Gauge } from "lucide-react";

export function Skills() {
  const techStack = ["React", "Node.js", "Python", "TypeScript", "Firebase", "Tailwind", "Git", "Docker", "SQL", "AWS", "Vite", "Framer Motion"];

  const skillGroups = [
    {
      title: "Frontend Mastery",
      icon: <Layout className="w-5 h-5" />,
      skills: ["React 19", "JavaScript (ES6+)", "Tailwind CSS 4", "Framer Motion", "TypeScript"],
      gradient: "linear-gradient(135deg, #7c5cfc, #00e5ff)",
      glow: "rgba(124,92,252,0.25)"
    },
    {
      title: "Backend Core",
      icon: <Server className="w-5 h-5" />,
      skills: ["Python", "Node.js", "REST APIs", "Auth Services", "FastAPI"],
      gradient: "linear-gradient(135deg, #f5a623, #ff4d8d)",
      glow: "rgba(245,166,35,0.2)"
    },
    {
      title: "Cloud & Data",
      icon: <Database className="w-5 h-5" />,
      skills: ["Firebase", "SQL (PostgreSQL)", "Prisma", "AWS Basics", "Redis"],
      gradient: "linear-gradient(135deg, #00e5ff, #7c5cfc)",
      glow: "rgba(0,229,255,0.2)"
    },
    {
      title: "Dev Excellence",
      icon: <Gauge className="w-5 h-5" />,
      skills: ["Git / GitHub", "Vite / Webpack", "Jest / Vitest", "CI/CD", "Docker"],
      gradient: "linear-gradient(135deg, #ff4d8d, #f5a623)",
      glow: "rgba(255,77,141,0.2)"
    },
  ];

  return (
    <section id="skills" className="bg-white py-16 sm:py-24 md:py-32 px-6 md:px-12 lg:px-24 xl:px-32 relative">
      <div className="divider-gradient mb-12 sm:mb-20"></div>
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="section-label">What I know</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-gradient mt-2 mb-3 sm:mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Capabilities
            </h2>
          </motion.div>
          <div className="w-16 sm:w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #7c5cfc, #00e5ff)' }}></div>
          <p className="text-center max-w-2xl text-xs sm:text-sm md:text-base mt-4 sm:mt-6" style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}>
            A comprehensive toolkit of modern technologies I use to bring complex digital visions to life.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8"
        >
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="glass-card rounded-3xl sm:rounded-[2rem] p-6 sm:p-8 flex flex-col relative overflow-hidden group"
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"
                style={{ background: `radial-gradient(ellipse at top left, ${group.glow}, transparent 60%)` }}></div>

              {/* ICON */}
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500"
                style={{ background: group.gradient, boxShadow: `0 8px 24px ${group.glow}` }}>
                {group.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-sm sm:text-base md:text-lg font-black mb-3 sm:mb-5 transition-colors" style={{ fontFamily: 'Syne, sans-serif', color: '#d6e4f5' }}>
                {group.title}
              </h3>

              {/* SKILLS TAGS */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag-pill">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Subtle corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-10 rounded-bl-full"
                style={{ background: group.gradient }}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech marquee row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 overflow-hidden rounded-2xl p-3 border border-gray-100 shadow-sm bg-white"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          style={{ opacity: 1 }}
        >
          {[...techStack, ...techStack].map((tech, index) => (
            <span key={`${tech}-${index}`} className="text-[10px] sm:text-xs font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl mr-3 sm:mr-4 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, rgba(124,92,252,0.06), rgba(0,229,255,0.04))',
                border: '1px solid rgba(124,92,252,0.12)',
                color: '#0f172a',
                fontFamily: 'DM Sans, sans-serif',
                letterSpacing: '0.04em'
              }}>
                {tech}
              </span>
          ))}
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

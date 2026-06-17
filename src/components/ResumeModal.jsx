import { motion } from "framer-motion";
import { useState } from "react";

export function ResumeModal({ isOpen, onClose }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Create a link element to trigger download
      const link = document.createElement("a");
      link.href = "/Karthick_R.pdf";
      link.download = "Karthick_R.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading resume:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        style={{ boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)" }}
      >
        {/* Header */}
        <div
          className="px-6 md:px-8 py-4 md:py-6 flex justify-between items-center border-b"
          style={{ borderColor: "rgba(124,92,252,0.1)" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1e293b" }}>
            My Resume
          </h2>
          <button
            onClick={onClose}
            className="text-2xl font-bold transition-colors duration-200 hover:text-red-500"
            style={{ color: "#64748b" }}
          >
            ✕
          </button>
        </div>

        {/* Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {/* Resume Preview or Embed */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "#7c5cfc" }}>
                Karthick R
              </h3>
              <p style={{ color: "#64748b" }} className="text-sm">
                Full Stack Developer | React Specialist
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3" style={{ color: "#1e293b" }}>
                Contact Information
              </h4>
              <div className="space-y-1 text-sm" style={{ color: "#475569" }}>
                <p>📧 Email: your.email@example.com</p>
                <p>🔗 LinkedIn: linkedin.com/in/yourprofile</p>
                <p>🐙 GitHub: github.com/yourprofile</p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3" style={{ color: "#1e293b" }}>
                Professional Summary
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                Passionate Frontend Developer with 2+ years of experience building high-performance, visually stunning, and user-centric web applications. Specialized in React, JavaScript, and modern web technologies. Proven track record of delivering projects that exceed client expectations.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3" style={{ color: "#1e293b" }}>
                Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "React",
                  "JavaScript",
                  "TypeScript",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Vite",
                  "Node.js",
                  "REST APIs",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg text-xs font-semibold text-white"
                    style={{ background: "linear-gradient(135deg, #7c5cfc, #00e5ff)" }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3" style={{ color: "#1e293b" }}>
                Experience
              </h4>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold" style={{ color: "#1e293b" }}>
                    Frontend Developer
                  </p>
                  <p className="text-sm" style={{ color: "#7c5cfc" }}>
                    Company Name | 2023 - Present
                  </p>
                  <p className="text-sm mt-1" style={{ color: "#475569" }}>
                    Developed responsive web applications using React and modern web technologies.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3" style={{ color: "#1e293b" }}>
                Education
              </h4>
              <div>
                <p className="font-semibold" style={{ color: "#1e293b" }}>
                  Bachelor of Science in Information Technology
                </p>
                <p className="text-sm" style={{ color: "#7c5cfc" }}>
                  University Name | Graduation Year
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-3" style={{ color: "#1e293b" }}>
                Projects
              </h4>
              <p className="text-sm" style={{ color: "#475569" }}>
                Check my portfolio section for detailed project information and live demos.
              </p>
            </div>
          </div>
        </div>

        {/* Footer with Download Button */}
        <div
          className="px-6 md:px-8 py-4 md:py-6 border-t flex gap-3 justify-end"
          style={{ borderColor: "rgba(124,92,252,0.1)" }}
        >
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg font-semibold transition-colors duration-200"
            style={{
              background: "rgba(124,92,252,0.1)",
              color: "#7c5cfc",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(124,92,252,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(124,92,252,0.1)";
            }}
          >
            Close
          </button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownload}
            disabled={isDownloading}
            className="px-6 py-2 rounded-lg font-semibold text-white transition-all duration-200 flex items-center gap-2"
            style={{
              background: "linear-gradient(135deg, #7c5cfc, #00e5ff)",
              opacity: isDownloading ? 0.7 : 1,
            }}
          >
            {isDownloading ? (
              <>
                <span className="inline-block animate-spin">⏳</span>
                Downloading...
              </>
            ) : (
              <>
                <span>📥</span>
                Download Resume
              </>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, MessageSquare, ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "./common/Icons";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE", // Replace this with your Web3Forms access key
          ...formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }

    // Reset status message after 4 seconds
    setTimeout(() => {
      setStatus("");
    }, 4000);
  };

  const contactInfo = [
    {
      title: "Office Location",
      value: "Tamil Nadu, India",
      icon: <MapPin className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #7c5cfc, #00e5ff)",
      glow: "rgba(124,92,252,0.25)"
    },
    {
      title: "Direct Email",
      value: "karthickrangappan@gmail.com",
      icon: <Mail className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #f5a623, #ff4d8d)",
      glow: "rgba(245,166,35,0.25)",
      link: "mailto:karthickrangappan@gmail.com"
    },
    {
      title: "GitHub",
      value: "github.com/karthickrangappan",
      icon: <GithubIcon className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #7c5cfc, #00e5ff)",
      glow: "rgba(124,92,252,0.25)",
      link: "https://github.com/karthickrangappan"
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/karthick-r-270318v",
      icon: <ExternalLink className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #0a66c2, #0077b5)",
      glow: "rgba(10,102,194,0.25)",
      link: "https://www.linkedin.com/in/karthick-r-270318v?utm_source=share_via&utm_content=profile&utm_medium=member_android"
    },
    {
      title: "Phone & WhatsApp",
      value: "+91 8825415354",
      icon: <Phone className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #00e5ff, #7c5cfc)",
      glow: "rgba(0,229,255,0.25)"
    }
  ];

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden">
      <div className="divider-gradient mb-12 sm:mb-20"></div>
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col items-center mb-10 sm:mb-16 md:mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Let's connect</span>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-gradient mt-2 mb-3 sm:mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Get In Touch
            </h2>
          </motion.div>
          <div className="w-16 sm:w-20 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #7c5cfc, #00e5ff)' }}></div>
            <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-sm md:text-base" style={{ color: '#475569', fontFamily: 'DM Sans, sans-serif' }}>
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16">

          {/* LEFT INFO */}
          <div className="lg:col-span-5 space-y-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 group"
                style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))', border: '1px solid rgba(124,92,252,0.2)' }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: info.gradient, boxShadow: `0 8px 20px ${info.glow}` }}>
                  {info.icon}
                </div>
                <div>
                  <p className="section-label" style={{ fontSize: '0.6rem' }}>{info.title}</p>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-medium" style={{ color: '#d2d2e2', fontFamily: 'DM Sans, sans-serif' }}>{info.value}</a>
                  ) : (
                    <p className="text-xs sm:text-sm font-medium" style={{ color: '#d2d2e2', fontFamily: 'DM Sans, sans-serif' }}>{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* WHATSAPP CARD */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-5 sm:p-7 relative overflow-hidden"
              style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))', border: '1px solid rgba(124,92,252,0.2)' }}
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, #7c5cfc, transparent)' }}></div>
                <h4 className="font-bold text-base sm:text-lg mb-2 flex items-center gap-2" style={{ fontFamily: 'Syne, sans-serif', color: '#0c63e6' }}>
                <MessageSquare className="w-5 h-5" style={{ color: '#a78bfa' }} /> Need a quick chat?
              </h4>
              <p className="text-xs sm:text-sm mb-4 sm:mb-5" style={{ color: '#ccc9e7', fontFamily: 'DM Sans, sans-serif' }}>
                Chat with me directly on WhatsApp for faster communication.
              </p>
              <a
                href="https://wa.me/918825415354"
                className="inline-flex items-center gap-2 font-bold text-sm transition-all hover:gap-3"
                style={{ color: '#a78bfa' }}
              >
                Start Chat <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12"
            style={{ background: '#ffffff', border: '1px solid rgba(124,92,252,0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}
          >
              <h3 className="text-lg sm:text-xl md:text-2xl font-black mb-6 sm:mb-8" style={{ fontFamily: 'Syne, sans-serif', color: '#588adb' }}>
              Send me a <span style={{ background: 'linear-gradient(135deg, #7c5cfc, #00e5ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>message</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
                <div className="space-y-2">
                  <label className="section-label" style={{ fontSize: '0.6rem' }}>Full Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name" className="input-dark bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="section-label" style={{ fontSize: '0.6rem' }}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="name@example.com" className="input-dark bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="section-label" style={{ fontSize: '0.6rem' }}>Subject (Optional)</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="What is this about?" className="input-dark bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400" />
              </div>

              <div className="space-y-2">
                <label className="section-label" style={{ fontSize: '0.6rem' }}>Message</label>
                <textarea rows="5" name="message" value={formData.message} onChange={handleChange} required placeholder="How can I help you today?" className="input-dark resize-none bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400" />
              </div>

              <button type="submit" disabled={status === "loading"} className="btn-primary w-full text-white py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-bold flex items-center justify-center gap-3 group text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed">
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
                {status !== "loading" && status !== "success" && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
              {status === "error" && (
                <p className="text-red-500 text-sm font-bold text-center mt-2">Failed to send message. Please try again.</p>
              )}
              {status === "success" && (
                <p className="text-emerald-500 text-sm font-bold text-center mt-2">Thanks for reaching out! I'll get back to you soon.</p>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

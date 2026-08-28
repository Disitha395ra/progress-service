import { motion } from "framer-motion"
import { Link } from "react-scroll"
import { FiArrowDown, FiShield, FiTool, FiPackage } from "react-icons/fi"
import "./Hero.css"

const statsData = [
  { number: "15+", label: "Years Excellence" },
  { number: "500+", label: "Trusted Partners" },
  { number: "3", label: "Core Divisions" },
  { number: "24/7", label: "Operations" },
]

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-container" style={{ opacity: 0.35 }}>
        <div className="hero-bg-split" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')" }} />
      </div>
      <div className="hero-overlay" style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.7) 100%)", zIndex: 1 }} />

      <div className="container hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <span className="badge-dot" />
          Proudly Serving Sri Lanka Since 2011
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Sri Lanka's Premier
          <br />
          <span className="text-gradient">Security & Engineering</span>
          <br />
          <span className="hero-group-text">Group</span>
        </motion.h1>

        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Progress Group delivers world-class Security Services, Engineering Excellence,
          and premium Apparel manufacturing â€” driving quality and trust across industries since 2011.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="divisions" smooth={true} duration={700} className="btn btn-primary">
              Explore Divisions
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="contact" smooth={true} duration={700} className="btn btn-outline">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        {/* Services tickers */}
        <motion.div
          className="hero-services-row"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <motion.div className="hero-svc-pill sec" whileHover={{ y: -5, scale: 1.05 }}>
            <FiShield size={16} color="var(--sec-color)" />
            <span>Security Service</span>
          </motion.div>
          <motion.div className="hero-svc-pill eng" whileHover={{ y: -5, scale: 1.05 }}>
            <FiTool size={16} color="var(--eng-color)" />
            <span>Progress Engineering</span>
          </motion.div>
          <motion.div className="hero-svc-pill app" whileHover={{ y: -5, scale: 1.05 }}>
            <FiPackage size={16} color="var(--app-color)" />
            <span>PG Apparels</span>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          {statsData.map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-number">{s.number}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <Link to="divisions" smooth={true} duration={700}>
          <FiArrowDown size={22} />
        </Link>
      </motion.div>
    </section>
  )
}
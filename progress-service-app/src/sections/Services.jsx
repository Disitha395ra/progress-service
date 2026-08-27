import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiShield, FiZap, FiCpu, FiUsers, FiLock, FiCamera, FiAlertTriangle, FiStar } from "react-icons/fi"
import "./Services.css"

const servicesList = [
  { icon: FiUsers, title: "Corporate & Industrial Security", desc: "End-to-end integrated security solutions for corporates and industrial facilities.", color: "#00d4ff" },
  { icon: FiCamera, title: "Electronic Security Systems", desc: "Supply, installation, and management of CCTV, intrusion detection, and access control systems.", color: "#a855f7" },
  { icon: FiLock, title: "Electric Fencing", desc: "High-security electric fence installation and maintenance for perimeter protection.", color: "#f59e0b" },
  { icon: FiZap, title: "Power & A/C Solutions", desc: "MVAC/HVAC solutions including LG VRF systems for commercial and industrial applications.", color: "#10b981" },
  { icon: FiStar, title: "Functions & High Profile Security", desc: "Specialized security management for events, VIPs, and high-profile occasions.", color: "#f43f5e" },
  { icon: FiCpu, title: "Security Engineering", desc: "Advanced security engineering services combining technology and tactical expertise.", color: "#06b6d4" },
  { icon: FiShield, title: "Agro Plantations", desc: "Premium Agarwood, Sandalwood, Teak, and Mahogany cultivation and investment opportunities.", color: "#84cc16" },
  { icon: FiAlertTriangle, title: "Risk Assessment & Management", desc: "Comprehensive risk evaluation, remote video management, and inventory intelligence.", color: "#fb923c" },
]

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >{children}</motion.div>
  )
}

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>What We Offer</div>
            <h2 className="section-title">Our <span className="gradient-text">Core Services</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto 56px" }}>
              A comprehensive portfolio of security, engineering, and specialized services designed to protect, support, and grow your operations.
            </p>
          </div>
        </FadeIn>

        <div className="services-grid">
          {servicesList.map((svc, i) => (
            <FadeIn key={svc.title} delay={i * 0.07}>
              <div className="service-card glass-card" style={{ "--card-color": svc.color }}>
                <div className="svc-icon-wrap" style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}40` }}>
                  <svc.icon size={22} color={svc.color} />
                </div>
                <h3 className="svc-title">{svc.title}</h3>
                <p className="svc-desc">{svc.desc}</p>
                <div className="svc-line" style={{ background: svc.color }} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
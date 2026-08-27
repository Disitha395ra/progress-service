import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiLinkedin, FiAward } from "react-icons/fi"
import "./Team.css"

const members = [
  { name: "Major Bandara Dissanayake", role: "Managing Director / CEO", quals: "DMGT(SL) | DPBM(SL) | DMKT(SL)", bio: "Retired senior Sri Lanka Army officer (2008). International tours to Pakistan, Bangladesh, India, Malaysia, and USA.", initials: "MD" },
  { name: "Col S. Hadapangoda", role: "Director", quals: "BA", bio: "Commissioned officer with 35+ years in the Sri Lanka Army and 10+ years in the private security sector.", initials: "SH" },
  { name: "Capt. Asoka Jayasundara", role: "Manager Operations", quals: "BA", bio: "7+ years in the Sri Lanka Army, 5+ years leading private security operations and marketing.", initials: "AJ" },
  { name: "Capt. AG Ariyadasa", role: "Manager Administration & Training", quals: "USP", bio: "25 years in the Sri Lanka Army, 10 years managing administration, logistics, and training.", initials: "AA" },
  { name: "Brig. K.P.N.C. Dilip Kumara", role: "Consultant", quals: "USP (Retd.)", bio: "33+ years in the Sri Lanka Army, 5+ years as security consultant for major corporate clients.", initials: "DK" },
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

export default function Team() {
  return (
    <section className="section team-section" id="team">
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Leadership</div>
            <h2 className="section-title">Meet Our <span className="gradient-text">Expert Team</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto 56px" }}>
              Led by decorated Sri Lanka Army veterans â€” bringing decades of discipline, strategy, and integrity to every operation.
            </p>
          </div>
        </FadeIn>

        <div className="team-grid">
          {members.map((m, i) => (
            <FadeIn key={m.name} delay={i * 0.1}>
              <div className="team-card glass-card">
                <div className="team-avatar">
                  <span>{m.initials}</span>
                  <div className="avatar-ring" />
                </div>
                <div className="team-info">
                  <h4 className="team-name">{m.name}</h4>
                  <p className="team-role">{m.role}</p>
                  <div className="team-quals">
                    <FiAward size={12} />
                    <span>{m.quals}</span>
                  </div>
                  <p className="team-bio">{m.bio}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiCheckCircle, FiAward, FiTarget, FiEye } from "react-icons/fi"
import "./About.css"

const traits = [
  "Quick & Responsive Support",
  "First-Class Working Process",
  "Dedicated Professional Team",
  "Safety Guaranteed Always",
  "Highly Professional Service",
  "99% Client Satisfaction Rate",
]

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-left">
            <FadeIn>
              <div className="section-label">Who We Are</div>
              <h2 className="section-title">
                Trusted Protection &<br />
                <span className="gradient-text">Service Since 2011</span>
              </h2>
              <p className="section-subtitle">
                Established in 2011, Progress Services (Pvt) Ltd has grown into a multi-sector 
                powerhouse â€” delivering security, engineering, and apparel solutions across Sri Lanka 
                with professionalism rooted in military excellence.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="about-body">
                Founded and managed by retired senior Sri Lanka Army officers, our company 
                brings unmatched discipline, integrity, and operational excellence to every 
                engagement. We are approved by the Sri Lanka Security Board and are committed 
                to being the nation's leading total security solution provider.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="traits-grid">
                {traits.map((t) => (
                  <div className="trait-item" key={t}>
                    <FiCheckCircle size={16} color="var(--primary)" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="about-right">
            <FadeIn delay={0.1}>
              <div className="about-card glass-card vision-card">
                <div className="about-card-icon">
                  <FiEye size={22} />
                </div>
                <h4>Our Vision</h4>
                <p>To be the leading total Security solution provider in Sri Lanka â€” trusted, professional, and future-ready.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="about-card glass-card mission-card">
                <div className="about-card-icon mission">
                  <FiTarget size={22} />
                </div>
                <h4>Our Mission</h4>
                <p>To provide our customers with outstanding service by delivering quality, value, and reliability through a highly trained and dedicated team.</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="about-card glass-card award-card">
                <div className="about-card-icon award">
                  <FiAward size={22} />
                </div>
                <h4>Military Excellence</h4>
                <p>Led by retired Army Generals and Officers â€” bringing battlefield discipline to the corporate and civilian security landscape.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
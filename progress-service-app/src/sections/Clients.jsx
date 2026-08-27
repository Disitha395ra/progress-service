import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "./Clients.css"

const logos = [
  { name: "Kings Hospital", abbr: "KH", color: "#ef4444" },
  { name: "Ali Brothers", abbr: "AB", color: "#3b82f6" },
  { name: "Hameedia", abbr: "HM", color: "#f59e0b" },
  { name: "Bairaha", abbr: "BR", color: "#10b981" },
  { name: "Gills", abbr: "GL", color: "#8b5cf6" },
]

const FadeIn = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >{children}</motion.div>
  )
}

export default function Clients() {
  const allLogos = [...logos, ...logos, ...logos]

  return (
    <section className="section clients-section" id="clients">
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Our Partners</div>
            <h2 className="section-title">Trusted By <span className="gradient-text">Leading Organizations</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto 56px" }}>
              From hospitals to retail giants â€” Sri Lanka's most recognized names trust Progress Services for their security and service needs.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="marquee-container">
            <div className="marquee-fade marquee-fade-left" />
            <div className="marquee-fade marquee-fade-right" />
            <div className="marquee-track">
              {allLogos.map((l, i) => (
                <div className="logo-card glass-card" key={i}>
                  <div className="logo-abbr" style={{ background: `${l.color}20`, color: l.color, border: `1.5px solid ${l.color}40` }}>
                    {l.abbr}
                  </div>
                  <span className="logo-name">{l.name}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="testimonial-card glass-card">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              Progress Group has proven to be a highly reliable and versatile partner for our organization. Whether delivering comprehensive security solutions, executing complex engineering projects, or providing premium apparel, their dedication to absolute quality and seamless service delivery is truly exceptional.
            </p>
            <div className="quote-author">
              <div className="author-avatar">TR</div>
              <div>
                <p className="author-name">Tissa Ruberu</p>
                <p className="author-role">Manager, Operations</p>
              </div>
              <div className="star-row">
                <span>â˜…</span><span>â˜…</span><span>â˜…</span><span>â˜…</span><span>â˜…</span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
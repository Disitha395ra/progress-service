import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheck } from "react-icons/fi"
import "./Contact.css"

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

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <FadeIn>
          <div style={{ textAlign: "center" }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
            <h2 className="section-title">Contact <span className="gradient-text">Progress Services</span></h2>
            <p className="section-subtitle" style={{ margin: "0 auto 60px" }}>
              Ready to secure your premises or explore our services? Our team is available around the clock. Reach out today.
            </p>
          </div>
        </FadeIn>

        <div className="contact-grid">
          {/* Info */}
          <FadeIn delay={0.1}>
            <div className="contact-info">
              <div className="info-card glass-card">
                <div className="info-icon"><FiPhone size={20} /></div>
                <div>
                  <h5>Phone</h5>
                  <p><a href="tel:+94114237473">+94 114 237 473</a></p>
                  <p><a href="tel:+94773232525">+94 773 232 525</a></p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon mail"><FiMail size={20} /></div>
                <div>
                  <h5>Email</h5>
                  <p><a href="mailto:pgservices77@gmail.com">pgservices77@gmail.com</a></p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon loc"><FiMapPin size={20} /></div>
                <div>
                  <h5>Address</h5>
                  <p>247/A, Stanly Thilakarathne Mw, Nugegoda, Sri Lanka</p>
                </div>
              </div>
              <div className="info-card glass-card">
                <div className="info-icon time"><FiClock size={20} /></div>
                <div>
                  <h5>Working Hours</h5>
                  <p>Mon â€“ Tue: 08:00 â€“ 18:00</p>
                  <p>Wed â€“ Thu: 08:00 â€“ 17:00</p>
                  <p>Fri â€“ Sat: 08:00 â€“ 14:00</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2}>
            <form className="contact-form glass-card" onSubmit={onSubmit} id="contact-form">
              <h3 className="form-title">Send Us a Message</h3>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input id="contact-name" type="text" name="name" placeholder="Your full name" value={form.name} onChange={onChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input id="contact-email" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={onChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input id="contact-phone" type="tel" name="phone" placeholder="+94 7X XXX XXXX" value={form.phone} onChange={onChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input id="contact-subject" type="text" name="subject" placeholder="How can we help?" value={form.subject} onChange={onChange} />
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="contact-message">Message</label>
                <textarea id="contact-message" name="message" placeholder="Tell us about your security or service requirements..." rows={5} value={form.message} onChange={onChange} required />
              </div>
              <button type="submit" id="contact-submit-btn" className={`btn btn-primary submit-btn ${sent ? "sent" : ""}`}>
                {sent ? (
                  <><FiCheck size={18} /> Message Sent!</>
                ) : (
                  <><FiSend size={16} /> Send Message</>
                )}
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
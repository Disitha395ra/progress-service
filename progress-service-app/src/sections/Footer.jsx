import { FiPhone, FiMail, FiMapPin, FiShield, FiTool, FiPackage, FiArrowRight } from "react-icons/fi"
import { Link } from "react-scroll"
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="fl-icon">
                <div className="fl-ring" />
                <span>PS</span>
              </div>
              <div>
                <span className="fl-title">Progress</span>
                <span className="fl-sub">Services</span>
              </div>
            </div>
            <p className="footer-tagline">
              Sri Lanka's Premier Corporate Group â€” Delivering excellence in Security, Engineering, and Apparel Manufacturing since 2011.
            </p>
            <div className="footer-socials">
              <a href="tel:+94114237473" className="social-btn" id="footer-phone-btn"><FiPhone size={16} /></a>
              <a href="mailto:pgservices77@gmail.com" className="social-btn" id="footer-email-btn"><FiMail size={16} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              {["hero", "about", "services", "group", "team", "clients", "contact"].map((to) => (
                <li key={to}>
                  <Link to={to} smooth duration={700}>
                    {to.charAt(0).toUpperCase() + to.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Our Group</h5>
            <ul>
              <li><a href="#group"><FiShield size={13} /> Security Services</a></li>
              <li><a href="#group"><FiTool size={13} /> Progress Engineering</a></li>
              <li><a href="#group"><FiPackage size={13} /> PG Apparel</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <div className="footer-contacts">
              <p><FiPhone size={13} /> +94 114 237 473</p>
              <p><FiPhone size={13} /> +94 773 232 525</p>
              <p><FiMail size={13} /> pgservices77@gmail.com</p>
              <p><FiMapPin size={13} /> 247/A, Stanly Thilakarathne Mw, Nugegoda</p>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>Â© {new Date().getFullYear()} Progress Services (Pvt) Ltd. All Rights Reserved.</p>
          <p>247/A, Stanly Thilakarathne Mw, Nugegoda, Sri Lanka</p>
        </div>
      </div>
    </footer>
  )
}
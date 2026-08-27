import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiMenu, FiX, FiPhone, FiChevronDown } from "react-icons/fi"
import { Link } from "react-scroll"
import "./Navbar.css"

const navLinks = [
  { label: "Home", to: "hero" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { 
    label: "Our Group", 
    to: "divisions",
    dropdown: [
      { label: "Security Service", url: "/security" },
      { label: "Progress Engineering", url: "/engineering" },
      { label: "PG Apparels", url: "/apparels" }
    ]
  },
  { label: "Team", to: "team" },
  { label: "Clients", to: "clients" },
  { label: "Contact", to: "contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="nav-inner">
        <Link to="hero" smooth={true} duration={700} className="nav-logo" onClick={() => setOpen(false)}>
          <div className="logo-icon">
            <div className="logo-ring" />
            <span className="logo-letter">PS</span>
          </div>
          <div className="logo-text">
            <span className="logo-title">Progress</span>
            <span className="logo-sub">Group</span>
          </div>
        </Link>

        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.label} className={link.dropdown ? "nav-dropdown-container" : ""}
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}>
              {link.dropdown ? (
                <>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={700}
                    offset={-80}
                    className="nav-link nav-dropdown-toggle"
                  >
                    {link.label} <FiChevronDown size={14} style={{ marginLeft: 4 }} />
                  </Link>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        className="nav-dropdown"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {link.dropdown.map((dropLink) => (
                          <a key={dropLink.label} href={dropLink.url} className="nav-dropdown-item">
                            {dropLink.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={link.to}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <a href="tel:+94114237473" className="btn btn-primary nav-cta" id="nav-call-btn">
          <FiPhone size={15} />
          Call Us
        </a>

        <button className="nav-hamburger" onClick={() => setOpen(!open)} id="nav-mobile-menu-btn">
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  className="nav-mobile-link"
                  onClick={() => !link.dropdown && setOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="nav-mobile-dropdown">
                    {link.dropdown.map((dropLink) => (
                      <a key={dropLink.label} href={dropLink.url} className="nav-mobile-dropdown-item">
                        â€” {dropLink.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="tel:+94114237473" className="btn btn-primary" style={{ marginTop: 8 }}>
              <FiPhone size={14} /> +94 114 237 473
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FiShield, FiTool, FiPackage, FiArrowRight } from "react-icons/fi"
import "./Divisions.css"

const divisions = [
  {
    id: "security",
    title: "Security Service",
    subtitle: "Protecting what matters most.",
    icon: FiShield,
    colorClass: "division-sec",
    desc: "Our highly trained security personnel and advanced surveillance systems provide comprehensive protection for corporate, industrial, and residential sectors. We ensure a secure environment 24/7.",
    features: ["Manned Guarding", "Electronic Security", "Risk Assessment", "Event Security"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6TEKh45RWs9QQgqLxF3qj09QfrhVabCQV10a9sWKDdg&s=10",
  },
  {
    id: "engineering",
    title: "Progress Engineering",
    subtitle: "Building the future, today.",
    icon: FiTool,
    colorClass: "division-eng",
    desc: "From complex civil construction to precise mechanical and electrical installations, our engineering division delivers projects on time and to the highest industry standards.",
    features: ["Civil Construction", "MEP Services", "Project Management", "Maintenance"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "apparel",
    title: "PG Apparels",
    subtitle: "Quality in every thread.",
    icon: FiPackage,
    colorClass: "division-app",
    desc: "We manufacture premium quality clothing with a focus on sustainable practices, precision tailoring, and innovative design for local and international markets.",
    features: ["Custom Manufacturing", "Uniforms", "Sustainable Sourcing", "Quality Control"],
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
]

export default function Divisions() {
  const [activeTab, setActiveTab] = useState(divisions[0].id)

  const activeDivision = divisions.find((d) => d.id === activeTab)

  return (
    <section className="section divisions-section" id="divisions">
      <div className="container">
        <div className="text-center">
          <span className="section-label">Our Core Divisions</span>
          <h2 className="section-title">The Progress Group</h2>
          <p className="section-subtitle mx-auto">
            Discover the three pillars of excellence that make up the Progress Group. 
            We provide specialized solutions across multiple industries.
          </p>
        </div>

        <div className="divisions-container">
          {/* Tabs */}
          <div className="divisions-tabs">
            {divisions.map((div) => {
              const isActive = activeTab === div.id
              const Icon = div.icon
              return (
                <button
                  key={div.id}
                  className={`division-tab ${isActive ? "active" : ""} ${div.colorClass}`}
                  onClick={() => setActiveTab(div.id)}
                >
                  <Icon size={24} className="tab-icon" />
                  <div className="tab-text">
                    <span className="tab-title">{div.title}</span>
                    <span className="tab-subtitle">{div.subtitle}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          <div className="division-content-area card">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDivision.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="division-content-grid"
              >
                <div className="division-info">
                  <div className={`division-badge ${activeDivision.colorClass}`}>
                    <activeDivision.icon size={16} />
                    {activeDivision.title}
                  </div>
                  <h3 className="division-heading">{activeDivision.subtitle}</h3>
                  <p className="division-desc">{activeDivision.desc}</p>
                  
                  <ul className="division-features">
                    {activeDivision.features.map((f, i) => (
                      <li key={i}>
                        <div className="feature-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button className="btn btn-outline" style={{ marginTop: "24px" }}>
                    Learn More <FiArrowRight />
                  </button>
                </div>
                
                <div className="division-image-wrapper">
                  <img src={activeDivision.image} alt={activeDivision.title} className="division-image" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import Divisions from "./sections/Divisions"
import About from "./sections/About"
import Services from "./sections/Services"
import Team from "./sections/Team"
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divisions />
        <About />
        <Services />
        <Team />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
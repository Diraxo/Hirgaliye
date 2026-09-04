import Nav from './components/Nav'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import Process from './components/Process'
import SystemInspector from './components/SystemInspector'
import Story from './components/Story'
import Guarantees from './components/Guarantees'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <div className="bg-ink min-h-screen">
      <Nav />
      <Hero />
      <Showcase />
      <Services />
      <Process />
      <SystemInspector />
      <Story />
      <Guarantees />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

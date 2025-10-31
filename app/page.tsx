"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Eye, Shield, Zap, Users, Mail, Phone, MapPin, Menu, X } from "lucide-react"
import { useState } from "react"

export default function GlaucoNovaLabs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 glass-light border-b border-gray-200/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-bold text-xl gradient-text"
            >
              {/* GlaucoNova Labs */}
              <img src="/logo.png" alt="GlaucoNova Labs Logo" className="h-8 w-auto" />
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("science-behind")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Research
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </button>
              <a
                href="https://calendly.com/sohamchakraborty03/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
              >
                Request Demo
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden py-4 border-t border-gray-200/50"
            >
              <div className="flex flex-col space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-left text-gray-700 hover:text-primary transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-left text-gray-700 hover:text-primary transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("technology")}
                  className="text-left text-gray-700 hover:text-primary transition-colors"
                >
                  Technology
                </button>
                <button
                  onClick={() => scrollToSection("science-behind")}
                  className="text-left text-gray-700 hover:text-primary transition-colors"
                >
                  Research
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-left text-gray-700 hover:text-primary transition-colors"
                >
                  Contact
                </button>
                <Button
                  size="sm"
                  className="w-fit bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                >
                  Request Demo
                </Button>
              </div>
            </motion.nav>
          )}
        </div>
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white pt-16">
        {/* Subtle floating elements for visual interest */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-32 right-20 w-24 h-24 bg-linear-to-r from-cyan-100 to-blue-100 rounded-full blur-xl opacity-60"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-32 left-20 w-32 h-32 bg-linear-to-r from-purple-100 to-pink-100 rounded-full blur-xl opacity-60"
        />

        <div className="relative z-10 container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-5xl md:text-7xl font-black mb-6 text-balance"
              >
                <span className="gradient-text">GlaucoNova Labs</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-600 mb-8 text-pretty"
              >
                Smart Eyewear Revolutionizing Glaucoma Management
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <a
                  href="https://calendly.com/sohamchakraborty03/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-lg h-12 px-8 py-6 bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg shadow-cyan-500/25 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  Request a Demo
                </a>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent"
                  onClick={() => scrollToSection("about")}
                >
                  Learn More
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent"
                  onClick={() => scrollToSection("technology")}
                >
                  Watch Demo Video
                </Button>
              </motion.div>

              {/* Metrics Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">92%</div>
                  <div className="text-sm text-gray-500">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">24/7</div>
                  <div className="text-sm text-gray-500">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold gradient-text">$200</div>
                  <div className="text-sm text-gray-500">Cost</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Simple illustration or content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative"
            >
              <div className="glass-light p-12 rounded-3xl shadow-xl">
                <div className="text-center">
                  {/* Removed max-w-sm to ensure it scales correctly on all mobile widths */}
                  <div className="w-full h-64 mx-auto mb-6 flex items-center justify-center overflow-hidden rounded-xl md:w-96">
                    <img src="/prototypes/3d-model.png" alt="GlaucoNova Labs Logo" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Revolutionary Eye Care</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ultrasound-Infused eyeglasses for monitoring eye pressure in glaucoma patients continuously at low costs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* The Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-center">
              <span className="gradient-text">The Problem</span>
            </h2>

            {/* Problem Framing: Text left, Image right */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-xl text-gray-800 mb-4">Problem Framing:</h4>
                <p className="text-gray-600 leading-relaxed">
                  Glaucoma affects <strong>80 million individuals</strong> worldwide with a global economic burden of <strong>$411 billion</strong>. The foremost <strong>biomarker</strong> is elevated intraocular pressure (IOP), the buildup of aqueous humor damaging <strong>optic nerves</strong>. Causes underlying this <strong>phenomenon are unknown</strong>, there exists no cure, and it typically lacks warning symptoms, leading to gradual and "silent" vision loss.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center p-4"
              >
                <img
                  src="/science/iop.png"
                  alt="Problem Framing Illustration"
                  className="w-40 h-auto object-contain md:w-64"
                />
              </motion.div>
            </div>

            {/* Current Treatments: Image left, Text right */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex justify-center p-4"
              >
                <img
                  src="/science/current-treatments.png"
                  alt="Current Treatments Illustration"
                  className="w-40 h-auto object-contain md:w-64"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-xl text-gray-800 mb-4">Current Treatments:</h4>
                <p className="text-gray-600 leading-relaxed">
                  Eyedrops are a pervasive treatment to reduce IOP, but their effectiveness is limited by the <strong>inability to predict when patients will experience IOP spikes</strong>, which can spike 110% beyond normal levels in a matter of seconds at any time of day <strong>without one's awareness</strong>. This is why <strong>20% of patients become completely blind</strong> in at least one eye in 15 years of follow-up.
                </p>
              </motion.div>
            </div>

            {/* The Need for Frequent Monitoring: Full width text */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h4 className="font-bold text-xl text-gray-800 mb-4">The Need for Frequent Monitoring:</h4>
              <p className="text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Despite the need for frequent monitoring, current tonometers are invasive (direct contact with the cornea), non-portable (only found in clinics), and expensive (priced above $1240). They provide a limited snapshot of IOP fluctuations and lead to prescribing ineffective and non-personalized treatment.
              </p>
            </motion.div>
          </motion.div>

          {/* Who Are We? Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="gradient-text">Who Are We?</span>
            </h2>
  
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Team</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Soham Chakraborty",
                  role: "Co-Founder/CEO",
                  bio: "Berkeley Bioengineering & Haas School of Business. Product Design, Growth Strategy & Clinical Testing.",
                  image: "/team-photos/soham.jpg",
                },
                {
                  name: "Neil Goradia",
                  role: "Co-Founder/CTO",
                  bio: "Berkeley Electrical Engineering & Computer Science. Hardware prototyping, PCB Design, IoT & CAD modelling.",
                  image: "/team-photos/neil.jpg",
                },
                {
                  name: "Dr. John Flanagan",
                  role: "Senior R&D Advisor",
                  bio: "Ex-Dean of Berkeley's College of Optometry. Human testing, IRB, Lab Space & Growth.",
                  image: "/team-photos/john.jpg",
                },
                {
                  name: "George Tanaka",
                  role: "M.D. Strategic Advisor",
                  bio: "Glaucoma Specialist & Refractive Cataract Surgeon. Clinical Validation, Sourcing Patient Testimonials & Growth.",
                  image: "/team-photos/george.jpg",
                },
                {
                  name: "Dan Kim",
                  role: "Legal Advisor",
                  bio: "Partner Orrick, Herrington & Sutcliffe LLP. IP Acquisition & Entity Incorporation.",
                  image: "/team-photos/dan.jpg",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-light floating-card text-center shadow-lg">
                    <CardContent className="p-8 flex flex-col items-center">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-gray-200"
                      />
                      <h4 className="font-bold text-lg text-gray-800 mb-1">{member.name}</h4>
                      <p className="gradient-text font-medium mb-3">{member.role}</p>
                      <p className="text-sm text-gray-600 leading-relaxed grow">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="technology" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              <span className="gradient-text">Our Technology</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left side - Text and Image */}
              <div className="space-y-6">
                <p className="text-lg text-gray-600 text-pretty leading-relaxed">
                  Our innovation, GlaucoSolve Glasses is a non-invasive, wearable, cost-effective, and remote monitoring solution that uses ultrasound transducers, receivers, and Arduino modules to monitor IOP. By applying acoustic force to the cornea and analyzing the reflected signal, we can compute various ultrasound parameters and correlate them to get the patient's eye pressure. Realtime data will be sent to a mobile app allowing physicians to monitor long-term glaucoma progression remotely and alerting patients on when they should apply eye drops, mitigating optic nerve damage. Moreover, we plan to develop a model with collected data, offering AI insights into glaucoma diagnosis. By learning nuanced IOP patterns in patients with all stages of glaucoma, it allows our model to help ophthalmologists spot signs of glaucoma and predict patients' future IOP trajectory to evaluate the effectiveness of treatments just days after prescription.
                </p>
                <div className="flex justify-center">
                  <img
                    src="/science/glasses-flowchart.png"
                    alt="GlaucoSolve Glasses Flowchart"
                    className="rounded-xl shadow-lg max-w-full"
                  />
                </div>
              </div>
              
              {/* Right side - YouTube Video */}
              <div className="flex items-center justify-center">
                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.youtube.com/embed/7c8ft358wTA"
                    title="GlaucoNova Labs Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Prototype Images */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Prototypes</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-4">
                  <img
                    src="/prototypes/3d-model.png"
                    alt="3D Prototype Model"
                    className="rounded-lg w-full mb-3 max-h-40 object-contain"
                  />
                  <h4 className="font-bold text-sm text-gray-800 text-center">3D Prototype Model</h4>
                </CardContent>
              </Card>
              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-4">
                  <img
                    src="/prototypes/physical-prototype.png"
                    alt="Physical Prototype"
                    className="rounded-lg w-full mb-3 max-h-40 object-contain"
                  />
                  <h4 className="font-bold text-sm text-gray-800 text-center">Physical Prototype</h4>
                </CardContent>
              </Card>
              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-4">
                  <img
                    src="/prototypes/v2.png"
                    alt="V2 Prototype"
                    className="rounded-lg w-full mb-3 max-h-40 object-contain"
                  />
                  <h4 className="font-bold text-sm text-gray-800 text-center">V2 Prototype</h4>
                </CardContent>
              </Card>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6 max-w-5xl mx-auto">
              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-4">
                  <img
                    src="/prototypes/technology-schematic.png"
                    alt="Technology Schematic"
                    className="rounded-lg w-full mb-3 max-h-40 object-contain"
                  />
                  <h4 className="font-bold text-sm text-gray-800 text-center">Technology Schematic</h4>
                </CardContent>
              </Card>
              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-4">
                  <img
                    src="/prototypes/mobile-app.png"
                    alt="Mobile App"
                    className="rounded-lg w-full mb-3 max-h-40 object-contain"
                  />
                  <h4 className="font-bold text-sm text-gray-800 text-center">Mobile App Interface</h4>
                </CardContent>
              </Card>
              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-4">
                  <img
                    src="/prototypes/v2-demo.png"
                    alt="V2 Demo"
                    className="rounded-lg w-full mb-3 max-h-40 object-contain"
                  />
                  <h4 className="font-bold text-sm text-gray-800 text-center">V2 Demo</h4>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Unique Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Unique Value</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto text-pretty leading-relaxed mb-8">
              So what separates GlaucoSolve from the rest of the IOP monitors? We hold the first wearable technology design capable of continuous IOP monitoring, with a significantly cheaper price point and remote physician monitoring feature. As you can see in the comparison table below, our product outshines each alternative IOP monitor in multiple key factors and is over five times cheaper than the current cheapest option.
            </p>
            <div className="flex justify-center">
              <img
                src="/comparison/comparison-table.png"
                alt="Comparison Table"
                className="rounded-xl shadow-lg max-w-4xl w-full"
              />
            </div>
          </motion.div>

          {/* Science Behind Technology */}
          <motion.div
            id="science-behind"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">The Science Behind GlaucoGlasses</h3>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src="/science/figure1.png"
                  alt="Figure 1: Scientific concept of our technology"
                  className="rounded-xl shadow-lg w-full mb-6"
                />
              </div>
              <div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Widely used in elasticity imaging, acoustic radiation force from ultrasound waves induces physical deformation in tissues- elucidating data about the elasticity of the tissue. Applying a known magnitude of acoustic force to the cornea of the eye will similarly enable the measurement of corneal deformation, as shown in Figure 1, offering insights into elasticity, which is known to be correlated to IOP (Lee et al., 2021).
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Four variables will be experimentally extracted from the reflected ultrasound signal, which will correlate to IOP. These four parameters are corneal deformation, flight time, amplitude, and acoustic impedance.
                </p>
              </div>
            </div>
            
            <div className="mt-12 space-y-8">
              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-4">Corneal Deformation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    The proposed technique to enable the calculation of the final corneal deformation (δ), which is the amount the cornea displaces from its initial position as a result of acoustic radiation force, is the fact that it is the absolute difference between the deformation due to acoustic radiation force and deformation due to IOP. For the average human eye, δ = 38999.76ARFPIOPT - 1116.06, where ARFP is the pressure from acoustic radiation force & IOPT is the true IOP in Pascals (Lee et al., 2021). Thus, corneal deformation should be inversely proportional to IOP, such that higher IOP is correlated with lower corneal deformation, and vice-versa.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-4">Time of Flight</h4>
                  <p className="text-gray-600 leading-relaxed">
                    The reflected ultrasound beam from the cornea has two paths: one under normal conditions (black beam in Figure 1) and another during corneal deformation (red beam in Figure 1). Due to the longer distance traveled by the red ultrasound beam, it is expected that the time of flight will be higher during corneal deformation- inversely correlating to IOP (Zhang et al., 2017).
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-4">Amplitude</h4>
                  <p className="text-gray-600 leading-relaxed">
                    When ultrasonic waves traverse through the air, energy losses, known as attenuation, occur due to scattering, absorption, and density differences at material interfaces. Greater corneal deformation results in longer wave travel, increased acoustic force loss to air, and diminished amplitude, which is the maximum magnitude of received signals, which is expected to be proportional to IOP (Zhang et al., 2017).
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-bold text-lg text-gray-800 mb-4">Acoustic Impedance</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Acoustic Impedance is the resistance against ultrasound wave propagation through tissue, which results from the density of tissue and increases with higher IOP. It is calculated using the equation A1A0 = Z1 - Z0Z1 + Z0, where A0 = a known constant amplitude of signal emitted, A0 = amplitude of signal received, Z0 = acoustic impedance of aqueous humor inside the eye ≈ 1.48 MPa, and Z1 = acoustic impedance of the cornea (Zhang et al., 2017).
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Experimental Results */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Experimental Results</h3>
            
            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Experimental Setup</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                After engineering an Arduino-based prototype, experimentation was conducted using the apparatus shown in the image on the right. Since models of the human eye are expensive, the prototype was tested on gelatin phantoms made of gelatin powder and water- an accurate model of biological tissues often used for ultrasound imaging studies. Seven gelatin phantoms, each containing 70 mL of water, with varying gelatin concentrations (10%, 15%, 20%, 25%, 30%, 35%, and 40%) were created to simulate different IOP values of the eye and the ultrasound time of flight and amplitude were extracted for each model. They were then statistically correlated using a linear regression model to the true IOP, which was measured using the iCARE IC100 tonometer, pervasively used in clinics. The results were splendid, yielding a 92% accuracy of IOP correlation with a mean absolute error of solely 5 mmHg. The research paper preprint documenting experimental results is ready to be submitted to Frontiers publication, and the design patent is in the second stage of filing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8 items-start">
              <div className="space-y-4">
                <div className="flex justify-center">
                  <img
                    src="/experimental/experimental-setup.png"
                    alt="Experimental Setup"
                    className="rounded-xl shadow-lg w-64 h-auto object-contain md:w-80"
                  />
                </div>
                <Card className="glass-light floating-card shadow-lg">
                  <CardContent className="p-4">
                    <img
                      src="/experimental/figure4.png"
                      alt="Figure 4: Correlation between time of ultrasound flight in air and true IOP"
                      className="rounded-lg w-full mb-2 max-h-40 object-contain"
                    />
                    <p className="text-xs text-gray-600">
                      <strong>Figure 4:</strong> Correlation between time of ultrasound flight in air and true IOP. The time of flight is inversely proportional to IOP, with an 82.2% correlation.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-4">
                <Card className="glass-light floating-card shadow-lg">
                  <CardContent className="p-4">
                    <img
                      src="/experimental/figure2.png"
                      alt="Figure 2: Correlation between corneal displacement and true IOP"
                      className="rounded-lg w-full mb-2 max-h-40 object-contain"
                    />
                    <p className="text-xs text-gray-600">
                      <strong>Figure 2:</strong> Correlation between corneal displacement and true IOP. Deformation under ultrasound is inversely proportional to IOP with 75.36% correlation.
                    </p>
                  </CardContent>
                </Card>
                <Card className="glass-light floating-card shadow-lg">
                  <CardContent className="p-4">
                    <img
                      src="/experimental/figure3.png"
                      alt="Figure 3: Correlation between ultrasound amplitude and true IOP"
                      className="rounded-lg w-full mb-2 max-h-40 object-contain"
                    />
                    <p className="text-xs text-gray-600">
                      <strong>Figure 3:</strong> Correlation between ultrasound amplitude and true IOP. Amplitude, the maximum ultrasound signal reflected, is proportional to IOP with 92.06% correlation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Testimonies</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-6">
                  <blockquote className="text-gray-600 italic leading-relaxed mb-4">
                    "This product would be very beneficial and useable from the comfort of one's home, reduce the need of going to an eye doctor in person."
                  </blockquote>
                  <p className="font-bold text-gray-800">Dr. Sewa Ram Singal</p>
                  <p className="text-sm text-gray-500">General physician at Humber River Hospital and Trillium Health Partners Credit Valley Hospital</p>
                </CardContent>
              </Card>
              <Card className="glass-light floating-card shadow-lg">
                <CardContent className="p-6">
                  <blockquote className="text-gray-600 italic leading-relaxed mb-4">
                    "It is a great thinking in this direction as glaucoma is actually a blinding disease."
                  </blockquote>
                  <p className="font-bold text-gray-800">Dr. Shaffie Baidwal Gupta</p>
                  <p className="text-sm text-gray-500">Ophthalmologist at Fortis Hospital</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          
        </div>
      </section>

      

      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="gradient-text">Contact Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
              Ready to revolutionize your eye health? Get in touch with our team to learn more about GlaucoNova Labs and
              our innovative technology.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="glass-light p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">sohamchakraborty03@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass-light p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">+1 (510) 320-6984</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass-light p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Address</p>
                    <p className="text-gray-600">
                      123 Innovation Drive
                      <br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-light shadow-xl floating-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Send us a message</h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <Input
                          className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input
                          type="email"
                          className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea
                        className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 min-h-[120px]"
                        placeholder="Tell us about your interest in GlaucoNova Labs..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg shadow-cyan-500/25"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2024 GlaucoNova Labs. All rights reserved. Revolutionizing eye health through innovation.
          </p>
        </div>
      </footer>
    </div>
  )
}

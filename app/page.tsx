"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Eye, Shield, Zap, Users, Mail, Phone, MapPin, Menu, X, Linkedin, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Glasses3DViewer from "../components/Glasses3DViewer"

function Counter({ target, duration = 2000, prefix = "", suffix = "", className = "", style }: { target: number; duration?: number; prefix?: string; suffix?: string; className?: string; style?: React.CSSProperties }) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAnimation = () => {
    const startTime = Date.now()
    const startValue = 0
    const endValue = target

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const current = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      
      setCount(current)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(endValue)
        // After animation completes, wait 5 seconds then restart
        if (intervalRef.current) {
          clearTimeout(intervalRef.current)
        }
        intervalRef.current = setTimeout(() => {
          setCount(0)
          startAnimation()
        }, 5000)
      }
    }
    
    requestAnimationFrame(animate)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        // Require element to be at least 70% visible and in viewport
        if (entry.isIntersecting && entry.intersectionRatio >= 0.7 && !hasStarted) {
          // Small delay to ensure element is fully rendered
          setTimeout(() => {
            setHasStarted(true)
            startAnimation()
          }, 100)
        }
      },
      { threshold: [0, 0.5, 0.7, 1], rootMargin: '0px 0px -100px 0px' }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
      if (intervalRef.current) {
        clearTimeout(intervalRef.current)
      }
    }
  }, [target, duration, hasStarted])

  return (
    <div ref={ref} className={className} style={style}>
      {prefix}{count}{suffix}
    </div>
  )
}

export default function GlaucoNovaLabs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [testimonialPage, setTestimonialPage] = useState(0)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  // Match video height to text box height
  useEffect(() => {
    const matchHeights = () => {
      const textBox = document.getElementById('text-box')
      const videoContainer = document.getElementById('video-container')
      if (textBox && videoContainer) {
        videoContainer.style.height = `${textBox.offsetHeight}px`
      }
    }
    
    matchHeights()
    window.addEventListener('resize', matchHeights)
    return () => window.removeEventListener('resize', matchHeights)
  }, [])

  // Align experiment image with bottom of figure 1
  useEffect(() => {
    const alignImages = () => {
      const figure1 = document.getElementById('figure1-img')
      const experimentImg = document.getElementById('experiment-img')
      if (figure1 && experimentImg) {
        const figure1Bottom = figure1.offsetTop + figure1.offsetHeight
        const experimentTop = experimentImg.offsetTop
        const offset = figure1Bottom - experimentTop
        if (offset > 0) {
          experimentImg.style.marginTop = `${offset}px`
        }
      }
    }
    
    // Wait for images to load
    const timer = setTimeout(alignImages, 100)
    window.addEventListener('resize', alignImages)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', alignImages)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
      <header className="fixed top-0 left-0 right-0 z-50 glass-light border-b border-gray-200/50">
        <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12" style={{ maxWidth: '1920px', width: '100%' }}>
          <div className="flex items-center justify-between" style={{ height: 'calc(4rem + 1cm)' }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <img src="/logo.png" alt="GlaucoNova Labs Logo" className="h-16 w-auto" />
              <span 
                className="font-bold text-[40px] leading-[1.2] tracking-[-0.02em]"
                style={{ 
                  fontFamily: "'Canva Sans', 'Inter', sans-serif",
                  background: "linear-gradient(to right, #006c73, #4DB6AC, #006c73)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}
              >
                GlaucoNova Labs
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2 flex-wrap">
              <button
                onClick={() => scrollToSection("hero")}
                className="px-2 sm:px-3 text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold leading-[1.5] max-w-[90%] sm:max-w-[600px] md:max-w-[700px] normal-case transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  color: "#14959b",
                  fontFamily: "'Canva Sans', 'Inter', sans-serif",
                }}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="px-2 sm:px-3 text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold leading-[1.5] max-w-[90%] sm:max-w-[600px] md:max-w-[700px] normal-case transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  color: "#14959b",
                  fontFamily: "'Canva Sans', 'Inter', sans-serif",
                }}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="px-2 sm:px-3 text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold leading-[1.5] max-w-[90%] sm:max-w-[600px] md:max-w-[700px] normal-case transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  color: "#14959b",
                  fontFamily: "'Canva Sans', 'Inter', sans-serif",
                }}
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="px-2 sm:px-3 text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold leading-[1.5] max-w-[90%] sm:max-w-[600px] md:max-w-[700px] normal-case transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  color: "#14959b",
                  fontFamily: "'Canva Sans', 'Inter', sans-serif",
                }}
              >
                Technology
              </button>
              <button
                onClick={() => scrollToSection("science-behind")}
                className="px-2 sm:px-3 text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold leading-[1.5] max-w-[90%] sm:max-w-[600px] md:max-w-[700px] normal-case transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  color: "#14959b",
                  fontFamily: "'Canva Sans', 'Inter', sans-serif",
                }}
              >
                R&D
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-2 sm:px-3 text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold leading-[1.5] max-w-[90%] sm:max-w-[600px] md:max-w-[700px] normal-case transition-colors cursor-pointer bg-transparent border-none"
                style={{
                  color: "#14959b",
                  fontFamily: "'Canva Sans', 'Inter', sans-serif",
                }}
              >
                Contact
              </button>
              <Button
                onClick={() => window.open("https://calendly.com/sohamchakraborty03/30min", "_blank")}
                className="ml-4 px-1.5 sm:px-2 md:px-2.5 py-[0.6rem] sm:py-[0.75rem] md:py-[0.9rem] text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold text-white border-[1.5px] rounded-[30px] normal-case transition-colors"
                style={{
                  background: "linear-gradient(to right, #006c73, #4DB6AC)",
                  borderColor: "#4DB6AC",
                  fontFamily: "'Aileron', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "linear-gradient(to right, #005a61, #26A69A)"
                  e.currentTarget.style.borderColor = "#26A69A"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "linear-gradient(to right, #006c73, #4DB6AC)"
                  e.currentTarget.style.borderColor = "#4DB6AC"
                }}
              >
                Request Demo
              </Button>
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

      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white pt-16 overflow-x-hidden">
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
          className="absolute top-32 right-4 sm:right-8 md:right-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-linear-to-r from-cyan-100 to-blue-100 rounded-full blur-xl opacity-60"
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
          className="absolute bottom-32 left-4 sm:left-8 md:left-20 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-linear-to-r from-purple-100 to-pink-100 rounded-full blur-xl opacity-60"
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12" style={{ maxWidth: '1920px', width: '100%', marginTop: '-1cm' }}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              className="w-full"
            >
              <div className="flex flex-col items-start">
                <motion.h1
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="mb-2 sm:mb-3 font-bold leading-[1.2] tracking-[-0.02em] whitespace-nowrap flex items-center"
                  style={{
                    color: "#163b42",
                    fontFamily: "'Canva Sans', 'Inter', sans-serif",
                    fontSize: "clamp(30px, 6vw, 82.5px)",
                  }}
                >
                  GlaucoN
                  <img 
                    src="/logo.png" 
                    alt="GlaucoNova Labs Logo" 
                    className="inline-block align-middle"
                    style={{
                      height: "0.8em",
                      width: "auto",
                      verticalAlign: "middle",
                      display: "inline-block",
                      marginLeft: "-0.1em",
                      marginRight: "-0.1em",
                    }}
                  />
                  va Labs
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="mb-4 sm:mb-5 md:mb-6 font-bold leading-[1.1]"
                  style={{
                    color: "#14959b",
                    fontFamily: "'Canva Sans', 'Inter', sans-serif",
                    fontSize: "clamp(12px, 2vw, 28px)",
                  }}
                >
                  <span style={{ whiteSpace: 'nowrap' }}>Ultrasound-Integrated Smart Glasses Revolutionizing</span><br />Eyecare at Low-Costs
                </motion.p>

              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-12"
                style={{ marginTop: '1cm' }}
              >
                <Button
                  onClick={() => window.open("https://calendly.com/sohamchakraborty03/30min", "_blank")}
                  className="px-4 sm:px-5 md:px-6 py-[1.2rem] sm:py-[1.3rem] md:py-[1.4rem] text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold text-white border-[1.5px] rounded-lg normal-case transition-colors"
                  style={{
                    background: "linear-gradient(to right, #006c73, #4DB6AC)",
                    borderColor: "#4DB6AC",
                    fontFamily: "'Aileron', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(to right, #005a61, #26A69A)"
                    e.currentTarget.style.borderColor = "#26A69A"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(to right, #006c73, #4DB6AC)"
                    e.currentTarget.style.borderColor = "#4DB6AC"
                  }}
                >
                  Request a Demo
                </Button>
                <Button
                  onClick={() => scrollToSection("about")}
                  className="px-4 sm:px-5 md:px-6 py-[1.2rem] sm:py-[1.3rem] md:py-[1.4rem] text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold text-white border-[1.5px] rounded-lg normal-case transition-colors"
                  style={{
                    background: "linear-gradient(to right, #006c73, #4DB6AC)",
                    borderColor: "#4DB6AC",
                    fontFamily: "'Aileron', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(to right, #005a61, #26A69A)"
                    e.currentTarget.style.borderColor = "#26A69A"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(to right, #006c73, #4DB6AC)"
                    e.currentTarget.style.borderColor = "#4DB6AC"
                  }}
                >
                  Learn More
                </Button>
                <Button
                  onClick={() => scrollToSection("technology")}
                  className="px-4 sm:px-5 md:px-6 py-[1.2rem] sm:py-[1.3rem] md:py-[1.4rem] text-[14px] sm:text-[17px] md:text-[19px] lg:text-[20px] font-bold text-white border-[1.5px] rounded-lg normal-case transition-colors"
                  style={{
                    background: "linear-gradient(to right, #006c73, #4DB6AC)",
                    borderColor: "#4DB6AC",
                    fontFamily: "'Aileron', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(to right, #005a61, #26A69A)"
                    e.currentTarget.style.borderColor = "#26A69A"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(to right, #006c73, #4DB6AC)"
                    e.currentTarget.style.borderColor = "#4DB6AC"
                  }}
                >
                  Watch Demo Video
                </Button>
              </motion.div>

              {/* Metrics Row */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="grid grid-cols-3 md:grid-cols-5 gap-6"
              >
                <div className="text-center">
                  <Counter target={92} duration={2000} suffix="%" className="text-2xl md:text-3xl font-bold" style={{ color: "#4DB6AC" }} />
                  <div className="text-sm font-bold" style={{ color: "#006c73" }}>Accuracy</div>
                </div>
                <div className="text-center">
                  <Counter target={24} duration={2000} suffix="/7" className="text-2xl md:text-3xl font-bold" style={{ color: "#4DB6AC" }} />
                  <div className="text-sm font-bold" style={{ color: "#006c73" }}>Monitoring</div>
                </div>
                <div className="text-center">
                  <Counter target={299} duration={2000} prefix="$" className="text-2xl md:text-3xl font-bold" style={{ color: "#4DB6AC" }} />
                  <div className="text-sm font-bold" style={{ color: "#006c73" }}>Cost</div>
                </div>
                <div className="text-center">
                  <Counter target={31} duration={2000} suffix="+" className="text-2xl md:text-3xl font-bold" style={{ color: "#4DB6AC" }} />
                  <div className="text-sm font-bold" style={{ color: "#006c73" }}>Clinical Partners</div>
                </div>
                <div className="text-center">
                  <Counter target={168} duration={2000} prefix="$" suffix="K+" className="text-2xl md:text-3xl font-bold" style={{ color: "#4DB6AC" }} />
                  <div className="text-sm font-bold" style={{ color: "#006c73" }}>Customer Intent</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - 3D Model Viewer */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="relative w-full mt-8 md:mt-12"
              style={{ marginTop: 'calc(2rem + 1cm)' }}
            >
              {/* 3D Interactive Model Viewer */}
              <div className="relative w-full h-[600px] md:h-[700px] mb-1">
                <Glasses3DViewer className="w-full h-full" />
              </div>
            </motion.div>
          </div>

          {/* Partner Logos Scrolling Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="w-full overflow-hidden"
            style={{ marginTop: '-3.5cm' }}
          >
            <div className="relative">
              <div className="flex animate-scroll gap-8">
                {/* First set of logos */}
                {[
                  "/team-photos/berkeley_school_optometry.jpg",
                  "/team-photos/duke.png",
                  "/team-photos/e@b.png",
                  "/team-photos/free_ventures.png",
                  "/team-photos/haas.png",
                  "/team-photos/lasik_vision.png",
                  "/team-photos/orrick.jpg",
                  "/team-photos/rho_logo.jpg",
                  "/team-photos/target.png",
                  "/team-photos/umich.png",
                  "/team-photos/warby_parker.png",
                ].map((logo, index) => (
                  <div
                    key={`logo-${index}`}
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: "150px", height: "80px" }}
                  >
                    <img
                      src={logo}
                      alt={`Partner logo ${index + 1}`}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {[
                  "/team-photos/berkeley_school_optometry.jpg",
                  "/team-photos/duke.png",
                  "/team-photos/e@b.png",
                  "/team-photos/free_ventures.png",
                  "/team-photos/haas.png",
                  "/team-photos/lasik_vision.png",
                  "/team-photos/orrick.jpg",
                  "/team-photos/rho_logo.jpg",
                  "/team-photos/target.png",
                  "/team-photos/umich.png",
                  "/team-photos/warby_parker.png",
                ].map((logo, index) => (
                  <div
                    key={`logo-dup-${index}`}
                    className="flex-shrink-0 flex items-center justify-center"
                    style={{ width: "150px", height: "80px" }}
                  >
                    <img
                      src={logo}
                      alt={`Partner logo ${index + 1}`}
                      className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16"
          >
            <div className="relative max-w-6xl mx-auto">
              {/* Left Arrow - Only show when on second page */}
              {testimonialPage === 1 && (
                <button
                  onClick={() => setTestimonialPage(0)}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                  style={{ border: "2px solid #006c73" }}
                >
                  <ChevronLeft className="w-6 h-6" style={{ color: "#006c73" }} />
                </button>
              )}
              
              {/* Testimonials Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {testimonialPage === 0 ? (
                  // First batch: flanny, devin, kimberly
                  <>
                    <div className="flex items-center justify-center">
                      <img
                        src="/team-photos/comment_flanny.png"
                        alt="Flanny Testimonial"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src="/team-photos/comment_devin.png"
                        alt="Devin Testimonial"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src="/team-photos/comment_kimberly.png"
                        alt="Kimberly Testimonial"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                      />
                    </div>
                  </>
                ) : (
                  // Second batch: albert, nathan, tanaka
                  <>
                    <div className="flex items-center justify-center">
                      <img
                        src="/team-photos/comment_albert.png"
                        alt="Albert Testimonial"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src="/team-photos/comment_nathan.png"
                        alt="Nathan Testimonial"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                      <img
                        src="/team-photos/comment_tanaka.png"
                        alt="Tanaka Testimonial"
                        className="w-full max-w-sm rounded-lg shadow-lg"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Right Arrow - Only show when on first page */}
              {testimonialPage === 0 && (
                <button
                  onClick={() => setTestimonialPage(1)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
                  style={{ border: "2px solid #006c73" }}
                >
                  <ChevronRight className="w-6 h-6" style={{ color: "#006c73" }} />
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>




      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

          {/* The Problem Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
              style={{
                background: "linear-gradient(to right, #006c73, #4DB6AC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.2,
                fontFamily: "'Canva Sans', 'Inter', sans-serif",
                letterSpacing: "-0.02em"
              }}
            >
              The Problem
            </h2>

            {/* Problem Framing: Text left, Image right */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-xl mb-4" style={{ color: "#006c73", fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>Problem Framing:</h4>
                <p className="leading-relaxed" style={{ color: "#006c73", fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                  Glaucoma is the leading cause of irreversible blindness, affecting <strong>80 million individuals</strong> worldwide, and it's estimated that one in every 200 remains undiagnosed. It has a global economic burden of <strong>$411 billion</strong>. The foremost <strong>biomarker</strong> is elevated intraocular pressure (IOP), the buildup of aqueous humor damaging <strong>optic nerves</strong>. Causes underlying this <strong>phenomenon are unknown</strong>, there exists no cure, and it typically lacks warning symptoms, leading to gradual and "silent" vision loss.
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

            {/* So, what exists? Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
              style={{ marginTop: '-1cm' }}
            >
              <h4 className="font-bold text-xl mb-4" style={{ color: "#006c73", fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                So, what exists?
              </h4>

              <div className="grid md:grid-cols-2 gap-6 mb-0">
                {/* Prescribed eyedrops Box */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl p-6"
                  style={{
                    background: "linear-gradient(to right, #4DB6AC, #006c73)",
                    border: "1.5px solid #4DB6AC"
                  }}
                >
                  <div className="absolute -top-4 left-6 bg-white rounded-lg px-4 py-2 shadow-md">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: "#E0F7FA",
                          border: "2px solid #006c73"
                        }}
                      ></div>
                      <h4 className="font-bold text-lg" style={{ color: "#006c73", fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                        Prescribed eyedrops
                      </h4>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <p className="leading-relaxed text-white font-bold" style={{ fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                      • IOP-reducing eyedrops have been prescribed for decades
                    </p>
                    <p className="leading-relaxed text-white font-bold" style={{ fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                      • But patients don't know when IOP is spiking and when to apply drops
                    </p>
                    <p className="leading-relaxed text-white font-bold" style={{ fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                      • Eye pressure can spike at any time without warning
                    </p>
                  </div>
                </motion.div>

                {/* ($2500+) Diagnostics Box */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl p-6"
                  style={{
                    background: "linear-gradient(to right, #4DB6AC, #006c73)",
                    border: "1.5px solid #4DB6AC"
                  }}
                >
                  <div className="absolute -top-4 left-6 bg-white rounded-lg px-4 py-2 shadow-md">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: "#006c73",
                          border: "2px solid #E0F7FA"
                        }}
                      ></div>
                      <h4 className="font-bold text-lg" style={{ color: "#006c73", fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                        ($2500+) Diagnostics
                      </h4>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <p className="leading-relaxed text-white font-bold" style={{ fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                      • IOP diagnostics are non-portable, invasive, and expensive
                    </p>
                    <p className="leading-relaxed text-white font-bold" style={{ fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                      • Physicians only see a snapshot of fluctuations
                    </p>
                    <p className="leading-relaxed text-white font-bold" style={{ fontFamily: "'Canva Sans', 'Inter', sans-serif" }}>
                      • Disables necessary frequent monitoring to manage glaucoma
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* The Result Section */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8" style={{ marginTop: '-0.5cm' }}>
                <div className="flex flex-col items-start">
                  <p className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#163b42" }}>
                    The Result? 1/5 go <span style={{ color: "#EF5350" }}>blind</span>
                  </p>
                  {/* Stick figures representation */}
                  <div className="flex items-center justify-between w-full max-w-md">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="relative"
                        style={{ width: "40px", height: "80px" }}
                      >
                        {/* Head */}
                        <div 
                          className="absolute rounded-full border-2"
                          style={{ 
                            width: "24px", 
                            height: "24px", 
                            top: "0", 
                            left: "8px",
                            borderColor: "#163b42", 
                            backgroundColor: "#E0F7FA" 
                          }}
                        ></div>
                        {/* Body */}
                        <div 
                          className="absolute"
                          style={{ 
                            width: "2px", 
                            height: "32px", 
                            top: "24px", 
                            left: "19px",
                            backgroundColor: "#163b42" 
                          }}
                        ></div>
                        {/* Arms */}
                        <div 
                          className="absolute"
                          style={{ 
                            width: "16px", 
                            height: "2px", 
                            top: "36px", 
                            left: "3px",
                            backgroundColor: "#163b42",
                            transform: "rotate(-15deg)",
                            transformOrigin: "right center"
                          }}
                        ></div>
                        <div 
                          className="absolute"
                          style={{ 
                            width: "16px", 
                            height: "2px", 
                            top: "36px", 
                            left: "21px",
                            backgroundColor: "#163b42",
                            transform: "rotate(15deg)",
                            transformOrigin: "left center"
                          }}
                        ></div>
                        {/* Legs */}
                        <div 
                          className="absolute"
                          style={{ 
                            width: "2px", 
                            height: "24px", 
                            top: "56px", 
                            left: "19px",
                            backgroundColor: "#163b42",
                            transform: "rotate(-20deg)",
                            transformOrigin: "top center"
                          }}
                        ></div>
                        <div 
                          className="absolute"
                          style={{ 
                            width: "2px", 
                            height: "24px", 
                            top: "56px", 
                            left: "19px",
                            backgroundColor: "#163b42",
                            transform: "rotate(20deg)",
                            transformOrigin: "top center"
                          }}
                        ></div>
                      </div>
                    ))}
                    <div
                      className="relative"
                      style={{ width: "40px", height: "80px" }}
                    >
                      {/* Head */}
                      <div 
                        className="absolute rounded-full border-2"
                        style={{ 
                          width: "24px", 
                          height: "24px", 
                          top: "0", 
                          left: "8px",
                          borderColor: "#EF5350", 
                          backgroundColor: "#FFEBEE" 
                        }}
                      ></div>
                      {/* Body */}
                      <div 
                        className="absolute"
                        style={{ 
                          width: "2px", 
                          height: "32px", 
                          top: "24px", 
                          left: "19px",
                          backgroundColor: "#EF5350" 
                        }}
                      ></div>
                      {/* Arms */}
                      <div 
                        className="absolute"
                        style={{ 
                          width: "16px", 
                          height: "2px", 
                          top: "36px", 
                          left: "3px",
                          backgroundColor: "#EF5350",
                          transform: "rotate(-15deg)",
                          transformOrigin: "right center"
                        }}
                      ></div>
                      <div 
                        className="absolute"
                        style={{ 
                          width: "16px", 
                          height: "2px", 
                          top: "36px", 
                          left: "21px",
                          backgroundColor: "#EF5350",
                          transform: "rotate(15deg)",
                          transformOrigin: "left center"
                        }}
                      ></div>
                      {/* Legs */}
                      <div 
                        className="absolute"
                        style={{ 
                          width: "2px", 
                          height: "24px", 
                          top: "56px", 
                          left: "19px",
                          backgroundColor: "#EF5350",
                          transform: "rotate(-20deg)",
                          transformOrigin: "top center"
                        }}
                      ></div>
                      <div 
                        className="absolute"
                        style={{ 
                          width: "2px", 
                          height: "24px", 
                          top: "56px", 
                          left: "19px",
                          backgroundColor: "#EF5350",
                          transform: "rotate(20deg)",
                          transformOrigin: "top center"
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {/* Images below diagnostics boxes */}
                <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                  >
                    <img
                      src="/science/bad_diagnostic.png"
                      alt="Bad Diagnostics Illustration"
                      className="w-64 h-auto object-contain rounded-lg"
                      style={{ maxHeight: "300px" }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                  >
                    <img
                      src="/science/current-treatments.png"
                      alt="Current Treatments Illustration"
                      className="w-64 h-auto object-contain rounded-lg"
                      style={{ maxHeight: "300px" }}
                    />
                  </motion.div>
                </div>
              </div>
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
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
              style={{
                background: "linear-gradient(to right, #006c73, #4DB6AC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.2,
                fontFamily: "'Canva Sans', 'Inter', sans-serif",
                letterSpacing: "-0.02em"
              }}
            >
              Who Are We?
            </h2>
  
          </motion.div>

          {/* Team Section */}
          <motion.div
            id="team"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-wrap justify-center gap-3 max-w-full overflow-x-auto">
              {[
                {
                  name: "Soham Chakraborty",
                  role: "Co-Founder/CEO",
                  bio: "Design, Growth Strategy & Clinical Testing",
                  image: "/team-photos/soham.jpg",
                  logos: ["Mayo Clinic", "Berkeley M.E.T.: BioE + Business"],
                  linkedin: "https://www.linkedin.com/in/soham-ch",
                },
                {
                  name: "Neil Goradia",
                  role: "Co-Founder/CTO",
                  bio: "Hardware, PCB design, IOT & CAD",
                  image: "/team-photos/neil.jpg",
                  logos: ["UC Berkeley EECS", "Accelus Robotics"],
                  linkedin: "https://www.linkedin.com/in/neil-goradia-634a40381/",
                },
                {
                  name: "John Flanagan",
                  role: "Senior R&D Advisor",
                  bio: "Ex-Dean of Berkeley's College of Optometry",
                  image: "/team-photos/john.jpg",
                  logos: ["UC Berkeley Optometry"],
                },
                {
                  name: "George Tanaka",
                  role: "M.D. Strategic Advisor",
                  bio: "Glaucoma Specialist & Refractive Cataract Surgeon",
                  image: "/team-photos/george.jpg",
                  logos: ["Glaucoma Specialists Of San Francisco"],
                },
                {
                  name: "Dan Kim",
                  role: "Legal Advisor",
                  bio: "Partner Orrick, Herrington & Sutcliffe LLP",
                  image: "/team-photos/dan.jpg",
                  logos: ["Orrick"],
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex-shrink-0"
                  style={{ width: "200px" }}
                >
                  <div 
                    className="rounded-xl p-4 h-full flex flex-col shadow-lg"
                    style={{
                      background: index % 2 === 0 
                        ? "linear-gradient(to right, #006c73, #4DB6AC)"
                        : "linear-gradient(to bottom, #4DB6AC, #E0F7FA)",
                      border: "1px solid #006c73"
                    }}
                  >
                    <div className="flex flex-col items-center mb-3">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-32 h-32 rounded-lg mb-3 object-cover border-2 border-white shadow-md"
                      />
                      <h4 
                        className="font-bold text-sm mb-1 text-center whitespace-nowrap"
                        style={{ 
                          color: index % 2 === 0 ? "#FFFFFF" : "#163b42",
                          fontFamily: "'Canva Sans', 'Inter', sans-serif"
                        }}
                      >
                        {member.name.toUpperCase()}
                      </h4>
                      <p 
                        className="font-bold text-sm mb-2 text-center"
                        style={{ 
                          color: index % 2 === 0 ? "#FFFFFF" : "#006c73",
                          fontFamily: "'Canva Sans', 'Inter', sans-serif"
                        }}
                      >
                        {member.role}
                      </p>
                      <p 
                        className="font-bold text-xs text-center mb-3 leading-relaxed"
                        style={{ 
                          color: index % 2 === 0 ? "#FFFFFF" : "#163b42",
                          fontFamily: "'Canva Sans', 'Inter', sans-serif"
                        }}
                      >
                        {member.bio}
                      </p>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-block p-1.5 rounded border"
                          style={{ 
                            borderColor: index % 2 === 0 ? "#FFFFFF" : "#006c73"
                          }}
                        >
                          <Linkedin 
                            className="w-5 h-5"
                            style={{ 
                              color: index % 2 === 0 ? "#FFFFFF" : "#006c73"
                            }}
                          />
                        </a>
                      )}
                    </div>
                    <div className="mt-auto pt-3 border-t border-white/30">
                      <div className="flex flex-wrap justify-center gap-2">
                        {member.logos.map((logo, logoIndex) => (
                          <div
                            key={logoIndex}
                            className={`px-2 py-1 rounded text-xs font-medium text-center ${logo.includes("Glaucoma Specialists") ? "" : "whitespace-nowrap"}`}
                            style={{ 
                              backgroundColor: index % 2 === 0 ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.5)",
                              color: index % 2 === 0 ? "#FFFFFF" : "#006c73",
                              fontFamily: "'Canva Sans', 'Inter', sans-serif"
                            }}
                          >
                            {logo}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="technology" className="pt-8 pb-20 bg-white" style={{ marginTop: '-1cm' }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
              style={{
                background: "linear-gradient(to right, #006c73, #4DB6AC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.2,
                fontFamily: "'Canva Sans', 'Inter', sans-serif",
                letterSpacing: "-0.02em"
              }}
            >
              Patent-Pending Technology: GlaucoGlasses
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left side - Flowchart Image and Text */}
              <div className="space-y-8">
                {/* Flowchart Image */}
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
                    <img
                      src="/science/glasses-flowchart.png"
                      alt="GlaucoSolve Glasses Flowchart"
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </div>
                {/* Text with box */}
                <div id="text-box" className="max-w-full p-6 rounded-lg border-2 shadow-lg" style={{ borderColor: "#006c73" }}>
                  <p 
                    className="text-lg md:text-xl leading-relaxed text-center"
                    style={{
                      color: "#006c73",
                      fontFamily: "'Canva Sans', 'Inter', sans-serif"
                    }}
                  >
                    We propose GlaucoGlasses: the world's first ultrasound-integrated smart glasses that continuously
                    monitor eye pressure with 92% accuracy at 95% lower cost than existing devices. With ultrasound transducers and receivers
                    around its frame, Glaucoglasses emits
                    harmless waves to the cornea and analyzes
                    the reflected signal to measure IOP.
                    Mobile notifications prompt patients to
                    apply eye drops when excess eye pressure
                    is sensed to mitigate vision loss.
                    Real-time data is saved to the cloud,
                    enabling remote oversight and treatment
                    personalization from physicians.
                  </p>
                </div>
              </div>
              
              {/* Right side - App Prototypes and YouTube Video */}
              <div className="space-y-8">
                {/* App Prototypes */}
                <div className="flex items-center justify-center">
                  <div className="w-full aspect-video rounded-xl overflow-visible shadow-lg bg-white p-6">
                    <div className="grid grid-cols-3 gap-4 h-full">
                      {/* Mobile App on Left - Full Height */}
                      <div className="row-span-2 flex items-center justify-center" style={{ marginLeft: '-1cm', marginTop: '-1.5cm', alignItems: 'center', justifyContent: 'center' }}>
                        <img
                          src="/prototypes/app1.png"
                          alt="Mobile App"
                          className="max-w-[80%] max-h-[90%] object-contain rounded-lg"
                          style={{ margin: 'auto' }}
                        />
                      </div>
                      {/* Device Info - Top Middle */}
                      <div className="flex items-center justify-center">
                        <img
                          src="/prototypes/app4.png"
                          alt="Device Info"
                          className="max-w-[140%] max-h-[140%] object-contain rounded-lg"
                        />
                      </div>
                      {/* Continuous Monitoring - Top Right */}
                      <div className="flex items-center justify-center">
                        <img
                          src="/prototypes/app3.png"
                          alt="Continuous Monitoring"
                          className="max-w-[120%] max-h-[120%] object-contain rounded-lg"
                        />
                      </div>
                      {/* Real-Time Dashboard - Bottom Middle (spans 2 columns) */}
                      <div className="col-span-2 flex items-start justify-center" style={{ marginTop: '-0.4cm' }}>
                        <img
                          src="/prototypes/app2.png"
                          alt="Real-Time Dashboard"
                          className="max-w-[85%] max-h-[85%] object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* YouTube Video - Match text box height */}
                <div className="flex items-center justify-center">
                  <div className="w-full rounded-xl overflow-hidden shadow-lg" id="video-container">
                    <iframe
                      src="https://www.youtube.com/embed/goEUu3CiZpk"
                      title="GlaucoNova Labs Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
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
            <h3 
              className="text-3xl font-bold text-center mb-8"
              style={{
                color: "#006c73",
                fontFamily: "'Canva Sans', 'Inter', sans-serif"
              }}
            >
              Prototyping Progress: From Bulky Circuits to Sleek PCBs
            </h3>
            <div className="flex items-center justify-center">
              <img
                src="/prototypes/full.png"
                alt="Building a Robust Wearable"
                className="w-full max-w-6xl rounded-xl shadow-lg"
              />
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
            <h3 
              className="text-3xl font-bold text-center mb-8"
              style={{
                color: "#006c73",
                fontFamily: "'Canva Sans', 'Inter', sans-serif"
              }}
            >
              Our Unique Value
            </h3>
            <p 
              className="text-lg max-w-4xl mx-auto text-pretty leading-relaxed mb-8"
              style={{
                color: "#006c73",
                fontFamily: "'Canva Sans', 'Inter', sans-serif"
              }}
            >
              We hold the first wearable and non-contact technology design capable of continuous IOP monitoring, with a 95% cheaper price point and remote physician monitoring feature, outshining each alternative IOP monitor in multiple key factors.
            </p>
            <p 
              className="text-lg max-w-4xl mx-auto text-pretty leading-relaxed mb-8"
              style={{
                color: "#006c73",
                fontFamily: "'Canva Sans', 'Inter', sans-serif"
              }}
            >
              We foresee 3 use cases of GlaucoGlasses: 1) Point-of-Care diagnosis in healthcare settings; 2) Short-term continuous monitoring for baseline IOP level monitoring (for at-risk patients); 3) Long-term continuous monitoring for acute glaucoma and general wellness.
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
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
              style={{
                background: "linear-gradient(to right, #006c73, #4DB6AC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.2,
                fontFamily: "'Canva Sans', 'Inter', sans-serif",
                letterSpacing: "-0.02em"
              }}
            >
              The Science Behind GlaucoGlasses
            </h2>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <img
                  src="/science/figure1.png"
                  alt="Figure 1: Scientific concept of our technology"
                  className="rounded-xl shadow-lg w-full mb-6"
                  id="figure1-img"
                />
                <p 
                  className="text-lg max-w-4xl mx-auto text-pretty leading-relaxed"
                  style={{
                    color: "#006c73",
                    fontFamily: "'Canva Sans', 'Inter', sans-serif"
                  }}
                >
                  The proof of concept was tested on gelatin phantom eye models under Dr. John Flanagan's purview at Berkeley's College of Optometry. True IOP values were calculated using an iCARE IC100 Tonometer and statistically correlated to the extracted ultrasound signal. Proprietary ML models have been built on this correlation.
                </p>
              </div>
              <div>
                <p 
                  className="text-lg max-w-4xl mx-auto text-pretty leading-relaxed mb-6"
                  style={{
                    color: "#006c73",
                    fontFamily: "'Canva Sans', 'Inter', sans-serif"
                  }}
                >
                  Widely used in elasticity imaging, acoustic radiation force from ultrasound waves induces physical deformation in tissues--elucidating data about the elasticity of the tissue. Applying a known magnitude of acoustic force to the cornea of the eye will similarly enable the measurement of corneal deformation, offering insights into elasticity, which is known to be correlated to IOP.
                </p>
                <p 
                  className="text-lg max-w-4xl mx-auto text-pretty leading-relaxed mb-6"
                  style={{
                    color: "#006c73",
                    fontFamily: "'Canva Sans', 'Inter', sans-serif"
                  }}
                >
                  20+ parameters will be experimentally extracted from the reflected ultrasound signal, which will correlate to IOP. The experimental correlation of three of these parameters is shown below.
                </p>
                <img
                  src="/experimental/experiment_lab.png"
                  alt="Experiment Lab"
                  className="rounded-xl shadow-lg w-full"
                  id="experiment-img"
                  style={{ marginTop: 0 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white" style={{ marginTop: 'calc(-4rem - 2cm)' }}>
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 
              className="text-5xl md:text-6xl font-bold mb-6 text-center"
              style={{
                background: "linear-gradient(to right, #006c73, #4DB6AC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.2,
                fontFamily: "'Canva Sans', 'Inter', sans-serif",
                letterSpacing: "-0.02em"
              }}
            >
              Contact Us
            </h2>
            <p 
              className="text-lg max-w-3xl mx-auto text-pretty"
              style={{
                color: "#006c73",
                fontFamily: "'Canva Sans', 'Inter', sans-serif"
              }}
            >
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
              <h3 
                className="text-2xl font-bold mb-8"
                style={{
                  color: "#006c73",
                  fontFamily: "'Canva Sans', 'Inter', sans-serif"
                }}
              >
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="glass-light p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <p 
                      className="font-medium"
                      style={{
                        color: "#006c73",
                        fontFamily: "'Canva Sans', 'Inter', sans-serif"
                      }}
                    >
                      Email
                    </p>
                    <p 
                      style={{
                        color: "#006c73",
                        fontFamily: "'Canva Sans', 'Inter', sans-serif"
                      }}
                    >
                      sohamchakraborty03@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass-light p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p 
                      className="font-medium"
                      style={{
                        color: "#006c73",
                        fontFamily: "'Canva Sans', 'Inter', sans-serif"
                      }}
                    >
                      Phone
                    </p>
                    <p 
                      style={{
                        color: "#006c73",
                        fontFamily: "'Canva Sans', 'Inter', sans-serif"
                      }}
                    >
                      +1 (510) 320-6984
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="glass-light p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p 
                      className="font-medium"
                      style={{
                        color: "#006c73",
                        fontFamily: "'Canva Sans', 'Inter', sans-serif"
                      }}
                    >
                      Address
                    </p>
                    <p 
                      style={{
                        color: "#006c73",
                        fontFamily: "'Canva Sans', 'Inter', sans-serif"
                      }}
                    >
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
                  <h3 
                    className="text-xl font-bold mb-6"
                    style={{
                      color: "#006c73",
                      fontFamily: "'Canva Sans', 'Inter', sans-serif"
                    }}
                  >
                    Send us a message
                  </h3>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label 
                          className="block text-sm font-medium mb-2"
                          style={{
                            color: "#006c73",
                            fontFamily: "'Canva Sans', 'Inter', sans-serif"
                          }}
                        >
                          Name
                        </label>
                        <Input
                          className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                          placeholder="Your name"
                          style={{
                            color: "#006c73",
                            fontFamily: "'Canva Sans', 'Inter', sans-serif"
                          }}
                        />
                      </div>
                      <div>
                        <label 
                          className="block text-sm font-medium mb-2"
                          style={{
                            color: "#006c73",
                            fontFamily: "'Canva Sans', 'Inter', sans-serif"
                          }}
                        >
                          Email
                        </label>
                        <Input
                          type="email"
                          className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500"
                          placeholder="your@email.com"
                          style={{
                            color: "#006c73",
                            fontFamily: "'Canva Sans', 'Inter', sans-serif"
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label 
                        className="block text-sm font-medium mb-2"
                        style={{
                          color: "#006c73",
                          fontFamily: "'Canva Sans', 'Inter', sans-serif"
                        }}
                      >
                        Message
                      </label>
                      <Textarea
                        className="border-gray-300 focus:border-cyan-500 focus:ring-cyan-500 min-h-[120px]"
                        placeholder="Tell us about your interest in GlaucoNova Labs..."
                        style={{
                          color: "#006c73",
                          fontFamily: "'Canva Sans', 'Inter', sans-serif"
                        }}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-white border-[1.5px] rounded-lg normal-case transition-colors font-bold"
                      style={{
                        background: "linear-gradient(to right, #006c73, #4DB6AC)",
                        borderColor: "#4DB6AC",
                        fontFamily: "'Aileron', sans-serif",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to right, #005a61, #26A69A)"
                        e.currentTarget.style.borderColor = "#26A69A"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "linear-gradient(to right, #006c73, #4DB6AC)"
                        e.currentTarget.style.borderColor = "#4DB6AC"
                      }}
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

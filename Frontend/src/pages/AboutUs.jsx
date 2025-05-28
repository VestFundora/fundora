import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Target, Users, Zap, Shield, TrendingUp, ArrowRight, Play, CheckCircle } from 'lucide-react';
import logo from '../assets/Logo.png'

const AboutUs = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'AI-Driven Matching',
      desc: 'Our proprietary algorithms match investors with startups based on deep compatibility metrics, sector trends, and financial goals.',
      gradient: 'from-teal-500 to-emerald-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Tokenized Equity & Smart Contracts',
      desc: 'Experience the future of investment with fractional ownership, automated vesting, and secure token issuance.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Real-Time Deal Communication',
      desc: 'Investors and startups can negotiate, share documents, and chat directly on the platform — no third-party tools required.',
      gradient: 'from-teal-600 to-green-600'
    },
  ];

  const stats = [
    { number: '500+', label: 'Funded Startups', icon: <Rocket className="w-6 h-6" /> },
    { number: '₹2.5B+', label: 'Total Funding', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '1000+', label: 'Active Investors', icon: <Users className="w-6 h-6" /> },
    { number: '98%', label: 'Success Rate', icon: <Zap className="w-6 h-6" /> },
  ];

  const achievements = [
    'SEBI Registered Investment Platform',
    'RBI Compliant Digital Asset Framework',
    'ISO 27001 Security Certified',
    'Winner - FinTech Innovation Award 2024'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-800 via-teal-700 to-emerald-800 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '-50%']) }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex items-center justify-between px-6 md:px-20 py-6"
      >
        <div className="flex items-center gap-3">
  <a href="/" className="flex items-center gap-3">
    <img
      src={logo} // <-- Replace with your actual logo path
      alt="Logo"
      className="h-12 w-auto inline-block mr-2"
    />
  </a>
</div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/10">
            Home
          </a>
          <a href="/services" className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/10">
            Services
          </a>
          <a href="/contact" className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/10">
            Contact
          </a>
          <a href="/updates" className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/10">
            Updates
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="/dashboard" className="text-white/80 hover:text-white transition-colors">
            Dashboard
          </a>
          <a href="/login" className="text-white/80 hover:text-white transition-colors">
            Login
          </a>
          <a href="/signup" className="bg-white text-teal-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Sign Up
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative px-6 md:px-20 py-20 md:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full flex items-center justify-center">
                <Rocket className="w-10 h-10 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-teal-300 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Empowering
              </span>
              <br />
              <span className="text-white">Innovation</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto mb-12">
              Fundora is more than a platform — it's an ecosystem. We bridge the gap between innovative startups and visionary investors using advanced AI, tokenized equity, and real-time communication.
            </p>

            {/* Interactive Video Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative inline-block"
            >
              <button
                onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 hover:bg-white/20 transition-all duration-300"
              >
                <Play className="w-6 h-6 text-teal-300 group-hover:text-white transition-colors" />
                <span className="text-lg font-semibold">Watch Our Story</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + idx * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-r from-teal-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-teal-400/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-teal-300 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Revolutionary
              </span> Features
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Discover how our cutting-edge technology transforms the investment landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${
                    activeFeature === idx
                      ? 'bg-gradient-to-r from-teal-600/20 to-emerald-600/20 border-teal-400/50 scale-105'
                      : 'bg-white/5 border-white/10 hover:border-white/20'
                  }`}
                  onClick={() => setActiveFeature(idx)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.gradient} text-white`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                      <p className="text-gray-200 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                  
                  {activeFeature === idx && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 4 }}
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full"
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Interactive Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-teal-600/10 to-emerald-600/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-96 flex items-center justify-center">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${features[activeFeature].gradient} flex items-center justify-center`}>
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-emerald-500 mx-auto rounded-full" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 py-20 bg-gradient-to-r from-teal-800/20 to-emerald-800/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-12"
          >
            Trusted & <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">Certified</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-teal-400/50 transition-all duration-300"
              >
                <CheckCircle className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-200">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call-to-Action */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 md:px-20 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">Transform</span> Your Future?
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Join thousands of entrepreneurs and investors who are already building the future with Fundora.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 bg-white text-teal-700 font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-gray-100 transition-all duration-300"
            >
              <span>Join as a Startup</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              <span>Join as an Investor</span>
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutUs;

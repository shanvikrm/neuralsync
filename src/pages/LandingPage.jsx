import React, { useState } from 'react';
import { Sparkles, ArrowRight, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const LandingPage = () => {
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative z-10 px-4 sm:px-6 py-4"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">NeuralSync</span>
          </motion.div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {['Features', 'Pricing', 'About'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign In
            </motion.button>
          </div>
          <motion.button 
            className="md:hidden p-2 rounded-lg hover:bg-white/10"
            whileTap={{ scale: 0.9 }}
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
        {/* Mobile nav */}
        {navOpen && (
          <motion.div 
            className="md:hidden flex flex-col items-center gap-2 mt-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="#features" className="text-gray-300 hover:text-white transition-colors w-full text-center py-2">Features</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition-colors w-full text-center py-2">Pricing</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors w-full text-center py-2">About</a>
            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">Sign In</button>
          </motion.div>
        )}
      </motion.nav>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <Sparkles className="w-4 h-4 text-purple-400 mr-2" />
          <span className="text-sm text-gray-300">Powered by Advanced AI</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight"
        >
          Intelligence
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-purple-400"
          >
            Redefined
          </motion.span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the future of AI-powered analytics and insights. Transform your data into actionable intelligence with our cutting-edge platform.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <motion.button
            onClick={() => navigate('/dashboard')}
            className="group bg-gradient-to-r from-purple-500 to-pink-500 px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold border border-white/20 hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute inset-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated gradient orbs (parallax) */}
        <motion.div
          animate={{
            x: [0, 40, 0, -40, 0],
            y: [0, 20, 40, 20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.18, 0.28, 0.18],
            filter: [
              'blur(40px) brightness(1)',
              'blur(60px) brightness(1.2)',
              'blur(40px) brightness(1)'
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-20 -right-10 w-60 h-60 sm:-top-40 sm:-right-40 sm:w-96 sm:h-96 bg-purple-500/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -40, 0, 40, 0],
            y: [0, -20, -40, -20, 0],
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            filter: [
              'blur(40px) brightness(1)',
              'blur(60px) brightness(1.2)',
              'blur(40px) brightness(1)'
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-20 -left-10 w-60 h-60 sm:-bottom-40 sm:-left-40 sm:w-96 sm:h-96 bg-pink-500/30 rounded-full"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360, 0],
            opacity: [0.08, 0.18, 0.08],
            filter: [
              'blur(60px) brightness(1)',
              'blur(80px) brightness(1.2)',
              'blur(60px) brightness(1)'
            ]
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-[32rem] sm:h-[32rem] bg-blue-500/20 rounded-full"
        ></motion.div>
        {/* Subtle animated lines */}
        <motion.div
          animate={{
            x: [0, 60, 0, -60, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden sm:block absolute top-1/4 left-1/2 w-[40rem] h-1 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-blue-400/30 blur-lg rotate-2"
        ></motion.div>
        <motion.div
          animate={{
            x: [0, -60, 0, 60, 0],
            opacity: [0.08, 0.18, 0.08],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="hidden sm:block absolute bottom-1/4 left-1/2 w-[40rem] h-1 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 blur-lg -rotate-2"
        ></motion.div>
        {/* Floating Sparkles icons */}
        <motion.div
          animate={{
            y: [0, -20, 0, 20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute left-1/4 top-1/4 sm:left-1/3 sm:top-1/3"
        >
          <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-purple-300/70 drop-shadow-lg" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-1/6 bottom-1/6 sm:right-1/4 sm:bottom-1/4"
        >
          <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-300/70 drop-shadow-lg" />
        </motion.div>
        {/* Animated glowing border for hero section */}
        <motion.div
          animate={{
            opacity: [0.2, 0.5, 0.2],
            boxShadow: [
              '0 0 40px 10px #a78bfa55',
              '0 0 80px 20px #f472b655',
              '0 0 40px 10px #a78bfa55'
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="pointer-events-none absolute z-20 left-1/2 top-20 sm:top-32 -translate-x-1/2 w-[98vw] max-w-2xl sm:max-w-5xl h-60 sm:h-[32rem] rounded-2xl sm:rounded-3xl border-2 border-purple-400/30"
        ></motion.div>
        {/* Shooting stars */}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: -100,
              opacity: 0
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth],
              y: [null, window.innerHeight + 100],
              opacity: [0, 1, 0]
            }}
            transition={{
              delay: i * 1.5 + Math.random(),
              duration: 2.5 + Math.random(),
              repeat: Infinity,
              repeatDelay: 3 + Math.random() * 2,
              ease: "easeInOut"
            }}
            className="pointer-events-none fixed z-0 sm:w-2 sm:h-20 w-[1.5px] h-12"
            style={{
              background: 'linear-gradient(180deg, #fff 0%, #a78bfa 100%)',
              borderRadius: '2px',
              boxShadow: '0 0 8px 2px #fff',
              opacity: 0.7
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

"use client"

import { motion } from "framer-motion";
import { ArrowDown } from 'lucide-react';
// import { ImageWithFallback } from './figma/ImageWithFallback';
import Image from 'next/image';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* <ImageWithFallback
          src="https://images.unsplash.com/photo-1621788455628-957e51d2f4e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTk4ODgxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Alexandra Hayes"
          className="w-full h-full object-cover"
        /> */}
        <Image
          src="/polaroids/POLAROIDS PIC 4.jpg"
          alt="Kaydah Blaq Poloaroid Pic"
          className="w-full h-full object-cover"
          fill
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-light mb-4 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            KAYDAH
          </motion.h1>
          <motion.h2
            className="text-3xl md:text-5xl font-light mb-6 tracking-widest"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            BLAQ
          </motion.h2>
          <motion.div
            className="w-24 h-0.5 bg-white mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 1.2 }}
          ></motion.div>
          <motion.p
            className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            INTERNATIONAL MODEL & INFLUENCER
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-white/80 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            Bringing elegance and sophistication to fashion, commercial, and editorial photography worldwide.
          </motion.p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToPortfolio}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        whileHover={{ y: -5 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm tracking-widest">SCROLL</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
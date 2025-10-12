"use client"

import { motion } from "framer-motion";
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-light tracking-wider mb-2">
              KAYDAH BLAQ
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              International Model & Influencer
            </p>
          </motion.div>

          {/* Center - Copyright */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-primary-foreground/80 text-sm flex items-center justify-center space-x-1">
              <span>© {currentYear} Made with</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={14} className="text-red-400" fill="currentColor" />
              </motion.span>
              <span>by Kaydah Blaq</span>
            </p>
            <p className="text-primary-foreground/60 text-xs mt-1">
              All rights reserved
            </p>
          </motion.div>

          {/* Right - Back to Top */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              <ArrowUp size={16} className="mr-2" />
              Back to Top
            </Button>
          </motion.div>
        </div>

        {/* Bottom Links */}
        <motion.div
          className="mt-8 pt-8 border-t border-primary-foreground/20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              Media Kit
            </a>
            <a
              href="#"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300"
            >
              Booking
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-foreground/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
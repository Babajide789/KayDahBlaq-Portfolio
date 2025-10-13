"use client"

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Menu, X } from 'lucide-react';
import { FaTiktok, FaInstagram } from "react-icons/fa"; // Font Awesome icons
import { FaXTwitter } from "react-icons/fa6";

import { Button } from './ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <b>KAYDAHBLAQ</b>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <div className="flex items-center space-x-4 ml-8">
              <motion.a
                href="https://www.instagram.com/kaydahblaq_?igsh=MXEwaGJ3bjRxZnQxeg=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >

                <FaInstagram size={20} />
              </motion.a>
              
              <motion.a
                href="https://x.com/kaydahblaq999?s=21"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <FaXTwitter size={20}/>
              </motion.a>
              
              <motion.a
                href="https://www.tiktok.com/@kaydahblaq?_t=ZS-90VwC7hdwR8&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <FaTiktok size={20} />
              </motion.a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-foreground/80 hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center space-x-4 pt-4">
              <motion.a
                href="https://www.instagram.com/kaydahblaq_?igsh=MXEwaGJ3bjRxZnQxeg=="
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <FaInstagram size={20} />
              </motion.a>
              <motion.a
                href="https://x.com/kaydahblaq999?s=21"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
              
                <FaXTwitter size={20}/>
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@kaydahblaq?_t=ZS-90VwC7hdwR8&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <FaTiktok size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
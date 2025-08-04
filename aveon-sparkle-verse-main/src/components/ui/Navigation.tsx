import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import aveonLogo from '@/assets/aveon-logo.png';
import { useScrollspy } from '@/hooks/useScrollspy';
import MobileMenu from './MobileMenu';
const navItems = [{
  name: 'Home',
  href: '#home',
  id: 'home'
}, {
  name: 'About',
  href: '#about',
  id: 'about'
}, {
  name: 'Features',
  href: '#features',
  id: 'features'
}, {
  name: 'Roadmap',
  href: '#roadmap',
  id: 'roadmap'
}, {
  name: 'Contact',
  href: '#contact',
  id: 'contact'
}];
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollspy(navItems.map(item => item.id));
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <motion.nav initial={{
    y: -50,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.8,
    delay: 0.3
  }} className="relative z-50 mb-16">
      <div className={`
        relative px-8 py-4 rounded-full transition-all duration-500
        ${isScrolled ? 'glass-card backdrop-blur-md shadow-glow' : 'bg-card/20 backdrop-blur-sm border border-white/10'}
      `}>
        {/* Curved background */}
        <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-10"></div>
        
        <div className="relative flex items-center justify-between space-x-12">
          {/* Logo */}
          <motion.div whileHover={{
          scale: 1.05
        }} className="flex items-center space-x-3">
            <img src={aveonLogo} alt="Aveon AI" className="w-8 h-8" />
            <span className="text-lg font-bold gradient-text">AVEON AI</span>
          </motion.div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(item => (
              <motion.a
                key={item.id}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeSection === item.id
                    ? 'bg-primary/20 text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button whileHover={{
          scale: 1.05,
          boxShadow: "0 0 25px hsl(var(--primary) / 0.6)"
        }} whileTap={{
          scale: 0.95
        }} className="hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-glow text-sm">
            Get Started
          </motion.button>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </motion.nav>;
}
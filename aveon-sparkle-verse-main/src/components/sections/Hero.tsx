import { motion } from 'framer-motion';
import ParticleField from '@/components/3d/ParticleField';
import Hyperspeed from '@/components/3d/Hyperspeed';
import Navigation from '@/components/ui/Navigation';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark Veil Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-veil"></div>
      
      {/* Hyperspeed Background Effect */}
      <div className="absolute inset-0 -z-10 opacity-80">
        <Hyperspeed 
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 12,
            islandWidth: 3,
            lanesPerRoad: 3,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.6,
            totalSideLightSticks: 30,
            lightPairsPerRoadWay: 50,
            colors: {
              roadColor: 0x0a0a0a,
              islandColor: 0x0f0f0f,
              background: 0x000000,
              shoulderLines: 0x8b5cf6,
              brokenLines: 0x8b5cf6,
              leftCars: [0x8b5cf6, 0x6366f1, 0x7c3aed],
              rightCars: [0x06b6d4, 0x0ea5e9, 0x3b82f6],
              sticks: 0x8b5cf6,
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        {/* Navigation positioned above text */}
        <div className="mb-8">
          <Navigation />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            Welcome to{' '}
            <span className="gradient-text block">AVEON AI</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Become emboldened by the flame of ambition. We're crafting intelligent systems designed to think, adapt, and revolutionize the way industries operate.
          </motion.p>

        </motion.div>

        {/* Floating Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          {[
            { number: '99.9%', label: 'Uptime Guarantee' },
            { number: '20+', label: 'AI Agents Deployed' },
            { number: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 text-center float"
              style={{ animationDelay: `${index * 0.2}s` }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 50
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About <span className="gradient-text">Aveon AI</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            We're not building tools. We're crafting intelligent systems designed to think, adapt, and revolutionize the way industries operate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: -50
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              The Future of Intelligence
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                At Aveon AI, we believe that artificial intelligence should be more than just automation—it should be intuitive, adaptive, and transformative. Our mission is to create AI systems that don't just follow commands, but understand context, learn from interaction, and evolve with your needs.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Founded by a team of AI researchers and industry veterans, we're pushing the boundaries of what's possible with machine learning, natural language processing, and autonomous systems.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[{
              title: 'Founded',
              value: '2024'
            }, {
              title: 'Team Size',
              value: '10+'
            }, {
              title: 'Countries',
              value: '3'
            }, {
              title: 'AI Models',
              value: '100+'
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.8
            }} animate={isInView ? {
              opacity: 1,
              scale: 1
            } : {
              opacity: 0,
              scale: 0.8
            }} transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.1
            }} className="text-center">
                  <div className="text-2xl font-bold gradient-text bg-slate-500">{item.value}</div>
                  <div className="text-foreground/60">{item.title}</div>
                </motion.div>)}
            </div>
          </motion.div>

          {/* Right Content - Visual Elements */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={isInView ? {
          opacity: 1,
          x: 0
        } : {
          opacity: 0,
          x: 50
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative">
            <div className="glass-card p-8 relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-xl"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-4 gradient-text">Our Vision</h4>
                <p className="text-foreground/80 mb-6">
                  "To create AI that doesn't replace human intelligence, but amplifies it—making every interaction more meaningful, every decision more informed, and every outcome more impactful."
                </p>
                
                <div className="space-y-4">
                  {['Ethical AI Development', 'Human-Centered Design', 'Continuous Learning', 'Global Accessibility'].map((item, index) => <motion.div key={index} initial={{
                  opacity: 0,
                  x: 20
                }} animate={isInView ? {
                  opacity: 1,
                  x: 0
                } : {
                  opacity: 0,
                  x: 20
                }} transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1
                }} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full pulse-glow"></div>
                      <span className="text-foreground/80">{item}</span>
                    </motion.div>)}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}
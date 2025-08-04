import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle, Clock, Zap } from 'lucide-react';
const roadmapItems = [{
  date: 'May 2023',
  title: 'Voice Recognition Launch',
  description: 'Advanced voice recognition and natural language processing capabilities.',
  status: 'completed',
  icon: CheckCircle
}, {
  date: 'Dec 2024',
  title: 'AI Agents Platform',
  description: 'Comprehensive AI agents platform with multi-modal capabilities.',
  status: 'completed',
  icon: CheckCircle
}, {
  date: 'Nov 2024',
  title: 'Generative AI Suite',
  description: 'Advanced generative AI for video, image, and text creation.',
  status: 'in-progress',
  icon: Clock
}, {
  date: 'May 2025',
  title: 'AGI Workflow Automation',
  description: 'Artificial General Intelligence for complex workflow automation.',
  status: 'planned',
  icon: Zap
}];
export default function Roadmap() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400';
      case 'in-progress':
        return 'text-yellow-400';
      case 'planned':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };
  const getStatusBg = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-emerald-500';
      case 'in-progress':
        return 'from-yellow-500 to-orange-500';
      case 'planned':
        return 'from-blue-500 to-purple-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };
  return <section id="roadmap" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto" ref={ref}>
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
            Product <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Follow our journey as we continue to push the boundaries of AI technology and bring revolutionary features to life.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {roadmapItems.map((item, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50
          }} transition={{
            duration: 0.8,
            delay: index * 0.2
          }} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <motion.div whileHover={{
                scale: 1.02
              }} className="glass-card p-6 relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${getStatusBg(item.status)} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                    
                    <div className="relative z-10">
                      <div className={`inline-flex items-center space-x-2 mb-2 ${getStatusColor(item.status)}`}>
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm font-medium uppercase tracking-wide">
                          {item.status.replace('-', ' ')}
                        </span>
                      </div>
                      
                      <div className="text-sm text-foreground/60 mb-2">{item.date}</div>
                      
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      <p className="text-foreground/70">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <motion.div initial={{
                scale: 0
              }} animate={isInView ? {
                scale: 1
              } : {
                scale: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.2 + 0.3
              }} className={`w-6 h-6 rounded-full bg-gradient-to-br ${getStatusBg(item.status)} relative z-10 shadow-lg`}>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${getStatusBg(item.status)} animate-ping opacity-20`}></div>
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </motion.div>)}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 30
      }} transition={{
        duration: 0.8,
        delay: 1
      }} className="text-center mt-16">
          <p className="text-lg text-foreground/80 mb-6">
            Want to be part of our journey? Join our community and get early access to new features.
          </p>
          
        </motion.div>
      </div>
    </section>;
}
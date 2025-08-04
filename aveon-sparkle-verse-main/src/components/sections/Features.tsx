import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, MessageSquare, Workflow, BarChart3, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Agents',
    description: 'Intelligent voice, text, image, and video agents that learn and adapt to your specific needs.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: MessageSquare,
    title: 'Smart Chatbots',
    description: 'Advanced conversational AI with natural language understanding and context awareness.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Streamline complex processes with AI-powered automation and intelligent decision making.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Real-time dashboards with AI-driven insights and predictive modeling capabilities.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Globe,
    title: 'Global Integration',
    description: 'Seamless integration with CRM, WhatsApp, Notion, Photoshop, Discord, and more.',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level security with full API access and compliance-ready infrastructure.',
    color: 'from-gray-500 to-slate-500'
  }
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Discover the comprehensive suite of AI tools designed to transform your business operations and unlock new possibilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 relative group overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
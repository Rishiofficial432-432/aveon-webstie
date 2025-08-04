import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Clock, Star } from 'lucide-react';

interface Feature {
  icon: any;
  title: string;
  description: string;
  detailedDescription: string;
  benefits: string[];
  status: 'available' | 'coming-soon' | 'beta';
}

interface FeatureModalProps {
  feature: Feature;
  isOpen: boolean;
  onClose: () => void;
}

export default function FeatureModal({ feature, isOpen, onClose }: FeatureModalProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return CheckCircle;
      case 'coming-soon':
        return Clock;
      case 'beta':
        return Star;
      default:
        return CheckCircle;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'text-green-400';
      case 'coming-soon':
        return 'text-yellow-400';
      case 'beta':
        return 'text-blue-400';
      default:
        return 'text-green-400';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 z-50 flex items-center justify-center"
          >
            <div className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl p-3">
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{feature.title}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      {(() => {
                        const StatusIcon = getStatusIcon(feature.status);
                        return <StatusIcon className={`w-4 h-4 ${getStatusColor(feature.status)}`} />;
                      })()}
                      <span className={`text-sm font-medium ${getStatusColor(feature.status)}`}>
                        {feature.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {feature.detailedDescription}
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex space-x-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 glow-button py-3"
                  >
                    Try This Feature
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 glass-card hover:bg-white/5 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
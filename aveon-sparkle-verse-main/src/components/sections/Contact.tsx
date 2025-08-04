import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MessageSquare, Github, Twitter, Linkedin, Loader2 } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';
import { useNewsletter } from '@/hooks/useNewsletter';
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const {
    formData,
    isLoading,
    handleInputChange,
    handleSubmit
  } = useContactForm();
  const {
    email,
    setEmail,
    isLoading: newsletterLoading,
    handleSubscribe
  } = useNewsletter();
  const socialLinks = [{
    icon: Github,
    href: '#',
    label: 'GitHub'
  }, {
    icon: Twitter,
    href: '#',
    label: 'Twitter'
  }, {
    icon: Linkedin,
    href: '#',
    label: 'LinkedIn'
  }, {
    icon: MessageSquare,
    href: '#',
    label: 'Discord'
  }];
  return <section id="contact" className="py-20 px-6 relative">
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
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Ready to revolutionize your business with AI? Let's start a conversation about how Aveon AI can transform your operations.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
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
        }} className="space-y-8">
            {/* Direct Contact */}
            <div className="glass-card p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl p-3">
                  <Mail className="w-full h-full text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Direct Contact</h4>
                  <p className="text-foreground/60">Get in touch directly</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-foreground/80">Rishiwork432@gmail.com</p>
                
              </div>
            </div>

            {/* Office Location */}
            

            {/* Social Links */}
            

            {/* Newsletter */}
            
          </motion.div>
        </div>
      </div>
    </section>;
}
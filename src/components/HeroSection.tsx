import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import logo from '@/assets/logo.png';

const stats = [
  { icon: GraduationCap, value: '12', label: 'Grade Levels' },
  { icon: Users, value: '2000+', label: 'Students' },
  { icon: Award, value: '50+', label: 'Awards' },
  { icon: BookOpen, value: '100+', label: 'Expert Teachers' },
];

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 0.5], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </motion.div>

      {/* Floating Shapes */}
      <div 
        className="floating-shape w-96 h-96 top-20 -left-48"
        style={{ 
          background: 'hsl(var(--sky-blue))',
          transform: `translate(${scrollY * 0.05}px, ${scrollY * 0.02}px)`
        }}
      />
      <div 
        className="floating-shape w-80 h-80 top-40 right-0"
        style={{ 
          background: 'hsl(var(--mint-green))',
          transform: `translate(${scrollY * -0.03}px, ${scrollY * 0.04}px)`,
          animationDelay: '5s'
        }}
      />
      <div 
        className="floating-shape w-64 h-64 bottom-40 left-1/4"
        style={{ 
          background: 'hsl(var(--peach))',
          transform: `translate(${scrollY * 0.04}px, ${scrollY * -0.02}px)`,
          animationDelay: '10s'
        }}
      />
      <div 
        className="floating-shape w-72 h-72 bottom-20 right-1/4"
        style={{ 
          background: 'hsl(var(--lavender))',
          transform: `translate(${scrollY * -0.02}px, ${scrollY * 0.03}px)`,
          animationDelay: '15s'
        }}
      />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-6 pt-32 lg:pt-40 pb-20"
        style={{ opacity }}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="AISB Logo" 
              className="w-80 h-80 mx-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gradient-navy">Welcome to</span>
            <br />
            <span className="text-gradient">Adrak International School</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Barka, Oman
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Nurturing Tomorrow's Leaders with Excellence in Education, 
            Character Building, and Global Perspectives
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a
              href="#contact"
              className="btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply for Admission
            </motion.a>
            <motion.a
              href="#about"
              className="btn-glass text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our School
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="card-3d text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-gold" />
                <h3 className="text-3xl font-bold text-gradient">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-gold transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Eye, Heart, Star, Globe, Lightbulb } from 'lucide-react';
import logo from '@/assets/logo.png';

const values = [
  { icon: Star, title: 'Excellence', desc: 'Striving for the highest standards in education' },
  { icon: Globe, title: 'Global Perspective', desc: 'Preparing students for a connected world' },
  { icon: Heart, title: 'Character', desc: 'Building integrity and moral values' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Embracing creative and critical thinking' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 overflow-hidden gradient-section-1" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-sky opacity-30 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-mint opacity-30 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full glass text-gold font-medium text-sm mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            About AISB
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-navy mb-4">
            Shaping Future Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Adrak International School, Barka is committed to providing world-class education 
            that empowers students to achieve their full potential.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Image/Logo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative z-10 card-float p-8 text-center">
              <img src={logo} alt="AISB Logo" className="w-48 h-48 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-navy mb-2">Adrak International School</h3>
              <p className="text-gold font-medium">Barka, Oman</p>
              <div className="mt-6 flex justify-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">25+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
                <div className="w-px bg-border" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">K-12</p>
                  <p className="text-sm text-muted-foreground">Grade Levels</p>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-gold-dark/20 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Right - Mission & Vision */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Mission */}
            <div className="card-3d">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl gradient-gold">
                  <Target className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To provide a nurturing and stimulating learning environment that 
                    inspires academic excellence, fosters creativity, and develops 
                    responsible global citizens who contribute positively to society.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="card-3d">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl gradient-gold">
                  <Eye className="w-8 h-8 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To be a leading international school in Oman, recognized for 
                    educational excellence, innovative teaching methodologies, and 
                    producing well-rounded individuals ready for global challenges.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-center text-navy mb-10">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="card-3d text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-gold flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-foreground" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Library, FlaskConical, Dumbbell, Bus, Wifi, Utensils, Music, Monitor } from 'lucide-react';
import libraryImg from '@/assets/library.jpg';
import labImg from '@/assets/lab.jpg';
import sportsImg from '@/assets/sports.jpg';
import transportImg from '@/assets/transport.jpg';

const facilities = [
  { 
    icon: Library, 
    title: 'Modern Library', 
    desc: 'Extensive collection of books and digital resources',
    image: libraryImg
  },
  { 
    icon: FlaskConical, 
    title: 'Science Labs', 
    desc: 'State-of-the-art physics, chemistry & biology labs',
    image: labImg
  },
  { 
    icon: Dumbbell, 
    title: 'Sports Complex', 
    desc: 'Indoor & outdoor sports facilities',
    image: sportsImg
  },
  { 
    icon: Bus, 
    title: 'Transport', 
    desc: 'Safe & comfortable bus service across Barka',
    image: transportImg
  },
];

const additionalFacilities = [
  { icon: Monitor, title: 'Smart Classrooms', desc: 'Interactive digital learning' },
  { icon: Wifi, title: 'WiFi Campus', desc: 'High-speed internet access' },
  { icon: Utensils, title: 'Cafeteria', desc: 'Nutritious meals & snacks' },
  { icon: Music, title: 'Music Room', desc: 'Instruments & practice space' },
];

const FacilitiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="facilities" className="relative py-24 overflow-hidden gradient-section-3" ref={ref}>
      {/* Decorative */}
      <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full bg-peach opacity-30 blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-lavender opacity-30 blur-3xl" />

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
            World-Class Facilities
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-navy mb-4">
            Campus & Facilities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our campus is designed to provide the best learning environment 
            with modern facilities that support holistic education
          </p>
        </motion.div>

        {/* Main Facilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              className="card-float group overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                
                {/* Icon Badge */}
                <motion.div
                  className="absolute bottom-4 left-4 p-4 rounded-2xl glass-dark"
                  whileHover={{ scale: 1.1 }}
                >
                  <facility.icon className="w-8 h-8 text-gold" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy mb-2">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.desc}</p>
                
                {/* Animated underline on hover */}
                <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-gold to-gold-dark transition-all duration-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Facilities */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center text-navy mb-10">More Amenities</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFacilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                className="card-3d text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl gradient-gold flex items-center justify-center">
                  <facility.icon className="w-8 h-8 text-foreground" />
                </div>
                <h4 className="text-lg font-bold text-navy mb-1">{facility.title}</h4>
                <p className="text-sm text-muted-foreground">{facility.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesSection;

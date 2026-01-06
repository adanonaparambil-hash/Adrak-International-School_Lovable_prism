import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Users, Clock, Award } from 'lucide-react';

const classes = [
  { 
    grade: 'KG', 
    title: 'Kindergarten', 
    age: '3-5 years',
    students: 25,
    description: 'Play-based learning for early development',
    color: 'from-pink-300 to-rose-400'
  },
  { 
    grade: '1-2', 
    title: 'Primary Foundation', 
    age: '6-7 years',
    students: 30,
    description: 'Building fundamental literacy and numeracy skills',
    color: 'from-sky-300 to-blue-400'
  },
  { 
    grade: '3-5', 
    title: 'Primary', 
    age: '8-10 years',
    students: 30,
    description: 'Developing critical thinking and creativity',
    color: 'from-emerald-300 to-teal-400'
  },
  { 
    grade: '6-8', 
    title: 'Middle School', 
    age: '11-13 years',
    students: 35,
    description: 'Exploring diverse subjects and interests',
    color: 'from-amber-300 to-orange-400'
  },
  { 
    grade: '9-10', 
    title: 'Secondary', 
    age: '14-15 years',
    students: 35,
    description: 'Preparing for board examinations',
    color: 'from-violet-300 to-purple-400'
  },
  { 
    grade: '11-12', 
    title: 'Senior Secondary', 
    age: '16-17 years',
    students: 40,
    description: 'Specialization and university preparation',
    color: 'from-gold-light to-gold'
  },
];

const ClassesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="classes" className="relative py-24 overflow-hidden gradient-section-2" ref={ref}>
      {/* Decorative */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-mint opacity-30 blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-sky opacity-30 blur-3xl" />

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
            Our Classes
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-navy mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive education from Kindergarten to Grade 12 with 
            internationally recognized curriculum and personalized learning
          </p>
        </motion.div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.grade}
              className="card-float group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Header */}
              <div className={`h-32 bg-gradient-to-br ${cls.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-card/30">{cls.grade}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
                {/* Floating decoration */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full bg-card/20 backdrop-blur-sm"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${cls.color} text-card`}>
                    Grade {cls.grade}
                  </span>
                  <span className="text-sm text-muted-foreground">{cls.age}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{cls.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{cls.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Users size={16} className="text-gold" />
                    <span>{cls.students} students/class</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BookOpen size={16} className="text-gold" />
                    <span>Full Curriculum</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="mt-4 flex items-center gap-2 text-gold font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span>Learn More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-4">Ready to join our academic community?</p>
          <motion.a
            href="#contact"
            className="btn-primary inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply for Admission
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesSection;

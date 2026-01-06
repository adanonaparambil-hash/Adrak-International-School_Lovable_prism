import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, ArrowRight, Bell } from 'lucide-react';

const newsItems = [
  {
    date: 'Jan 5, 2026',
    title: 'New Academic Year Begins',
    excerpt: 'We welcome all students back for an exciting new academic year filled with opportunities.',
    category: 'Announcement',
    isNew: true,
  },
  {
    date: 'Dec 20, 2025',
    title: 'Annual Sports Day 2025',
    excerpt: 'Students showcased their athletic abilities in our grand annual sports event.',
    category: 'Events',
    isNew: false,
  },
  {
    date: 'Dec 15, 2025',
    title: 'Science Exhibition Success',
    excerpt: 'Our students won multiple awards at the regional science exhibition.',
    category: 'Achievement',
    isNew: false,
  },
  {
    date: 'Dec 10, 2025',
    title: 'Admission Open for 2026-27',
    excerpt: 'Applications are now being accepted for the upcoming academic session.',
    category: 'Admission',
    isNew: true,
  },
];

const NewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 overflow-hidden bg-background" ref={ref}>
      {/* Decorative */}
      <div className="absolute top-20 right-0 w-72 h-72 rounded-full bg-peach opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full bg-lavender opacity-30 blur-3xl" />

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
            <Bell className="inline w-4 h-4 mr-2" />
            Latest Updates
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-navy mb-4">
            News & Announcements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about the latest happenings at our school
          </p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.article
              key={item.title}
              className="card-float group cursor-pointer h-full"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Category & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    item.category === 'Announcement' ? 'bg-sky text-secondary-foreground' :
                    item.category === 'Events' ? 'bg-mint text-accent-foreground' :
                    item.category === 'Achievement' ? 'bg-peach text-secondary-foreground' :
                    'bg-lavender text-secondary-foreground'
                  }`}>
                    {item.category}
                  </span>
                  {item.isNew && (
                    <motion.span
                      className="px-2 py-1 rounded-full gradient-gold text-xs font-bold"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      NEW
                    </motion.span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-navy mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-muted-foreground mb-4 flex-grow">
                  {item.excerpt}
                </p>

                {/* Date & Read More */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    {item.date}
                  </div>
                  <motion.span
                    className="text-gold font-medium text-sm flex items-center gap-1"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight size={14} />
                  </motion.span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="btn-glass"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All News
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsSection;

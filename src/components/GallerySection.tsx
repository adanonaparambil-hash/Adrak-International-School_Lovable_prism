import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import libraryImg from '@/assets/library.jpg';
import labImg from '@/assets/lab.jpg';
import sportsImg from '@/assets/sports.jpg';
import transportImg from '@/assets/transport.jpg';

const galleryImages = [
  { src: heroBg, title: 'Campus View', category: 'Campus' },
  { src: libraryImg, title: 'Library', category: 'Facilities' },
  { src: labImg, title: 'Science Lab', category: 'Facilities' },
  { src: sportsImg, title: 'Sports Field', category: 'Sports' },
  { src: transportImg, title: 'Transport Fleet', category: 'Transport' },
  { src: heroBg, title: 'Main Building', category: 'Campus' },
];

const categories = ['All', 'Campus', 'Facilities', 'Sports', 'Transport'];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="relative py-24 overflow-hidden gradient-section-4" ref={ref}>
      {/* Decorative */}
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-lavender opacity-30 blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-sky opacity-30 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
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
            Photo Gallery
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-navy mb-4">
            Campus Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our vibrant campus and the memorable moments of our students
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'gradient-gold text-foreground shadow-glow'
                  : 'glass hover:bg-card/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={`${image.title}-${index}`}
                className="card-float overflow-hidden group cursor-pointer aspect-[4/3]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                layout
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative w-full h-full">
                  <motion.img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/60 transition-all duration-300 flex items-center justify-center">
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="w-14 h-14 mx-auto mb-3 rounded-full glass flex items-center justify-center">
                        <ZoomIn className="w-6 h-6 text-card" />
                      </div>
                      <h4 className="text-card font-bold text-lg">{image.title}</h4>
                      <p className="text-card/80 text-sm">{image.category}</p>
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full glass text-xs font-medium">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/90 backdrop-blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6 text-card" />
            </motion.button>
            <motion.img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';
import logo from '@/assets/logo.png';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Classes', href: '#classes' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy text-card overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-gold blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-light blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* School Info */}
          <div className="lg:col-span-1">
            <motion.div
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <img src={logo} alt="AISB Logo" className="w-16 h-16" />
              <div>
                <h3 className="font-bold text-lg">AISB</h3>
                <p className="text-sm text-card/70">Adrak International School</p>
              </div>
            </motion.div>
            <p className="text-card/80 text-sm mb-6">
              Nurturing tomorrow's leaders with excellence in education, 
              character building, and global perspectives since day one.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-gold/20 transition-colors"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    className="text-card/80 hover:text-gold transition-colors inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-1" />
                <div>
                  <a href="mailto:das@aisboman.com" className="block text-card/80 hover:text-gold transition-colors">
                    das@aisboman.com
                  </a>
                  <a href="mailto:info@aisboman.com" className="block text-card/80 hover:text-gold transition-colors">
                    info@aisboman.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-1" />
                <span className="text-card/80">+968 XXXX XXXX</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1" />
                <span className="text-card/80">Barka, Oman</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-card/80 text-sm mb-4">
              Subscribe to our newsletter for the latest news and updates.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl glass-dark border border-card/10 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all outline-none text-card placeholder:text-card/50"
              />
              <motion.button
                type="submit"
                className="w-full py-3 rounded-xl gradient-gold text-foreground font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-card/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-card/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Adrak International School, Barka. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-card/60 hover:text-gold text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-card/60 hover:text-gold text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full gradient-gold shadow-glow flex items-center justify-center z-40"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} className="text-foreground" />
      </motion.button>
    </footer>
  );
};

export default Footer;

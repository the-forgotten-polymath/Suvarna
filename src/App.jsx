import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  MessageCircle, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Menu,
  X,
  Gem,
  Heart,
  ShieldCheck,
  MapPin,
  Phone,
  Clock
} from 'lucide-react';

// Modules
import { REVIEWS } from './data/reviews';
import { GALLERY_IMAGES } from './data/gallery';
import GoldScheme from './components/GoldScheme';
import Specialties from './components/Specialties';

// --- SHARED UI ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-gold"
        >
          SUVARNA <span className="text-white font-light text-xl">JEWELLERS</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.3em] uppercase">
          {['Home', 'About', 'Collection', 'Scheme', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-gold transition-colors duration-300">
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/919634072072" 
            className="px-8 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-500 rounded-sm text-[9px]"
          >
            Enquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {['Home', 'About', 'Collection', 'Scheme', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white py-4 border-b border-white/5"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
          <source src="/assets/suvarna.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <motion.div style={{ y: y1, opacity }} className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <span className="text-gold uppercase tracking-[0.8em] text-xs font-bold mb-8 block font-poppins">EST. 2009 • RAIPUR, DEHRADUN</span>
          <h1 className="text-6xl md:text-[9vw] font-black mb-10 leading-[0.85] text-white tracking-tighter uppercase font-serif">
            THE ART OF <br /> <span className="text-gold italic font-playfair lowercase">purity</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed font-poppins">
            Crafting legacies with 22kt BIS Hallmarked gold and timeless Himalayan heritage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="https://wa.me/919634072072" className="px-14 py-6 bg-gold-gradient text-black font-extrabold rounded-full transition-all gold-glow-btn text-[10px] tracking-[0.3em] uppercase font-poppins">
              Book Consultation
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-40 bg-deep-bg text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 translate-x-8 translate-y-8"></div>
            <img src="/assets/unnamed.jpg" alt="Luxury Store" className="relative z-10 w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute top-1/2 -right-12 bg-black py-12 px-8 border border-gold/20 z-20 hidden md:block shadow-2xl">
              <p className="text-7xl font-bold leading-none text-gold tracking-tighter">15+</p>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold mt-4 text-white/50">Years of Trust</p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-gold font-bold uppercase tracking-[0.8em] text-[10px] block font-poppins">Our Legacy</span>
              <h2 className="text-5xl md:text-7xl leading-tight font-serif uppercase">Honesty Over <br /> <span className="text-gold italic font-playfair lowercase">everything</span></h2>
            </div>
            <p className="text-xl text-white/40 leading-relaxed font-light font-poppins">
              Suvarna Jewellers is Dehradun's repository of precious memories. We dedicate every craft to purity and the science of honest pricing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10 border-y border-white/5">
              <div className="flex items-start gap-6">
                <ShieldCheck className="text-gold shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2 font-serif uppercase">Certified Purity</h4>
                  <p className="text-white/30 text-sm font-poppins">22kt BIS Hallmarked Gold guaranteed.</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Heart className="text-gold shrink-0" size={32} />
                <div>
                  <h4 className="font-bold text-lg mb-2 font-serif uppercase">Personal Care</h4>
                  <p className="text-white/30 text-sm font-poppins">Customized designs for every family.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <section id="collection" className="py-40 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-gold uppercase tracking-[0.8em] text-[10px] block mb-6 font-bold">The Catalog</span>
          <h2 className="text-5xl md:text-8xl font-serif uppercase">Timeless <span className="text-gold italic font-playfair lowercase">collections</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="group relative overflow-hidden aspect-[4/5] bg-deep-bg border border-white/5">
              <img src={img.url} alt={img.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1500ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                <h4 className="text-2xl font-serif mb-2">{img.title}</h4>
                <p className="text-white/50 text-sm font-poppins">{img.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewsDisplay = () => {
  return (
    <section className="py-40 bg-deep-bg overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-24 text-center">
        <span className="text-gold font-bold uppercase tracking-[0.8em] text-[10px] block mb-6">Voice of Trust</span>
        <h2 className="text-5xl md:text-7xl font-serif uppercase">Authentic <span className="text-gold italic font-playfair lowercase">feedback</span></h2>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap py-10">
          {[...REVIEWS, ...REVIEWS].map((item, index) => (
            <div key={index} className="inline-block w-[600px] md:w-[800px] bg-black p-12 mx-8 card-luxury whitespace-normal border border-gold/5">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-2xl font-serif">{item.name.charAt(0)}</div>
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-widest uppercase font-serif">{item.name}</h4>
                    <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold font-poppins">{item.time}</p>
                  </div>
                </div>
                <div className="flex gap-1">{[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#D4AF37" className="text-gold opacity-80" />)}</div>
              </div>
              <p className="text-white/50 font-light leading-relaxed text-lg font-poppins italic">"{item.text}"</p>
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] text-gold font-bold uppercase tracking-[0.4em] font-poppins">Verified Reviewer</span>
                <Gem size={16} className="text-white/10" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-80 h-full bg-gradient-to-r from-deep-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-deep-bg to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-40 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl md:text-8xl font-serif mb-10 leading-tight uppercase font-black tracking-tighter text-white">Visit <br /> The <span className="text-gold italic font-playfair lowercase">flagship</span></h2>
              <p className="text-white/40 font-light text-xl leading-relaxed max-w-lg font-poppins">Experience the touch of pure gold at our रायपुर showroom.</p>
            </div>
            <div className="space-y-10">
              <div className="flex items-start gap-8">
                <MapPin className="text-gold mt-1" size={28} />
                <p className="text-white/60 text-lg font-poppins">Raipur Chowk, Chaki No.4, <br /> Dehradun, Uttarakhand</p>
              </div>
              <div className="flex items-start gap-8"><Phone className="text-gold mt-1" size={28} /><p className="text-white/60 text-lg font-poppins">+91 96340 72072</p></div>
              <div className="flex items-start gap-8"><Clock className="text-gold mt-1" size={28} /><p className="text-white/60 text-lg font-poppins">12:00 PM - 8:30 PM <br /> Open Every Day</p></div>
            </div>
          </div>
          <div className="h-[600px] border border-gold/10 p-2 shadow-2xl overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.646864197471!2d78.0434446!3d30.3013217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c293701265%3A0xc3f60879ee908bf4!2sSuvarna%20Jewellers!5e0!3m2!1sen!2sin!4v1711681234567!5m2!1sen!2sin" className="w-full h-full grayscale" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/5 relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-gold tracking-widest mb-4">SUVARNA</h2>
        <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] font-bold mb-10">Crafted with honor since 2009</p>
        <div className="flex justify-center gap-10 mb-16">
          <Instagram size={24} className="text-white/30 hover:text-white transition-colors cursor-pointer" />
          <Facebook size={24} className="text-white/30 hover:text-white transition-colors cursor-pointer" />
        </div>
        <p className="text-white/10 text-[9px] uppercase tracking-widest leading-loose">© 2024 Suvarna Jewellers. Raipur, Dehradun. <br /> All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Specialties />
      <About />
      <Gallery />
      <GoldScheme />
      <ReviewsDisplay />
      <Contact />
      <Footer />
      <motion.a href="https://wa.me/919634072072" className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-2xl flex items-center justify-center"><MessageCircle size={32} /></motion.a>
    </div>
  );
};

export default App;

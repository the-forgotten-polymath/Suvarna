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
  MapPin, 
  Phone, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Zap, 
  Award,
  TrendingUp,
  PiggyBank,
  Calendar,
  ChevronRight
} from 'lucide-react';

// Modules
import { REVIEWS } from './data/reviews';

// --- SHARED UI ---

const GoldDust = () => {
  return (
    <div className="gold-dust">
      {Array.from({ length: 40 }).map((_, i) => (
        <div
          key={i}
          className="gold-dust-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`,
            opacity: 0.1 + Math.random() * 0.3
          }}
        />
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappMsg = encodeURIComponent("Hello Pinky Jewellers! 👋 I'm browsing your website and would like to explore your latest collections. Could you please help me?");

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-2xl md:text-3xl font-serif font-bold tracking-[0.2em] text-gold group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all">PINKY</span>
          <span className="text-[10px] tracking-[0.4em] text-white/50 font-bold -mt-1 uppercase">Jewellers</span>
        </motion.div>

        <div className="hidden md:flex items-center space-x-12 text-[10px] font-bold tracking-[0.4em] uppercase">
          {['Home', 'Bridal', 'Collection', 'Scheme', 'Visit'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-gold transition-all duration-300 relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href={`https://wa.me/919012312336?text=${whatsappMsg}`} 
            target="_blank" rel="noopener noreferrer"
            className="px-10 py-3 bg-gold-gradient text-black font-extrabold hover:scale-105 transition-all duration-500 rounded-full shadow-gold"
          >
            Chat Now
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2">
            {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/98 backdrop-blur-2xl border-b border-gold/20 absolute top-full left-0 w-full z-[60]"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {['Home', 'Bridal', 'Collection', 'Scheme', 'Visit'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white py-4 border-b border-white/5 active:text-gold transition-colors"
                >
                  {item}
                </a>
              ))}
              <a 
                href={`https://wa.me/919012312336?text=${whatsappMsg}`} 
                target="_blank" rel="noopener noreferrer"
                className="py-5 bg-gold-gradient text-black font-bold uppercase tracking-widest rounded-2xl mt-4 shadow-xl"
              >
                Whatsapp Enquiry
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const whatsappMsg = encodeURIComponent("Hello Pinky Jewellers! 👋 I'm interested in a premium jewellery consultation as seen on your website.");

  return (
    <section id="home" className="relative h-screen min-h-[850px] w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05] brightness-[0.75]">
          <source src="/assets/pinky-jewellers.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-gold uppercase tracking-[0.8em] text-[10px] md:text-xs font-bold mb-10 block font-poppins drop-shadow-lg">
            Est. 2009 • Nehrugram Dehradun
          </span>
          <h1 className="text-5xl md:text-[8.5vw] font-serif font-black mb-10 leading-[0.8] text-white tracking-tight uppercase text-shadow-premium">
            Dehradun’s <span className="text-gold italic font-playfair lowercase block md:inline drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]">Most Trusted</span> <br /> Jeweller
          </h1>
          <p className="text-lg md:text-[1.6vw] font-medium text-white/90 max-w-4xl mx-auto mb-16 leading-relaxed font-poppins">
            800+ Happy Customers <span className="mx-6 text-gold/60">|</span> Premium Gold & Diamond Jewellery
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/919012312336?text=${whatsappMsg}`}
              target="_blank" rel="noopener noreferrer"
              className="w-full sm:w-auto px-14 py-6 bg-[#25D366] text-white font-black rounded-full transition-all flex items-center justify-center gap-4 shadow-[#25D366]/30 shadow-2xl hover:brightness-110 active:scale-95"
            >
              <MessageCircle size={28} />
              <span className="uppercase tracking-widest text-sm">Chat on WhatsApp</span>
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#visit" 
              className="w-full sm:w-auto px-14 py-6 border-2 border-gold/40 text-white font-black rounded-full transition-all flex items-center justify-center gap-4 backdrop-blur-md group hover:bg-gold hover:text-black hover:border-gold active:scale-95"
            >
              <MapPin size={24} className="text-gold group-hover:text-black transition-colors" />
              <span className="uppercase tracking-widest text-sm">Visit Store</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BridalCollection = () => {
  const bridalImages = [
    { url: "/assets/Screenshot 2026-03-29 113503.png", title: "Royal Choker Set" },
    { url: "/assets/Screenshot 2026-03-29 113527.png", title: "Handcrafted Nath" },
    { url: "/assets/Screenshot 2026-03-29 113514.png", title: "Bridal Bangles" },
    { url: "/assets/Screenshot 2026-03-29 113536.png", title: "Heritage Necklace" }
  ];

  return (
    <section id="bridal" className="py-40 bg-deep-bg text-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-28">
          <div className="section-header-accent mx-auto w-full max-w-md">
             <span className="text-gold font-bold uppercase tracking-[0.6em] text-[10px] shrink-0">Exquisite Craftsmanship</span>
          </div>
          <h2 className="text-5xl md:text-[6vw] font-serif uppercase mt-8 mb-8 leading-none">Bridal <span className="text-gold italic font-playfair lowercase block md:inline ml-2">Collection</span></h2>
          <p className="text-xl md:text-2xl text-white/50 font-light italic max-w-3xl leading-relaxed">
            "Make your special day unforgettable with handcrafted jewellery"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bridalImages.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative h-[550px] overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/5"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-[1.15] transition-transform duration-[2s] ease-out brightness-[0.85] group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-70"></div>
              <div className="absolute bottom-12 left-8 right-8 flex flex-col items-center translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-2xl font-serif mb-6 text-center tracking-wide">{img.title}</h3>
                <a 
                  href={`https://wa.me/919012312336?text=${encodeURIComponent(`Hi Pinky! 👋 I'm in love with your ${img.title} from the Bridal Collection. Could I get more details and pricing?`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 hover:bg-gold backdrop-blur-xl rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:text-black border border-white/10"
                >
                  View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductShowcase = () => {
  const categories = [
    { name: "Gold Jewellery", desc: "22kt BIS Hallmarked Purity", image: "/assets/Screenshot 2026-03-29 113536.png" },
    { name: "Diamond Jewellery", desc: "Eternal Brilliance & Grace", image: "/assets/diamond-collection.png" },
    { name: "Mangalsutra", desc: "Heritage Meets Modernity", image: "/assets/Screenshot 2026-03-29 113553.png" },
    { name: "Bangles", desc: "Mastercrafted for Perfection", image: "/assets/Screenshot 2026-03-29 113514.png" }
  ];

  return (
    <section id="collection" className="py-40 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-32">
          <div className="section-header-accent mx-auto w-full max-w-md">
             <span className="text-gold font-bold uppercase tracking-[0.6em] text-[10px] shrink-0">Handpicked Designs</span>
          </div>
          <h2 className="text-5xl md:text-[7vw] font-serif uppercase mt-8 leading-none">Product <span className="text-gold italic font-playfair lowercase">Showcase</span></h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1 }}
              viewport={{ once: true }} 
              className="flex flex-col md:flex-row items-center bg-deep-bg/40 border border-white/5 group overflow-hidden rounded-[2.5rem] hover:border-gold/20 transition-all duration-700 shadow-2xl"
            >
              <div className="w-full md:w-1/2 aspect-square overflow-hidden scale-[1.01]">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[2s] ease-out contrast-[1.05]" />
              </div>
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <h4 className="text-3xl font-serif mb-6 tracking-wide text-white group-hover:text-gold transition-colors">{cat.name}</h4>
                <p className="text-white/40 text-[15px] mb-12 font-poppins leading-relaxed font-light">{cat.desc}</p>
                <a 
                  href={`https://wa.me/919012312336?text=${encodeURIComponent(`Hi Pinky Jewellers! 👋 I saw your ${cat.name} collection on the website and would like to see some more designs in this category.`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-6 text-gold font-bold uppercase tracking-[0.3em] text-[10px] group/link w-fit"
                >
                  Enquire Now <div className="w-12 h-[1px] bg-gold scale-x-50 group-hover/link:scale-x-100 transition-transform origin-left"></div> <ArrowRight size={18} className="group-hover/link:translate-x-3 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GoldSchemeSection = () => {
  const whatsappMsg = encodeURIComponent("Hello Pinky! 👋 I'm very interested in your 'Swarna Samridhi' Gold Scheme. Could you please explain how I can start my savings journey?");
  const steps = [
    { icon: <Calendar size={32} />, title: "Open Account", desc: "Start with monthly installments from ₹2,000." },
    { icon: <PiggyBank size={32} />, title: "11 Months Tenure", desc: "Choose your fixed amount for 11 installments." },
    { icon: <ShieldCheck size={32} />, title: "Bonus Installment", desc: "We pay the 12th installment as a gift for you." }
  ];

  return (
    <section id="scheme" className="py-40 bg-deep-bg relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex-1 space-y-12">
            <div className="space-y-6">
              <span className="text-gold font-bold uppercase tracking-[0.8em] text-[10px] block font-poppins underline decoration-gold/30 underline-offset-8">Legacy Savings</span>
              <h2 className="text-5xl md:text-7xl leading-tight font-serif text-white uppercase tracking-tight">SWARNA <br /> <span className="text-gold italic font-playfair font-black">SAMRIDHI</span></h2>
              <p className="text-white/40 text-xl font-light font-poppins max-w-xl leading-relaxed">
                Unlock the door to your dream jewellery with our flexible gold savings plan. Smart, safe, and tailored for Dehradun's families.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }} className="flex items-center gap-8 p-10 bg-black/30 border border-white/5 rounded-3xl group hover:border-gold/30 transition-all duration-500">
                  <div className="w-16 h-16 rounded-full bg-gold/5 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white font-serif tracking-widest uppercase">{step.title}</h4>
                    <p className="text-white/30 text-sm font-poppins">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex-1 w-full max-w-2xl">
            <div className="relative p-12 lg:p-20 gold-border group overflow-hidden bg-black shadow-2xl rounded-[3rem] border border-gold/20">
              <div className="absolute -inset-20 bg-gold/5 rounded-full blur-[100px] opacity-50"></div>
              <div className="relative z-10 space-y-10">
                <div className="inline-block px-4 py-2 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-gold/20 font-poppins">Exclusive Reward</div>
                <h3 className="text-4xl md:text-5xl font-bold font-serif leading-tight text-white uppercase tracking-tight">THE 12TH <br /> INSTALLMENT IS <span className="text-gold italic font-playfair font-black">ON US.</span></h3>
                <p className="text-white/50 font-poppins text-lg leading-relaxed italic border-l-2 border-gold/40 pl-8">
                  "Join our legacy plan and get 100% bonus on your final installment. Perfect for weddings or long-term wealth."
                </p>
                <a href={`https://wa.me/919012312336?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-6 text-gold font-bold uppercase tracking-[0.4em] text-xs pt-8 border-t border-white/5 w-full hover:gap-10 transition-all font-poppins group"
                >
                  Join the Scheme <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  const selectedReviews = [
    { name: "Anshika Solanki", text: "Pinky jewellers have some of the best designs in town. Staff is very friendly and well mannered.", line: "Best jewellery store in town" },
    { name: "Sudhir Gusain", text: "I must say, I am thoroughly impressed! The design is elegant and timeless.", line: "Unmatched Craftsmanship" },
    { name: "Yogini Aisha", text: "Designs are breathtaking, stunning piece, quality is top notch. Highly recommended.", line: "Elegant designs and great service" }
  ];

  return (
    <section className="py-40 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-24">
          <div className="flex items-center justify-center gap-6 mb-12">
            <span className="text-6xl md:text-[8vw] font-black text-gold drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)] leading-none italic">4.9</span>
            <div className="flex flex-col items-start translate-y-2">
              <div className="flex text-gold gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={32} fill="#D4AF37" className="drop-shadow-lg" />)}
              </div>
              <span className="text-[14px] uppercase font-bold tracking-[0.5em] text-white/30 mt-3 font-serif">Verified Excellence</span>
            </div>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl md:text-5xl font-serif italic text-white/90 max-w-6xl border-l-[8px] border-gold pl-12 text-left leading-[1.2] py-6 mb-4 font-playfair bg-gradient-to-r from-gold/5 to-transparent rounded-r-3xl">
            “Trusted by 800+ happy customers in Dehradun for quality, honesty and elegant designs.”
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
          {selectedReviews.map((rev, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.15 }} viewport={{ once: true }} className="p-14 card-luxury text-center border-gold/10 group relative rounded-[3rem]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-black border border-gold/40 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.25)]">
                <ShieldCheck size={30} className="text-gold" />
              </div>
              <h5 className="font-serif text-gold uppercase tracking-[0.4em] text-xs mb-10 group-hover:translate-y-[-5px] transition-transform">{rev.line}</h5>
              <p className="text-white/60 font-light italic leading-relaxed text-xl mb-12 font-poppins">“{rev.text}”</p>
              <div className="flex flex-col items-center">
                <div className="w-12 h-[1px] bg-gold/30 mb-6"></div>
                <p className="text-[11px] uppercase font-bold tracking-[0.5em] text-white/30">— {rev.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisitStore = () => {
  const whatsappMsg = encodeURIComponent("Hello Pinky Jewellers! 👋 I'm planning to visit your store from the website. Could you please confirm the current status?");

  return (
    <section id="visit" className="py-40 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="space-y-16 text-left">
            <div>
              <span className="text-gold font-bold uppercase tracking-[0.8em] text-[10px] mb-8 block underline decoration-gold/40 underline-offset-[12px]">Visit Our Showroom</span>
              <h2 className="text-5xl md:text-[6.5vw] font-serif uppercase mb-10 leading-[0.9]">Explore <br /> <span className="text-gold italic font-playfair lowercase block mt-3">premium gold</span></h2>
              <p className="text-2xl text-white/50 font-light italic border-l-2 border-gold/20 pl-10 font-playfair">
                “Visit us today for exclusive designs and personalized consultation”
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="p-3 bg-gold/5 rounded-full group-hover:bg-gold/20 transition-all">
                    <MapPin className="text-gold shrink-0" size={30} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-[0.4em] text-gold mb-4 font-serif">Location</h5>
                    <p className="text-white/70 text-xl leading-relaxed font-light font-poppins">Near St. Johns Academy, <br /> zzlower Nehrugram Dehradun</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="p-3 bg-gold/5 rounded-full group-hover:bg-gold/20 transition-all">
                    <Phone className="text-gold shrink-0" size={30} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-[0.4em] text-gold mb-4 font-serif">Contact</h5>
                    <p className="text-white/70 text-xl font-light font-poppins leading-none">+91 90123 12336</p>
                  </div>
                </div>
              </div>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="p-3 bg-gold/5 rounded-full group-hover:bg-gold/20 transition-all">
                    <Clock className="text-gold shrink-0" size={30} />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase tracking-[0.4em] text-gold mb-4 font-serif">Hours Today</h5>
                    <p className="text-white/70 text-xl font-light font-poppins">12:00 PM - 8:30 PM <br /> <span className="text-gold/60">Open Every Day</span></p>
                  </div>
                </div>
                <div className="mt-8 flex flex-col gap-6">
                  <a href="https://www.google.com/maps/search/Pinky+Jewellers+Nehrugram+Dehradun" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between gap-6 px-10 py-6 bg-gold-gradient text-black rounded-[1.5rem] hover:scale-105 transition-all font-black text-xs uppercase tracking-[0.3em] shadow-[0_15px_40px_rgba(212,175,55,0.3)] active:scale-95"
                  >
                    View Map <ExternalLink size={20} />
                  </a>
                  <a href={`https://wa.me/919012312336?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-4 py-4 border border-white/10 rounded-2xl text-[10px] uppercase font-bold tracking-widest text-white/40 hover:text-gold transition-all hover:bg-white/5"
                  >
                    Notify Visit <Zap size={16} className="text-gold" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative group perspective-1000">
            <div className="absolute -inset-12 bg-gold/5 rounded-full blur-[90px] group-hover:bg-gold/10 transition-colors duration-1000"></div>
            <div className="relative h-[750px] rounded-[4rem] border-2 border-gold/10 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.646864197471!2d78.0434446!3d30.3013217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c293701265%3A0xc3f60879ee908bf4!2sPinky%20Jewellers!5e0!3m2!1sen!2sin!4v1711681234567!5m2!1sen!2sin" 
                className="w-full h-full grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-[2s] contrast-125 brightness-[0.9] hover:brightness-100 placeholder-gold" 
                style={{ border: 0 }} allowFullScreen="" loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-40 pb-20 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-24 mb-32">
          <div className="group cursor-default">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-gold tracking-[0.4em] mb-6 uppercase drop-shadow-lg group-hover:brightness-125 transition-all">PINKY</h2>
            <p className="text-white/20 text-[12px] uppercase tracking-[0.6em] font-bold font-poppins">Crafted with honor since 2009</p>
          </div>
          <div className="flex gap-16">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/30 hover:text-gold transition-all hover:scale-125 group flex flex-col items-center gap-2">
              <Instagram size={36} />
              <span className="text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Instagram</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/30 hover:text-gold transition-all hover:scale-125 group flex flex-col items-center gap-2">
              <Facebook size={36} />
              <span className="text-[8px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Facebook</span>
            </a>
          </div>
          <div className="font-poppins text-center md:text-right">
            <p className="text-white/40 text-xl font-light leading-relaxed">Near St. Johns Academy, <br /> zzlower Nehrugram Dehradun</p>
            <p className="text-gold font-bold tracking-[0.6em] mt-8 uppercase text-[12px]">Dehradun, Uttarakhand</p>
          </div>
        </div>
        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 opacity-20 text-[11px] uppercase tracking-[0.5em] font-bold">
          <p>© 2024 Pinky Jewellers. All Rights Reserved.</p>
          <div className="flex gap-16">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const whatsappUniversal = `https://wa.me/919012312336?text=${encodeURIComponent("Hello Pinky Jewellers! 👋 I'm browsing your premium collection on the website and would like some assistance with designs and pricing.")}`;

  return (
    <div className="bg-black selection:bg-gold selection:text-black">
      <GoldDust />
      <Navbar />
      <Hero />
      <BridalCollection />
      <ProductShowcase />
      <GoldSchemeSection />
      
      <section className="py-28 bg-black border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="flex items-center gap-10 group justify-center md:justify-start">
            <div className="p-6 bg-gold/5 rounded-[1.5rem] group-hover:bg-gold group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-700">
              <Zap size={36} className="text-gold group-hover:text-black transition-colors" />
            </div>
            <div>
              <h6 className="font-bold text-sm uppercase tracking-[0.4em] font-serif mb-2 text-white">Fast Delivery</h6>
              <p className="text-white/30 text-[12px] uppercase tracking-[0.4em] font-bold">Secured Handling</p>
            </div>
          </div>
          <div className="flex items-center gap-10 group justify-center md:justify-start">
            <div className="p-6 bg-gold/5 rounded-[1.5rem] group-hover:bg-gold group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-700">
              <Award size={36} className="text-gold group-hover:text-black transition-colors" />
            </div>
            <div>
              <h6 className="font-bold text-sm uppercase tracking-[0.4em] font-serif mb-2 text-white">Certified Gold</h6>
              <p className="text-white/30 text-[12px] uppercase tracking-[0.4em] font-bold">22kt BIS Hallmarked</p>
            </div>
          </div>
          <div className="flex items-center gap-10 group justify-center md:justify-start">
            <div className="p-6 bg-gold/5 rounded-[1.5rem] group-hover:bg-gold group-hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-700">
              <TrendingUp size={36} className="text-gold group-hover:text-black transition-colors" />
            </div>
            <div>
              <h6 className="font-bold text-sm uppercase tracking-[0.4em] font-serif mb-2 text-white">Smart Pricing</h6>
              <p className="text-white/30 text-[12px] uppercase tracking-[0.4em] font-bold">Fair Market Rates</p>
            </div>
          </div>
        </div>
      </section>

      <TrustSection />
      <VisitStore />
      <Footer />
      
      <motion.a 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        href={whatsappUniversal}
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-12 right-12 z-[100] bg-[#25D366] text-white p-8 rounded-full shadow-[0_25px_100px_rgba(37,211,102,0.5)] hover:scale-110 hover:-rotate-12 animate-gold-pulse transition-all active:scale-90 group flex items-center justify-center overflow-visible"
      >
        <MessageCircle size={42} className="drop-shadow-lg" />
        <span className="absolute right-full mr-10 bg-black/95 backdrop-blur-3xl px-10 py-5 rounded-[2rem] text-[12px] uppercase tracking-[0.5em] font-black whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all border border-gold/30 pointer-events-none translate-x-16 group-hover:translate-x-0 shadow-2xl scale-75 group-hover:scale-100">
          Enquire on WhatsApp
        </span>
      </motion.a>

      <div className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-3xl border-t border-gold/20 z-[90] flex md:hidden items-center justify-between p-6 px-16 rounded-t-[3rem] shadow-[0_-15px_60px_rgba(0,0,0,0.6)]">
        <a href="tel:+919012312336" className="flex flex-col items-center gap-3 active:scale-125 transition-transform group">
          <Phone size={28} className="text-gold" />
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/50 group-active:text-gold">Call</span>
        </a>
        <a href="#visit" className="flex flex-col items-center gap-3 active:scale-125 transition-transform group">
          <MapPin size={28} className="text-gold" />
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/50 group-active:text-gold">Visit</span>
        </a>
        <a href={whatsappUniversal} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 active:scale-125 transition-transform group">
          <MessageCircle size={28} className="text-[#25D366] shadow-sm" />
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-white/50 group-active:text-gold">Chat</span>
        </a>
      </div>
    </div>
  );
};

export default App;

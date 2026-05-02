import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Instagram, 
  Mail, 
  MessageCircle, 
  Camera, 
  User, 
  Calendar, 
  ShoppingBag, 
  Video, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

// --- CONFIGURABLE ASSETS ---
const IMAGERY = {
  hero: "https://lh3.googleusercontent.com/d/19gUp9_JimhD727DmA1ykVU1LdnoYzgNY",
  portfolio: [
    {
      url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200",
      category: "Street Photography",
      title: "Urban Echoes",
      type: "wide" // Pilih 'wide' atau 'tall'
    },
    {
      url: "https://images.unsplash.com/photo-1529139513055-07f909ef3d5c?auto=format&fit=crop&q=80&w=800",
      category: "Editorial",
      title: "Silence in Motion",
      type: "tall"
    },
    {
      url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
      category: "Events",
      title: "Golden Hour",
      type: "tall"
    },
    {
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1200",
      category: "Product Design",
      title: "Material Truth",
      type: "wide"
    }
    // Kamu bisa tambah foto lagi di bawah ini dengan format yang sama
  ],
  about: "https://lh3.googleusercontent.com/d/1umOwyL0616SyDFdbGCXtLOywj-onxOoM" 
};

const CONTACT_INFO = {
  whatsapp: "628877840047", // Ganti dengan nomor WhatsApp kamu
  email: "pashaalif042@gmail.com", // Ganti dengan email kamu
  instagram: "@alif.pasha_", // Ganti dengan username IG kamu
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<'en' | 'id'>('en');

  const t = {
    en: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Services',
      pricing: 'Pricing',
      about: 'About',
      contact: 'Contact',
      bookNow: 'Book Now',
      heroTagline1: 'Capturing Moments,',
      heroTagline2: 'Creating Stories',
      heroSub: 'Professional photography that makes people feel something. Experience the intersection of art and raw emotion.',
      startProject: 'Start Project',
      explore: 'Explore Portfolio',
      scroll: 'Scroll',
      works: 'Works',
      curated: 'Curated',
      visualDiary: 'Visual Diary',
      expertise: 'Our Expertise',
      crafting: 'Crafting',
      identity: 'Identity',
      throughLight: 'Through Light',
      serviceSub: 'Every project is a collaboration. I don\'t just take photos; I build visual ecosystems that resonate with your target audience.',
      satisfaction: 'Client Satisfaction',
      frames: 'Frames Delivered',
      investment: 'Investment',
      serviceList: 'Service List',
      portraiture: 'Portraiture',
      documentary: 'Documentary',
      commercial: 'Commercial',
      grad: 'Graduation / Personal',
      gradSub: '60 Min Session • 15 Retouched',
      prewed: 'Prewedding Narrative',
      prewedSub: 'Half Day • Unlimited Frames',
      eventDoc: 'Event Documentation',
      eventDocSub: '4 Hour Coverage • High-Res Delivery',
      eventVid: 'Event & Highlight Video',
      eventVidSub: 'Photo + 1 Min Cinematic Edit',
      reels: 'Cinematic Reels',
      reelsSub: 'Vertical optimized storytelling',
      prod: 'Product Photography',
      prodSub: 'Studio Lighting • Raw Perfection',
      social: 'Social Content Package',
      socialSub: '10 Posts Per Month • Vision Curation',
      customVision: 'Custom Vision?',
      customSub: 'Every project is unique. If you don\'t find what you need, let\'s build a custom plan together.',
      requestQuote: 'Request Custom Quote',
      visionary: 'The Visionary',
      aboutQuote: '"I prioritize quality over quantity and capture every moment with heart."',
      aboutDesc1: 'I’m Alif Pasha, a photographer from Pangkalpinang and a Business Digital student at FEB, who prioritizes quality over quantity.',
      aboutDesc2: 'I’m passionate about street photography and model photography, capturing authentic moments and crafted visuals. My goal is to make people happy through my photos—every shot is taken with heart and attention to detail.',
      location: 'Pangkalpinang',
      since: 'Since',
      collaborate: 'Collaborate',
      lets: "Let's",
      contactSub: 'Ready to elevate your vision? My calendar is currently open for late 2026 and early 2027 projects.',
      startChat: 'Start Chat',
      craftStory: "Let's craft your story.",
      contactFormSub: 'Ready to book a session or have questions? Reach out through any platform. Typically respond within 24 hours.',
      name: 'Name',
      email: 'Email',
      serviceTier: 'Service Tier',
      visionDesc: 'Vision Description',
      send: 'Initialize Connection',
      archived: 'Archives',
      privacy: 'Privacy',
      legal: 'Legal',
      curatedHeart: 'Curated with heart by Alif Pasha',
      assignment: 'Available for assignments across the archipelago.'
    },
    id: {
      home: 'Beranda',
      portfolio: 'Portofolio',
      services: 'Layanan',
      pricing: 'Harga',
      about: 'Tentang',
      contact: 'Kontak',
      bookNow: 'Pesan Sekarang',
      heroTagline1: 'Mengabadikan Momen,',
      heroTagline2: 'Menciptakan Cerita',
      heroSub: 'Fotografi profesional yang membuat orang merasakan sesuatu. Alami perpaduan antara seni dan emosi murni.',
      startProject: 'Mulai Proyek',
      explore: 'Jelajahi Portofolio',
      scroll: 'Gulir',
      works: 'Karya',
      curated: 'Terpilih',
      visualDiary: 'Buku Harian Visual',
      expertise: 'Keahlian Kami',
      crafting: 'Membangun',
      identity: 'Identitas',
      throughLight: 'Melalui Cahaya',
      serviceSub: 'Setiap proyek adalah kolaborasi. Saya tidak hanya memotret; saya membangun ekosistem visual yang beresonansi dengan audiens Anda.',
      satisfaction: 'Kepuasan Klien',
      frames: 'Frame Terkirim',
      investment: 'Investasi',
      serviceList: 'Daftar Layanan',
      portraiture: 'Potret',
      documentary: 'Dokumentasi',
      commercial: 'Komersial',
      grad: 'Wisuda / Personal',
      gradSub: 'Sesi 60 Menit • 15 Edit Foto',
      prewed: 'Narasi Prewedding',
      prewedSub: 'Setengah Hari • Frame Tanpa Batas',
      eventDoc: 'Dokumentasi Acara',
      eventDocSub: 'Liputan 4 Jam • Pengiriman Resolusi Tinggi',
      eventVid: 'Acara & Video Highlight',
      eventVidSub: 'Foto + Edit Sinematik 1 Menit',
      reels: 'Reels Sinematik',
      reelsSub: 'Bercerita yang dioptimalkan untuk vertikal',
      prod: 'Fotografi Produk',
      prodSub: 'Pencahayaan Studio • Kesempurnaan Murni',
      social: 'Paket Konten Sosial',
      socialSub: '10 Postingan Per Bulan • Kurasi Visi',
      customVision: 'Visi Khusus?',
      customSub: 'Setiap proyek unik. Jika Anda tidak menemukan yang dibutuhkan, mari buat rencana khusus bersama.',
      requestQuote: 'Minta Penawaran Khusus',
      visionary: 'Sang Visioner',
      aboutQuote: '"Saya mengutamakan kualitas daripada kuantitas dan mengabadikan setiap momen dengan hati."',
      aboutDesc1: 'Saya Alif Pasha, seorang fotografer dari Pangkalpinang dan mahasiswa Bisnis Digital di FEB, yang mengutamakan kualitas daripada kuantitas.',
      aboutDesc2: 'Saya sangat menyukai fotografi jalanan dan model, menangkap momen otentik dan visual yang apik. Tujuan saya adalah membuat orang bahagia melalui foto-foto saya—setiap jepretan diambil dengan hati dan detail.',
      location: 'Pangkalpinang',
      since: 'Sejak',
      collaborate: 'Kolaborasi',
      lets: "Mari",
      contactSub: 'Siap untuk meningkatkan visi Anda? Kalender saya saat ini terbuka untuk proyek akhir 2026 dan awal 2027.',
      startChat: 'Mulai Chat',
      craftStory: "Mari menyusun cerita Anda.",
      contactFormSub: 'Siap untuk memesan sesi atau ada pertanyaan? Hubungi melalui platform apa pun. Biasanya merespons dalam 24 jam.',
      name: 'Nama',
      email: 'Email',
      serviceTier: 'Tingkat Layanan',
      visionDesc: 'Deskripsi Visi',
      send: 'Mulai Koneksi',
      archived: 'Arsip',
      privacy: 'Privasi',
      legal: 'Legal',
      curatedHeart: 'Dikurasi dengan hati oleh Alif Pasha',
      assignment: 'Tersedia untuk penugasan di seluruh nusantara.'
    }
  }[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#' },
    { name: t.portfolio, href: '#portfolio' },
    { name: t.services, href: '#services' },
    { name: t.pricing, href: '#pricing' },
    { name: t.about, href: '#about' },
    { name: t.contact, href: '#contact' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const vision = formData.get('vision');

    const subject = `Project Inquiry: ${service} - from ${name}`;
    const body = `Hi Alif,\n\nI'm interested in the ${service} package.\n\nMy Vision:\n${vision}\n\nClient Email: ${email}\nClient Name: ${name}`;
    
    window.location.href = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-earth-beige selection:bg-earth-tan selection:text-white">
      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-4 lg:px-6",
        "bg-white/80 backdrop-blur-md shadow-sm",
        scrolled ? "py-2" : "py-3"
      )}>
        <div className="w-full flex justify-between items-center">
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="font-serif text-lg tracking-[0.15em] text-earth-black hover:text-earth-tan transition-colors"
            >
              konikiwai
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-16 items-center flex-shrink">
            <div className="flex gap-10 items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-[9px] font-bold transition-colors uppercase tracking-[0.2em] text-earth-black/60 hover:text-earth-black whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            {/* Language Toggle */}
            <div className="flex gap-2 border-l border-earth-brown/10 pl-6">
              <button 
                onClick={() => setLang('en')}
                className={cn("text-[9px] font-bold transition-colors cursor-pointer", lang === 'en' ? "text-earth-black" : "text-earth-black/30")}
              >
                EN
              </button>
              <span className="text-earth-black/10 text-[9px]">/</span>
              <button 
                onClick={() => setLang('id')}
                className={cn("text-[9px] font-bold transition-colors cursor-pointer", lang === 'id' ? "text-earth-black" : "text-earth-black/30")}
              >
                ID
              </button>
            </div>

            <a 
              href={`mailto:${CONTACT_INFO.email}`} 
              className="bg-earth-black text-white px-6 py-2 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all hover:bg-earth-brown whitespace-nowrap"
            >
              {t.bookNow}
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-earth-black transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-earth-beige shadow-xl md:hidden overflow-hidden border-t border-earth-brown/10"
            >
              <div className="flex flex-col p-8 space-y-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-lg font-serif italic tracking-wide"
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href={`mailto:${CONTACT_INFO.email}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-earth-black text-white p-5 text-center rounded-2xl font-bold uppercase tracking-widest text-xs"
                >
                  {t.bookNow}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section - 21:9 Cinematic Panoramic Frame */}
      <section className="relative w-full pt-24 pb-12 px-4 lg:px-6">
        <div className="relative w-full aspect-[21/9] min-h-[40vh] md:min-h-0 mx-auto overflow-hidden rounded-[2rem] md:rounded-[4rem] flex items-center justify-center shadow-2xl bg-earth-black">
          <div className="absolute inset-0 z-0">
            <motion.div 
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img 
                src={IMAGERY.hero} 
                alt="Photography Background" 
                className="w-full h-full object-cover brightness-[0.6] contrast-[1.1]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-earth-black/80 via-transparent to-earth-black/60"></div>
            <div className="absolute inset-0 bg-earth-black/5 backdrop-blur-[1px]"></div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 text-center px-4 md:px-12 max-w-5xl"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-earth-beige/60 uppercase tracking-[0.6em] text-[7px] md:text-[9px] mb-3 md:mb-5 block font-bold"
            >
              Alif Pasha Presents
            </motion.span>
            <h1 className="text-3xl md:text-6xl lg:text-8xl text-white mb-4 md:mb-8 leading-[0.85] tracking-tighter">
              {t.heroTagline1}<br />{t.crafting} <span className="italic font-light">{t.works}</span>
            </h1>
            <p className="text-earth-beige/80 text-[9px] md:text-sm mb-6 md:mb-10 max-w-lg mx-auto font-light leading-relaxed tracking-widest opacity-70 hidden sm:block">
              {t.heroSub}
            </p>
            <div className="flex flex-row gap-4 md:gap-6 justify-center items-center">
              <a 
                href="#contact" 
                className="bg-white text-earth-black px-6 md:px-10 py-3 md:py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[8px] md:text-[9px] hover:bg-earth-beige transition-all transform hover:-translate-y-1 shadow-lg"
              >
                {t.startProject}
              </a>
              <a 
                href="#portfolio" 
                className="group flex items-center gap-2 md:gap-3 text-white text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold"
              >
                {t.explore}
                <span className="w-8 h-px bg-white group-hover:w-12 transition-all duration-500"></span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-earth-tan uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">{t.visualDiary}</span>
              <h2 className="text-5xl md:text-7xl leading-none">{t.curated} <span className="italic font-light">{t.works}</span></h2>
            </div>
            <div className="flex gap-4">
              {['All', 'Street', 'Fashion', 'Life'].map((cat) => (
                <button key={cat} className="text-[10px] uppercase tracking-widest font-bold text-earth-brown/40 hover:text-earth-brown transition-colors">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
            {IMAGERY.portfolio.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl",
                  item.type === "wide" ? "lg:col-span-8 aspect-[16/9]" : "lg:col-span-4 aspect-[3/4]"
                )}
              >
                <img 
                  src={item.url} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity p-8 md:p-12 flex flex-col justify-end">
                  <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-widest mb-2 font-bold underline underline-offset-8">
                    {item.category}
                  </p>
                  <h3 className="text-2xl md:text-3xl text-white italic font-light">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="text-[10px] font-bold uppercase tracking-[0.4em] border-b border-earth-brown pb-2 hover:text-earth-tan hover:border-earth-tan transition-all">View Full Archive</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-earth-tan uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">{t.expertise}</span>
              <h2 className="text-5xl md:text-7xl leading-none mb-8">{t.crafting} <br />{t.identity} <br /><span className="italic font-light">{t.throughLight}</span></h2>
              <p className="text-earth-brown/60 max-w-md leading-relaxed tracking-wide mb-12">
                {t.serviceSub}
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="font-serif text-3xl mb-2 italic">98%</h4>
                  <p className="text-[10px] uppercase tracking-widest text-earth-brown/40 font-bold">{t.satisfaction}</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl mb-2 italic">1k+</h4>
                  <p className="text-[10px] uppercase tracking-widest text-earth-brown/40 font-bold">{t.frames}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { 
                  icon: <User size={20} />, 
                  title: t.grad, 
                  desc: t.gradSub 
                },
                { 
                  icon: <Calendar size={20} />, 
                  title: t.prewed, 
                  desc: t.prewedSub 
                },
                { 
                  icon: <Camera size={20} />, 
                  title: t.eventDoc, 
                  desc: t.eventDocSub 
                },
                { 
                  icon: <ShoppingBag size={20} />, 
                  title: t.prod, 
                  desc: t.prodSub 
                }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex gap-8 p-8 rounded-3xl hover:bg-earth-beige transition-all duration-500 cursor-pointer border border-transparent hover:border-earth-brown/5"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-earth-beige rounded-2xl flex items-center justify-center group-hover:bg-earth-black group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm text-earth-brown/50 leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 lg:px-12 bg-earth-cream">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-earth-tan uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">{t.investment}</span>
            <h2 className="text-5xl md:text-7xl leading-none">{t.lets} <span className="italic font-light">{t.serviceList}</span></h2>
          </div>

          <div className="space-y-16">
            {/* Category: Portraits */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-earth-brown/40 mb-8 border-b border-earth-brown/10 pb-4">01. {t.portraiture}</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-end group">
                  <div className="flex flex-col">
                    <p className="text-2xl font-serif italic group-hover:text-earth-tan transition-colors">{t.grad}</p>
                    <p className="text-[10px] uppercase tracking-widest text-earth-brown/40 mt-2">{t.gradSub}</p>
                  </div>
                  <div className="flex-grow border-b border-dotted border-earth-brown/20 mx-4 mb-2"></div>
                  <p className="font-serif text-xl">Rp 150k — 300k</p>
                </div>
                <div className="flex justify-between items-end group">
                  <div className="flex flex-col">
                    <p className="text-2xl font-serif italic group-hover:text-earth-tan transition-colors">{t.prewed}</p>
                    <p className="text-[10px] uppercase tracking-widest text-earth-brown/40 mt-2">{t.prewedSub}</p>
                  </div>
                  <div className="flex-grow border-b border-dotted border-earth-brown/20 mx-4 mb-2"></div>
                  <p className="font-serif text-xl">Rp 500k — 1M</p>
                </div>
              </div>
            </div>

            {/* Category: Documentary */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-earth-brown/40 mb-8 border-b border-earth-brown/10 pb-4">02. {t.documentary}</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-end group">
                  <div className="flex flex-col">
                    <p className="text-2xl font-serif italic group-hover:text-earth-tan transition-colors">{t.eventDoc}</p>
                    <p className="text-[10px] uppercase tracking-widest text-earth-brown/40 mt-2">{t.eventDocSub}</p>
                  </div>
                  <div className="flex-grow border-b border-dotted border-earth-brown/20 mx-4 mb-2"></div>
                  <p className="font-serif text-xl">Rp 300k — 800k</p>
                </div>
                <div className="flex justify-between items-end group">
                  <div className="flex flex-col">
                    <p className="text-2xl font-serif italic group-hover:text-earth-tan transition-colors">{t.eventVid}</p>
                    <p className="text-[10px] uppercase tracking-widest text-earth-brown/40 mt-2">{t.eventVidSub}</p>
                  </div>
                  <div className="flex-grow border-b border-dotted border-earth-brown/20 mx-4 mb-2"></div>
                  <p className="font-serif text-xl">Rp 700k — 1.5M</p>
                </div>
                <div className="flex justify-between items-end group">
                  <div className="flex flex-col">
                    <p className="text-2xl font-serif italic group-hover:text-earth-tan transition-colors">{t.reels}</p>
                    <p className="text-[10px] uppercase tracking-widest text-earth-brown/40 mt-2">{t.reelsSub}</p>
                  </div>
                  <div className="flex-grow border-b border-dotted border-earth-brown/20 mx-4 mb-2"></div>
                  <p className="font-serif text-xl">Rp 200k — 500k</p>
                </div>
              </div>
            </div>

            {/* Category: Commercial */}
            <div>
              <h3 className="text-[10px] uppercase tracking-[0.5em] font-bold text-earth-brown/40 mb-8 border-b border-earth-brown/10 pb-4">03. {t.commercial}</h3>
              <div className="space-y-8">
                <div className="flex justify-between items-end group">
                  <div className="flex flex-col">
                    <p className="text-2xl font-serif italic group-hover:text-earth-tan transition-colors">{t.prod}</p>
                    <p className="text-[10px] uppercase tracking-widest text-earth-brown/40 mt-2">{t.prodSub}</p>
                  </div>
                  <div className="flex-grow border-b border-dotted border-earth-brown/20 mx-4 mb-2"></div>
                  <p className="font-serif text-xl">Rp 50k <span className="text-[10px] uppercase">/prod</span></p>
                </div>
                <div className="flex justify-between items-end group">
                  <div className="flex flex-col">
                    <p className="text-2xl font-serif italic group-hover:text-earth-tan transition-colors">{t.social}</p>
                    <p className="text-[10px] uppercase tracking-widest text-earth-brown/40 mt-2">{t.socialSub}</p>
                  </div>
                  <div className="flex-grow border-b border-dotted border-earth-brown/20 mx-4 mb-2"></div>
                  <p className="font-serif text-xl">Rp 250k — 600k</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 p-12 bg-earth-black rounded-3xl text-center">
            <h4 className="text-2xl text-white mb-4 italic font-light">{t.customVision}</h4>
            <p className="text-white/60 mb-8 text-sm">{t.customSub}</p>
            <a href="#contact" className="inline-block bg-white text-earth-black px-10 py-4 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-earth-tan hover:text-white transition-all">{t.requestQuote}</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 lg:px-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <div className="w-full md:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img src={IMAGERY.about} className="rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 w-full object-cover aspect-[4/5]" />
            </motion.div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-earth-beige rounded-full blur-[100px] opacity-40 z-0"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-earth-tan/10 rounded-full blur-2xl"></div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-earth-tan uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">{t.visionary}</span>
            <h2 className="text-6xl md:text-8xl leading-[0.8] mb-12 italic font-light">Alif <br />Pasha</h2>
            <div className="space-y-8 max-w-lg">
              <p className="text-2xl font-serif italic text-earth-black/80 leading-snug">
                {t.aboutQuote}
              </p>
              <p className="text-earth-brown/60 leading-relaxed tracking-wide">
                {t.aboutDesc1}
              </p>
              <p className="text-earth-brown/60 leading-relaxed tracking-wide">
                {t.aboutDesc2}
              </p>
              <div className="pt-10 flex gap-12 border-t border-earth-brown/10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-earth-brown/40 mb-2">{t.location}</p>
                  <p className="font-serif italic">Pangkalpinang, ID</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-earth-brown/40 mb-2">{t.since}</p>
                  <p className="font-serif italic">2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 lg:px-12 bg-earth-black text-white selection:bg-white selection:text-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-32">
            <div className="w-full lg:w-1/2">
              <span className="text-earth-tan uppercase tracking-[0.3em] text-[10px] font-bold mb-4 block">{t.contact}</span>
              <h2 className="text-5xl md:text-8xl leading-none mb-12">{t.lets} <br />{t.collaborate}</h2>
              <p className="text-white/40 mb-16 max-w-xs leading-relaxed">
                {t.contactSub}
              </p>
              
              <div className="space-y-12">
                <a href={`https://wa.me/${CONTACT_INFO.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center group-hover:bg-earth-tan group-hover:text-white transition-all transform group-hover:rotate-12">
                    <MessageCircle size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">WhatsApp</h4>
                    <p className="text-2xl font-serif flex items-center gap-2 group-hover:text-earth-tan transition-colors">{t.startChat} <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" /></p>
                  </div>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center group-hover:bg-earth-tan group-hover:text-white transition-all transform group-hover:rotate-[-12deg]">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">{t.email}</h4>
                    <p className="text-2xl font-serif group-hover:text-earth-tan transition-colors">{CONTACT_INFO.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-12 bg-white/5 p-12 rounded-[40px] border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">{t.name}</label>
                    <input name="name" required type="text" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors" placeholder={t.name} />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">{t.email}</label>
                    <input name="email" required type="email" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors" placeholder="hello@mail.com" />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">{t.serviceTier}</label>
                  <select name="service" className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors appearance-none">
                    <option className="bg-earth-black" value={t.grad}>{t.grad}</option>
                    <option className="bg-earth-black" value={t.prewed}>{t.prewed}</option>
                    <option className="bg-earth-black" value={t.eventDoc}>{t.eventDoc}</option>
                    <option className="bg-earth-black" value={t.prod}>{t.prod}</option>
                  </select>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">{t.visionDesc}</label>
                  <textarea name="vision" required rows={4} className="w-full bg-transparent border-b border-white/10 py-4 focus:outline-none focus:border-white transition-colors resize-none" placeholder={t.visionDesc}></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black py-6 rounded-full font-bold uppercase tracking-[0.4em] text-xs hover:bg-earth-tan hover:text-white transition-all shadow-2xl">{t.send}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <footer className="py-20 px-6 lg:px-12 bg-earth-black border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="max-w-xs">
            <h2 className="font-serif text-2xl tracking-[0.1em] mb-6">konikiwai</h2>
            <p className="text-white/40 text-xs leading-loose tracking-widest uppercase">
              Pangkalpinang, Indonesia <br />
              {t.assignment}
            </p>
          </div>
          <div className="flex flex-col items-end gap-6">
            <div className="flex gap-8">
              <a href="#" className="text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold">{t.archived}</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold">{t.privacy}</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors uppercase tracking-[0.3em] text-[10px] font-bold">{t.legal}</a>
            </div>
            <p className="text-white/20 text-[20px] uppercase tracking-[0.6em]">konikiwai &copy; {new Date().getFullYear()} • {t.curatedHeart}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors group"
      >
        <MessageCircle size={28} fill="currentColor" className="text-white" />
        <span className="absolute right-full mr-4 bg-white text-earth-black px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none border border-earth-brown/10">
          {lang === 'en' ? 'Chat on WhatsApp' : 'Hubungi via WhatsApp'}
        </span>
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none"></span>
      </motion.a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

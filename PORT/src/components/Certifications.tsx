import React, { useState, useEffect } from 'react';
import { Award, Star, CheckCircle, Trophy, Eye, ExternalLink, X, ChevronLeft, ChevronRight, Medal } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ComponentType<{ className?: string }>;
  thumbnail: string;
  certificateUrl: string;
  description: string;
}

export default function Certifications() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(3);

  const certifications: Certification[] = [
    {
      title: 'Science Exhibition - 3rd Position',
      issuer: 'RKDF University Ranchi',
      date: "2023",
      icon: Award,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/cef%20thumb/WhatsApp%20Image%202025-07-06%20at%201.16.01%20PM.jpeg?updatedAt=1763749773878',
      certificateUrl: 'https://drive.google.com/file/d/1Ehrb7O4D67kXjHA-txyhghNIWYomlMS1/view?usp=sharing',
      description: "Awarded for participating in Science Exhibition on Engineer's Day 2023, achieving 3rd position."
    },
    {
      title: 'AutoCAD 2D & 3D Modelling',
      issuer: 'RKDF University',
      date: 'Oct 2023',
      icon: Star,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/cef%20thumb/WhatsApp%20Image%202025-07-06%20at%201.21.00%20PM.jpeg?updatedAt=1763749773812',
      certificateUrl: 'https://drive.google.com/file/d/1KKaNKiWPJiozJduXwD1LM-f8VIAadjPl/view?usp=drive_link',
      description: 'Completed 5-day comprehensive workshop on 2D & 3D Modelling using AutoCAD.'
    },
    {
      title: 'AI Tools Workshop',
      issuer: 'Be10x',
      date: 'Nov 2023',
      icon: CheckCircle,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/cef%20thumb/WhatsApp%20Image%202025-07-06%20at%201.25.18%20PM.jpeg?updatedAt=1763749773902',
      certificateUrl: 'https://drive.google.com/file/d/1BCtH9_w2UWOIOCpxoWXrB_cSUMq-PG72/view?usp=drive_link',
      description: 'Completed AI Tools Workshop focusing on artificial intelligence applications.'
    },
    {
      title: 'AMPTIC 2024 - NIT Jamshedpur',
      issuer: 'NIT Jamshedpur',
      date: 'Jul 2024',
      icon: Trophy,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/cef%20thumb/WhatsApp%20Image%202025-07-06%20at%201.29.02%20PM.jpeg?updatedAt=1763749773812',
      certificateUrl: 'https://drive.google.com/file/d/1W-L-aHz9khblKZtjjLEZbggGNNMsbDPH/view?usp=drive_link',
      description: 'National Workshop on Advancement in Minerals Processing Techniques.'
    },
    {
      title: 'Oracle Certified Foundations',
      issuer: 'Oracle University',
      date: 'Sep 2025',
      icon: Trophy,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/cef%20thumb/orc.png',
      certificateUrl: 'https://drive.google.com/file/d/1iwsk-MJ1UDsEhqfgEOX0qTmUUDr6tP5j/view?usp=drive_link',
      description: 'Oracle Certified Foundations Associate certification.'
    },
    {
      title: 'OCI Generative AI Professional',
      issuer: 'Oracle University',
      date: 'Oct 2025',
      icon: Star,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/cef%20thumb/Screenshot%202025-10-24%20230504.png',
      certificateUrl: 'https://drive.google.com/file/d/1eBlfZflDzcopSc7nGuwlNWzL21FGQ7lT/view?usp=drive_link',
      description: 'Certified in building generative AI solutions on Oracle Cloud Infrastructure.'
    },
    {
      title: 'Postman API Student Expert',
      issuer: 'Postman',
      date: 'Nov 2025',
      icon: CheckCircle,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/cef%20thumb/Screenshot%202025-11-01%20013157.png',
      certificateUrl: 'https://drive.google.com/file/d/1CrWwaQ9iFbd9t1p9mDGGj6Dhm6KzrsTF/view?usp=drive_link',
      description: 'API Fundamentals Student Expert certification from Postman.'
    },
    {
      title: 'Full Stack Python Development',
      issuer: 'Shashi Infotech',
      date: 'Mar 2025',
      icon: Award,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/cef%20thumb/WhatsApp%20Image%202025-07-06%20at%201.55.28%20PM.jpeg?updatedAt=1763749774031',
      certificateUrl: 'https://drive.google.com/file/d/1vsQ_VGiL9OccM9XIgcNim9JtWE-DmkPf/view?usp=drive_link',
      description: 'Full Stack Web Development training in Python.'
    },
    {
      title: 'Google Startup School',
      issuer: 'Google for Startups',
      date: 'Dec 2025',
      icon: Star,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/cef%20thumb/Screenshot%202025-12-11%20202305.png',
      certificateUrl: 'https://drive.google.com/file/d/1ktZOUjKF7oEuMy7SAw0gtmT1qIFoOq8p/view?usp=drive_link',
      description: 'Prompt to Prototype program by Google for Startups.'
    },

    {
      title: 'Geeks for Geeks Campus Mantri',
      issuer: 'Geeks for Geeks',
      date: 'Jan 2026',
      icon: Award,
      thumbnail: 'https://ik.imagekit.io/ioyklag3bb/download.jpg',
      certificateUrl: 'https://drive.google.com/file/d/1sgs6FSOAA4Iqt8EIBkh7Uyrwm_7b9HCl/view?usp=drive_link',
      description: 'Geeks for Geeks Campus Mantri program.'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(certifications.length / itemsPerView);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const getCurrentCertifications = () => {
    const startIndex = currentSlide * itemsPerView;
    return certifications.slice(startIndex, startIndex + itemsPerView);
  };

  const handleViewCert = (cert: Certification) => {
    setSelectedCert(cert);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showModal]);

  return (
    <section id="certifications" className="py-20 sm:py-24 lg:py-32 section-space relative overflow-hidden">
      <div className="absolute inset-0 data-grid opacity-30"></div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 holo-card rounded-full mb-6">
            <Medal className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-rajdhani tracking-widest text-cyan-400 uppercase">Achievement Log</span>
          </div>

          <h2 className="section-title-space font-orbitron gradient-text-aurora mb-4">
            CERTIFICATIONS
          </h2>
          <p className="section-subtitle-space">
            Validated Skills & Completed Training Protocols
          </p>
        </div>

        {/* Slider */}
        <div className="mb-12">
          <div>
            <div
              className="grid gap-6"
              style={{ gridTemplateColumns: `repeat(${itemsPerView}, 1fr)` }}
            >
              {getCurrentCertifications().map((cert, index) => {
                const Icon = cert.icon;

                return (
                  <div
                    key={`${currentSlide}-${index}`}
                    className="hud-border holo-card rounded-2xl overflow-hidden 
                      transition-all duration-500 tilt-effect hover:neon-glow group
                      animate-scale-in flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Thumbnail */}
                    <div className="relative h-32 sm:h-36 overflow-hidden">
                      <img
                        src={cert.thumbnail}
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/50 to-transparent"></div>

                      {/* Verified Badge */}
                      <div className="absolute top-3 right-3 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                        <span className="flex items-center gap-1 text-xs font-rajdhani text-green-400 tracking-wider">
                          <CheckCircle className="w-3 h-3" />
                          VERIFIED
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 sm:p-5 flex-1 flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 holo-card rounded-xl flex items-center justify-center neon-border flex-shrink-0">
                          <Icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm sm:text-base font-orbitron text-white mb-1 line-clamp-2">
                            {cert.title}
                          </h3>
                          <p className="text-xs font-rajdhani text-gray-500 tracking-wider">{cert.issuer}</p>
                          <p className="text-xs font-rajdhani text-cyan-400/60">{cert.date}</p>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 mt-auto">
                        <button
                          onClick={() => handleViewCert(cert)}
                          className="flex-1 py-2 space-btn-primary rounded-lg flex items-center justify-center gap-1.5
                            text-xs font-rajdhani tracking-wider"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          DETAILS
                        </button>
                        <a
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 holo-card neon-border rounded-lg flex items-center justify-center
                            text-cyan-400 hover:neon-glow transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Navigation - Side by Side */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0618]/80 backdrop-blur rounded-xl border border-cyan-500/30
                  hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300 
                  flex items-center justify-center"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </button>

              <div className="flex space-x-2">
                {[...Array(totalSlides)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentSlide
                      ? 'bg-cyan-400 shadow-[0_0_10px_#00f5ff] scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0a0618]/80 backdrop-blur rounded-xl border border-cyan-500/30
                  hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all duration-300 
                  flex items-center justify-center"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 hud-border holo-card rounded-full">
            <Trophy className="w-5 h-5 text-yellow-400" />
            <span className="font-orbitron text-white">
              <span className="neon-text">{certifications.length}+</span>
              <span className="text-gray-400 ml-2 font-rajdhani tracking-wider">ACHIEVEMENTS UNLOCKED</span>
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="space-modal-overlay absolute inset-0" onClick={closeModal}></div>
          <div className="space-modal relative rounded-2xl p-6 sm:p-8 max-w-lg w-full max-h-[85vh] overflow-y-auto animate-scale-in hud-border">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 holo-card rounded-lg text-gray-400 hover:text-cyan-400 transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 holo-card rounded-2xl flex items-center justify-center neon-border">
                <selectedCert.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-orbitron gradient-text-space mb-2">{selectedCert.title}</h3>
              <p className="text-gray-400 font-rajdhani">{selectedCert.issuer}</p>
              <p className="text-cyan-400/60 font-rajdhani text-sm">{selectedCert.date}</p>
            </div>

            <p className="text-gray-300 font-exo mb-6 text-center">{selectedCert.description}</p>

            <div className="flex gap-3">
              <a
                href={selectedCert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 space-btn-primary rounded-xl flex items-center justify-center gap-2 font-rajdhani tracking-wider"
              >
                <ExternalLink className="w-4 h-4" />
                VIEW CERTIFICATE
              </a>
              <button
                onClick={closeModal}
                className="px-6 py-3 holo-card neon-border rounded-xl text-gray-300 font-rajdhani tracking-wider hover:bg-white/5 transition-all"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
    </section>
  );
}
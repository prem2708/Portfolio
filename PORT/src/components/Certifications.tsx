import React, { useState, useRef, useEffect } from 'react';
import { Award, Star, CheckCircle, Trophy, Eye, ExternalLink, X } from 'lucide-react';

export default function Certifications() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const certifications = [
    {
      title: 'Certificate of Appreciation - Science Exhibition',
      issuer: 'RKDF University Ranchi',
      date: "2023 (Engineer's Day)",
      icon: Award,
      color: 'cyan',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.16.01%20PM.jpeg?updatedAt=1751788085197',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef%201.pdf?updatedAt=1751787670888',
      description: "Awarded for participating in the Science Exhibition held on Engineer's Day 2023 and achieving 3rd position. This certificate recognizes outstanding participation and achievement in the university annual science exhibition, demonstrating technical skills and innovative thinking in engineering projects."
    },
    {
      title: 'Certificate of Participation - 2D & 3D Modelling using AutoCAD',
      issuer: 'RKDF University Ranchi',
      date: 'October 14-19, 2023',
      icon: Star,
      color: 'purple',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.21.00%20PM.jpeg?updatedAt=1751788341912',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef2.pdf?updatedAt=1751787670965',
      description: 'Successfully completed a comprehensive 5-day workshop on 2D & 3D Modelling using AutoCAD. This intensive training program covered advanced computer-aided design techniques, 3D modeling principles, and practical applications in engineering design. The workshop enhanced technical skills in digital design and modeling software essential for modern engineering projects.'
    },
    {
      title: 'Certificate of Completion - AI Tools Workshop',
      issuer: 'Be10x',
      date: 'November 11, 2023',
      icon: CheckCircle,
      color: 'pink',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.25.18%20PM.jpeg?updatedAt=1751788622413',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef%203.pdf?updatedAt=1751787670300',
      description: 'Successfully completed a comprehensive 1-day AI Tools Workshop focused on artificial intelligence applications and tools. This intensive workshop provided hands-on experience with cutting-edge AI technologies, machine learning tools, and practical applications of artificial intelligence in modern software development and problem-solving.'
    },
    {
      title: 'Certificate of Participation - AMPTIC 2024: Advancement in Minerals Processing Techniques',
      issuer: 'National Institute of Technology Jamshedpur (NIT Jamshedpur)',
      date: 'July 16-20, 2024',
      icon: Trophy,
      color: 'lime',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.29.02%20PM.jpeg?updatedAt=1751788819788',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef4.pdf?updatedAt=1751787670798',
      description: 'Actively participated in the prestigious NATIONAL WORKSHOP on "Advancement in Minerals Processing Techniques with special reference to Iron and Coal" (AMPTIC-2024). This comprehensive workshop was organized by the Department of Metallurgical and Materials Engineering at NIT Jamshedpur, focusing on advanced techniques in mineral processing, particularly in iron and coal processing technologies. The workshop provided insights into cutting-edge research and industrial applications in metallurgical engineering.'
    },
    {
      title: 'Certificate of Participation - SymbioSphere 2024: Navigating the Intersection of Science, Technology and Pharmaceuticals with Ecofriendly Solutions towards Sustainability',
      issuer: 'RKDF University Ranchi',
      date: ' June 22-23, 2024',
      icon: Award,
      color: 'blue',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.33.34%20PM.jpeg?updatedAt=1751789094331',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef%205.pdf?updatedAt=1751787670424',
      description: 'Participated in the prestigious SymbioSphere 2024 conference organized in collaboration with the Association of Indian Universities (AIU). This interdisciplinary conference focused on the convergence of science, technology, and pharmaceutical sciences with sustainable eco-friendly solutions. The event explored innovative approaches to sustainability in pharmaceutical and life sciences, emphasizing environmental consciousness and technological advancement in healthcare and biotechnology.'
    },
    {
      title: 'Certificate of Participation - International Conference on SymbioSphere 2024: Navigating the Intersection of Science, Technology and Pharmaceuticals with Ecofriendly Solutions towards Sustainability',
      issuer: 'RKDF University Ranchi',
      date: 'June 22-23, 2024',
      icon: Star,
      color: 'orange',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.39.13%20PM.jpeg?updatedAt=1751789450566',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef%206.pdf?updatedAt=1751787670594',
      description: 'Participated in the Two Days International Conference on "Navigating the Intersection of Science, Technology and Pharmaceuticals with Ecofriendly Solutions towards Sustainability - SymbioSphere 2024". This prestigious international conference was organized in collaboration with the Association of Indian Universities (AIU), bringing together experts from multiple disciplines to explore sustainable solutions at the intersection of science, technology, and pharmaceutical sciences. The conference focused on eco-friendly approaches and sustainable practices in pharmaceutical and life sciences research.'
    },

    {
      title: 'Certificate of Appreciation - Volunteer at SymbioSphere 2024 International Conference',
      issuer: 'RKDF University Ranchi',
      date: ' June 22-23, 2024',
      icon: Star,
      color: 'orange',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.42.58%20PM.jpeg?updatedAt=1751789670760',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef%207.pdf?updatedAt=1751787670944',
      description: 'Recognized for outstanding contributions as a volunteer in the 2-day International Conference "Navigating the Intersection of Science, Technology & Pharmaceuticals with Ecofriendly Solutions towards Sustainability - SymbioSphere 2024". This certificate acknowledges dedicated service and support in organizing and facilitating the prestigious international conference organized in collaboration with the Association of Indian Universities (AIU). The volunteer role involved assisting with conference logistics, participant coordination, and ensuring smooth execution of the interdisciplinary scientific event.'
    },

    {
      title: 'Certificate of Participation - Hackathon at EKLAVYA TECHFEST 2025',
      issuer: 'Dr. Shyama Prasad Mukherjee University (DSPMU), Ranchi',
      date: 'April 23-24, 2025',
      icon: Star,
      color: 'orange',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.47.54%20PM.jpeg?updatedAt=1751789895212',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef%208.pdf?updatedAt=1751787670824',
      description: ' Successfully participated in the Hackathon event organized as part of EKLAVYA TECHFEST 2025, hosted by the Department of Computer Application at DSPMU. This competitive coding event provided an opportunity to showcase programming skills, problem-solving abilities, and innovative thinking in a time-constrained environment. The hackathon fostered collaboration, creativity, and technical expertise in software development and computer applications.'
    },

    {
      title: 'Certificate of Excellence - Stock Market Advanced Trading',
      issuer: 'Research In and Out (under guidance of Raushan Singh)',
      date: '2023',
      icon: Star,
      color: 'orange',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.52.11%20PM.jpeg?updatedAt=1751790157487',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef%209.pdf?updatedAt=1751787670413',
      description: ' Successfully completed an advanced course on "STOCK MARKET ADVANCE TRADING" with "Research In and Out" under the guidance of Raushan Singh. This comprehensive training program covered advanced trading strategies, market analysis techniques, risk management, and practical applications in stock market trading. The course provided hands-on experience with sophisticated trading methodologies and market research approaches.'
    },

    {
      title: 'Internship Confirmation - Pantech.AI Development Team',
      issuer: 'Pantech Prolabs India Pvt Ltd (Pantech.AI - subsidiary of Pantech Group Companies)',
      date: 'June 28 - September 28, 2025',
      icon: Star,
      color: 'orange',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/pantechai_logo.jpg?updatedAt=1751790676261',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/WW_3AI_OL_6645.pdf?updatedAt=1751790460325',
      description: ' Successfully secured a three-month online internship position at Pantech.AI, working in the development team under the supervision of Sanjay. This prestigious internship opportunity provides hands-on experience in software development, contributing to meaningful projects within the organization. The internship focuses on gaining valuable skills and insights in modern development practices, while working with cutting-edge technologies in an AI-focused company environment.'
    },

    {
      title: 'Certificate of Completion - Full Stack Web Development in Python Training',
      issuer: 'Shashi Infotech',
      date: 'February 10 - March 30, 2025',
      icon: Star,
      color: 'orange',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-06%20at%201.55.28%20PM.jpeg?updatedAt=1751790346884',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/cef%2010.pdf?updatedAt=1751787670653',
      description: 'Successfully completed comprehensive training in Full Stack Web Development using Python in the IT sector under the guidance of Shashi Infotech. This intensive 7-week training program covered both frontend and backend development using Python technologies, providing hands-on experience with modern web development frameworks, database management, and full-stack application development. The training enhanced practical skills in building complete web applications from concept to deployment.'
    },

    {
      title: 'Certificate of Completion  AI Tools Mastery Program',
      issuer: 'be10x (Signed by Aditya Goenka & Aditya Kachave, Co-founders)',
      date: 'July 26,2025',
      icon: Star,
      color: 'orange',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-26%20at%201.31.01%20PM.jpeg?updatedAt=1753517269064',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/WhatsApp%20Image%202025-07-26%20at%201.31.01%20PM.jpeg?updatedAt=1753517269064',
      description: 'Awarded to Prem Kumar for successfully completing the full course on AI Tools Mastery Program. This certificate recognizes the achievement of mastering advanced AI tools and techniques, demonstrating proficiency in leveraging artificial intelligence for practical applications. The program covered a comprehensive curriculum designed to enhance skills in modern AI technologies and their real-world implementation.'
    },

    {
      title: 'Oracle Certified Foundations Associate, Certificate of Recognition',
      issuer: 'Oracle University (recognized by Oracle Corporation)',
      date: 'September 1, 2025',
      icon: Star,
      color: 'orange',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/orc.png?updatedAt=1756790187879',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/eCertificate.pdf?updatedAt=1756789708242',
      description: 'Awarded to Prem Kumar for successfully completing the Oracle Certified Foundations Associate, Certificate of Recognition. This certificate recognizes the achievement of mastering the Oracle Foundations Associate, demonstrating proficiency in the Oracle database and its applications. The program covered a comprehensive curriculum designed to enhance skills in modern database technologies and their real-world implementation.'
    },

    {
      title: 'Oracle Cloud Infrastructure 2025 — Certified Generative AI Professional',
      issuer: 'Oracle University (recognized by Oracle Corporation)',
      date: 'October 23, 2025',
      icon: Star,
      color: 'orange',
      thumbnail: 'https://ik.imagekit.io/prem2727/certificate/Screenshot%202025-10-24%20230504.png?updatedAt=1761327430117',
      certificateUrl: 'https://ik.imagekit.io/prem2727/certificate/eCertificate%20(1).pdf?updatedAt=1761327327226',
      description: 'Certificate of recognition validating proficiency in building, deploying, and managing generative AI solutions on Oracle Cloud Infrastructure (OCI). Covers OCI services, generative AI workflows, security & best practices, and demonstrates professional-level competency in OCI generative AI technologies.'
    }
  ];

  const slidesPerView = 3;
  const totalSlides = Math.ceil(certifications.length / slidesPerView);

  // Add smooth transition effect when slides change
  useEffect(() => {
    const cards = document.querySelectorAll('.cert-card');
    cards.forEach((card, index) => {
      (card as HTMLElement).style.animationDelay = `${index * 0.1}s`;
    });
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentCertifications = () => {
    const startIndex = currentSlide * slidesPerView;
    return certifications.slice(startIndex, startIndex + slidesPerView);
  };

  const handleViewCert = (cert: any) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCert(null);
  };

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: 'border-cyan-400/60 shadow-cyan-400/10',
      purple: 'border-purple-400/60 shadow-purple-400/10',
      pink: 'border-pink-400/60 shadow-pink-400/10',
      lime: 'border-lime-400/60 shadow-lime-400/10',
      blue: 'border-blue-400/60 shadow-blue-400/10',
      orange: 'border-orange-400/60 shadow-orange-400/10',
    };
    return colors[color as keyof typeof colors] || colors.cyan;
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 relative overflow-hidden">
      <style>{`
        .slider-container {
          scroll-behavior: smooth;
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .cert-card {
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          opacity: 0;
          transform: translateY(20px) scale(0.95);
          animation: slideIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .cert-card:nth-child(1) { animation-delay: 0.1s; }
        .cert-card:nth-child(2) { animation-delay: 0.2s; }
        .cert-card:nth-child(3) { animation-delay: 0.3s; }
        .cert-card:hover {
          transform: translateY(-10px) scale(1.05);
        }
        @keyframes slideIn {
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .nav-dot {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-dot:hover {
          transform: scale(1.2);
        }
        .nav-button {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-button:hover {
          transform: scale(1.1);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        .modal-overlay {
          backdrop-filter: blur(8px);
        }
      `}</style>
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-lime-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl animate-pulse delay-700"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4 glow-text">
            Certifications
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-exo">
            Validating Expertise Through Continuous Learning
          </p>
        </div>

        {/* Interactive Slider */}
        <div className="mb-16">
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="nav-button absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 group"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="nav-button absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/40 group"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slider Container */}
            <div 
              ref={sliderRef}
              className="slider-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8"
            >
              {getCurrentCertifications().map((cert, index) => (
              <div
                key={index}
                  className={`cert-card bg-slate-800/80 border-2 ${getColorClasses(cert.color)} rounded-2xl p-0 shadow-lg flex flex-col justify-between`}
              >
                {/* Certificate Banner Thumbnail */}
                <div className="w-full h-32 rounded-t-2xl overflow-hidden border-b-2 border-slate-700">
                  <img src={cert.thumbnail} alt={cert.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="flex flex-col">
                        <h3 className="text-lg font-bold font-exo text-slate-100 mb-1">{cert.title}</h3>
                        <span className="text-sm text-gray-400 font-exo">{cert.issuer}</span>
                        <span className="text-xs text-cyan-400 font-exo">{cert.date}</span>
                      </div>
                      <cert.icon className="w-7 h-7 ml-auto text-cyan-400" />
                    </div>
                    <div className="flex gap-2 mt-2 mb-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-slate-900 px-2 py-1 rounded text-xs font-exo font-semibold border border-yellow-300 shadow-sm">Verified</span>
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-2 py-1 rounded text-xs font-exo font-semibold border border-blue-400 shadow-sm">Show</span>
                    </div>
                  </div>
                    {/* Enhanced View Button */}
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleViewCert(cert)}
                        className="flex-1 px-3 py-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white rounded-lg font-semibold font-exo hover:shadow-lg transition-all duration-500 flex items-center justify-center gap-2 text-sm hover:scale-105"
                      >
                    <Eye className="w-4 h-4" />
                        View Details
                  </button>
                      <a 
                        href={cert.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-lg font-semibold font-exo hover:shadow-lg transition-all duration-500 flex items-center justify-center gap-2 text-sm hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              </div>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`nav-dot w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showModal && selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="modal-overlay absolute inset-0 bg-black/50" onClick={closeModal}></div>
          <div className="relative bg-slate-800/95 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                <selectedCert.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-exo text-white mb-2">{selectedCert.title}</h3>
              <p className="text-gray-400 font-exo">{selectedCert.issuer}</p>
              <p className="text-cyan-400 font-exo text-sm">{selectedCert.date}</p>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-300 font-exo leading-relaxed">{selectedCert.description}</p>
            </div>
            
            <div className="flex gap-3">
              <a 
                href={selectedCert.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-white rounded-lg font-semibold font-exo hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Certificate
              </a>
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg font-semibold font-exo hover:bg-gray-700 transition-all duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
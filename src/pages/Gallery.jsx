import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import HeroSection from '../components/HeroSection';
import { withBase } from '../lib/utils';

// Gallery images data
const galleryImages = [
  {
    id: 3,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.35_1d6db621.jpg",
    alt: "Corporate auditorium presentation",
    title: "Corporate Leadership Presentation"
  },
  {
    id: 4,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.36_db319454.jpg",
    alt: "Professional team group photo",
    title: "Professional Development Team"
  },
  {
    id: 5,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.37_5cfc406b.jpg",
    alt: "Team celebration and networking",
    title: "Team Celebration & Networking Event"
  },
  {
    id: 6,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.39_b590a947.jpg",
    alt: "Corporate training session",
    title: "Corporate Training Session"
  },
  {
    id: 7,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.37_18bdd2ac.jpg",
    alt: "Workshop presentation",
    title: "Workshop Presentation"
  },
  {
    id: 8,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.38_5191a2e0.jpg",
    alt: "Business seminar",
    title: "Business Seminar"
  },
  {
    id: 9,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.40_3c214ed5.jpg",
    alt: "Interactive workshop session",
    title: "Interactive Workshop Session"
  },
  {
    id: 10,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.41_5787a5f2.jpg",
    alt: "Professional development",
    title: "Professional Development Program"
  },
  {
    id: 11,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.35_82dc2742.jpg",
    alt: "Leadership workshop",
    title: "Leadership Development Workshop"
  },
  {
    id: 12,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.35_ba22b134.jpg",
    alt: "Corporate seminar",
    title: "Corporate Excellence Seminar"
  },
  {
    id: 13,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.35_f0598a53.jpg",
    alt: "Team building activity",
    title: "Team Building Activity"
  },
  {
    id: 14,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.36_0275ae43.jpg",
    alt: "Business strategy session",
    title: "Business Strategy Session"
  },
  {
    id: 15,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.37_5cfc406b.jpg",
    alt: "Interactive learning",
    title: "Interactive Learning Session"
  },
  {
    id: 16,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.37_ba0d8da7.jpg",
    alt: "Executive training",
    title: "Executive Training Program"
  },
  {
    id: 17,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.38_c8ef4596.jpg",
    alt: "Skills development workshop",
    title: "Skills Development Workshop"
  },
  {
    id: 18,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.38_d0f36ec1.jpg",
    alt: "Corporate leadership",
    title: "Corporate Leadership Training"
  },
  {
    id: 19,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.39_6231a383.jpg",
    alt: "Motivational workshop",
    title: "Motivational Workshop"
  },
  {
    id: 20,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.39_b590a947.jpg",
    alt: "Business excellence program",
    title: "Business Excellence Program"
  },
  {
    id: 21,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.40_57de21f9.jpg",
    alt: "Communication skills workshop",
    title: "Communication Skills Workshop"
  },
  {
    id: 22,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.40_a43cd09d.jpg",
    alt: "Management training",
    title: "Management Training Session"
  },
  {
    id: 23,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.41_65e14957.jpg",
    alt: "Personal development",
    title: "Personal Development Workshop"
  },
  {
    id: 24,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.41_9a9010f0.jpg",
    alt: "Team collaboration session",
    title: "Team Collaboration Session"
  },
  {
    id: 25,
    category: "workshop",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.42_42c6eb01.jpg",
    alt: "Success mindset workshop",
    title: "Success Mindset Workshop"
  },
  {
    id: 26,
    category: "corporate",
    src: "/images/WhatsApp Image 2025-08-28 at 12.36.42_8007d82b.jpg",
    alt: "Organizational development",
    title: "Organizational Development Program"
  }
];

function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    currentImage: null
  });
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === filter);
    
  const openLightbox = (image) => {
    setLightbox({
      isOpen: true,
      currentImage: image
    });
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      currentImage: null
    });
    document.body.style.overflow = 'auto';
  };
  
  const navigateImage = (direction) => {
    const currentIndex = galleryImages.findIndex(img => img.id === lightbox.currentImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    
    setLightbox({
      ...lightbox,
      currentImage: galleryImages[newIndex]
    });
  };

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroSection 
        title="Gallery"
        subtitle="Moments from our workshops, training sessions, and events"
        backgroundImage="/images/WhatsApp Image 2025-08-28 at 12.36.39_b590a947.jpg"
      />
      
      {/* Gallery Filters */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              All Photos
            </button>
           
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="container-custom">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {filteredImages.map((image) => (
      <div 
        key={image.id} 
        className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
        onClick={() => openLightbox(image)}
      >
        <div className="w-full h-64 bg-black flex items-center justify-center">
          <img 
            src={encodeURI(withBase(image.src))} 
            alt={image.alt} 
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <h3 className="text-white font-medium p-4">{image.title}</h3>
        </div>
      </div>
    ))}
  </div>
</section>

     
      
      {/* Lightbox */}
{/* Lightbox */}
{lightbox.isOpen && lightbox.currentImage &&
  ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={closeLightbox}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
          onClick={closeLightbox}
        >
          &times;
        </button>

        {/* Image */}
        <img
          src={encodeURI(withBase(lightbox.currentImage.src))}
          alt={lightbox.currentImage.alt}
          className="w-auto h-auto max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-lg"
        />

        {/* Title & Description */}
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-semibold">{lightbox.currentImage.title}</h3>
          <p className="text-sm text-gray-300 mt-1">{lightbox.currentImage.alt}</p>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
          onClick={() => navigateImage('prev')}
        >
          &#8592;
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors"
          onClick={() => navigateImage('next')}
        >
          &#8594;
        </button>
      </div>
    </div>,
    document.body
  )
}



    </div>
  );
}

export default Gallery;
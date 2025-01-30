import React, { useState } from 'react';
import { Building2, airplay, Phone, Mail, MapPin, HardHat, Ruler, PaintBucket, Truck, Wrench, Warehouse, Plane as Crane, Home, X, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const services = [
    { icon: <Building2 className="w-12 h-12 mb-4" />, title: 'FINISHING & FURNISHINGFINISHING & FURNISHING', description: 'Full-service building construction for commercial and residential projects' },
    { icon: <Home className="w-12 h-12 mb-4" />, title: 'CONSTRUCTION', description: 'Custom home building and renovations' },
    { icon: <Warehouse className="w-12 h-12 mb-4" />, title: 'FIT OUT WORKS', description: 'Specialized construction for industrial facilities' },
    { icon: <Crane className="w-12 h-12 mb-4" />, title: 'MEP WORKS', description: 'Roads, bridges, and public infrastructure projects' },
    { icon: <HardHat className="w-12 h-12 mb-4" />, title: 'LANDSCAPE & HARDSCAPE', description: 'Comprehensive project planning and execution' },
    { icon: <Ruler className="w-12 h-12 mb-4" />, title: 'GENERAL TRADING', description: 'Innovative architectural solutions' },
    { icon: <PaintBucket className="w-12 h-12 mb-4" />, title: 'Consulting Services', description: 'High-quality interior finishing services' },

  ];

  const projects = [
    { image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80', title: 'Modern Office Complex' },
    { image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80', title: 'Luxury Apartments' },
    { image: 'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=800&q=80', title: 'Industrial Facility' },
    { image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&q=80', title: 'Shopping Center' },
    { image: 'https://images.unsplash.com/photo-1463620695885-8a91d87c53d0?auto=format&fit=crop&w=800&q=80', title: 'Residential Complex' },
    { image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80', title: 'Corporate Headquarters' },
  ];

  const handlePrevious = () => {
    setSelectedImageIndex(prev => 
      prev === null ? null : prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex(prev => 
      prev === null ? null : prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedImageIndex === null) return;
    
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImageIndex(null);
  };

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Hammer className="w-8 h-8 text-[#65a254]" />
              <span className="ml-2 text-xl font-bold text-gray-800">Taqniat AlHulul Co.</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-[#65a254]">About</a>
              <a href="#services" className="text-gray-600 hover:text-[#65a254]">Services</a>
              <a href="#projects" className="text-gray-600 hover:text-[#65a254]">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-[#65a254]">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section */}
      <section id="about" className="pt-24 pb-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Established in 2006, TAC became one of the leading company in the middle east for construction &
              furnishing projects by delivering customer services to their satisfaction. With all standard sources and
              experience team have created the market reputation throw-out the kingdom and middle east. Operating
              through international offices in Riyadh, TAC offers a comprehensive regional approach to its clients and
              partners
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#65a254] mb-2">19+ Years</h3>
                <p className="text-gray-600">Industry Experience</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#65a254] mb-2">63+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-[#65a254] mb-2">100%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="text-[#65a254]">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                onClick={() => setSelectedImageIndex(index)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" 
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 text-center">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            className="absolute top-4 right-4 text-white hover:text-[#65a254] transition-colors"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#65a254] transition-colors"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>
          
          <div className="max-w-5xl mx-auto px-4">
            <img 
              src={projects[selectedImageIndex].image} 
              alt={projects[selectedImageIndex].title}
              className="max-h-[80vh] w-auto mx-auto"
            />
            <h3 className="text-white text-2xl font-bold text-center mt-4">
              {projects[selectedImageIndex].title}
            </h3>
          </div>
          
          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#65a254] transition-colors"
            onClick={handleNext}
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#65a254]" />
                <span className="text-gray-600">+966 (50) 3825547</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#65a254]" />
                <span className="text-gray-600">Info@TAC-sa.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#65a254]" />
                <span className="text-gray-600">Kingdom of Saudi Arabia Riyadh 11231 P.O.Box : 87584</span>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65a254]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65a254]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#65a254]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#65a254] text-white py-2 px-6 rounded-lg hover:bg-[#558745] transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Hammer className="w-8 h-8" />
              <span className="ml-2 text-xl font-bold">Taqniat AlHulul Co.</span>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2024 Telescope Agency. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
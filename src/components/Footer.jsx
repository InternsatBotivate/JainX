import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, BookOpen, ChevronRight } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-amber-500 to-blue-600"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="transform transition-all duration-500 hover:-translate-y-1">
            <div className="flex items-center space-x-2 mb-5">
              <BookOpen className="h-7 w-7 text-amber-500" />
              <h3 className="text-2xl font-bold text-white">Mastery Academy</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Individuals & Executives, Staffs & Entrepreneurs through Coaching, Consulting & Organizational Turnaround since 2013.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110">
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="transform transition-all duration-500 hover:-translate-y-1">
            <h4 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-800">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Course Catalog</span>
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Schedule</span>
                </Link>
              </li>
              <li>
                <Link to="/trainer" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Our Trainer</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Programs */}
          <div className="transform transition-all duration-500 hover:-translate-y-1">
            <h4 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-800">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">The Game Of Business</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Energy In Top Gear</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Moving Ahead Program</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Business In Top Gear</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Personal & Business Consultancy</span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                  <ChevronRight className="h-4 w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 text-amber-500" />
                  <span className="group-hover:translate-x-2 transition-transform duration-300">Energy 360*</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="transform transition-all duration-500 hover:-translate-y-1">
            <h4 className="text-lg font-semibold mb-5 pb-2 border-b border-gray-800">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="mr-3 p-2 bg-gray-800 rounded-full group-hover:bg-amber-500 transition-colors duration-300">
                  <MapPin className="h-5 w-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Devendra Nagar, Raipur (C.G.)</span>
              </li>
              <li className="flex items-center group">
                 <div className="mr-3 p-2 bg-gray-800 rounded-full group-hover:bg-amber-500 transition-colors duration-300">
                   <Phone className="h-5 w-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                 </div>
                 <a href="tel:+919098562225" className="text-gray-300 group-hover:text-white transition-colors duration-300">+91-9098562225</a>
               </li>
               <li className="flex items-center group">
                 <div className="mr-3 p-2 bg-gray-800 rounded-full group-hover:bg-amber-500 transition-colors duration-300">
                   <Mail className="h-5 w-5 text-amber-500 group-hover:text-white transition-colors duration-300" />
                 </div>
                 <a href="mailto:sourabhpune@gmail.com" className="text-gray-300 group-hover:text-white transition-colors duration-300">sourabhpune@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mastery Academy. All rights reserved.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm">Designed with</span>
              <span className="text-red-500 animate-pulse">❤</span>
              <span className="text-gray-400 text-sm">by Mastery Academy Team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { courses, feeStructure, feeIncludes } from '../data/courses';
import { TrendingUp, Zap, Users, BookOpen, TargetIcon, MessageSquare } from 'lucide-react';
import RegistrationModal from '../components/RegistrationModal';

function Courses() {
  const [filter, setFilter] = useState('all');
  const [showRegModal, setShowRegModal] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  
  const filteredCourses = filter === 'all' 
    ? courses 
    : courses.filter(course => course.category === filter);
    
  const handleRegisterClick = (program) => {
    setSelectedProgram(program);
    setShowRegModal(true);
  };

  return (
    <div className="fade-in">
      <HeroSection 
        title="Our Training Programs"
        subtitle="Discover our range of transformative programs designed to help you grow personally and professionally"
        backgroundImage="images/WhatsApp Image 2025-08-28 at 12.36.39_40a7a60b.jpg"
      />
      
      {/* Filters */}
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
              All Programs
            </button>
            <button 
              onClick={() => setFilter('entrepreneurship')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'entrepreneurship' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Business Programs
            </button>
            <button 
              onClick={() => setFilter('personal')}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                filter === 'personal' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
              }`}
            >
              Personal Development
            </button>
          </div>
        </div>
      </section>
      
      {/* Courses */}
      <section className="container-custom">
        <div className="grid grid-cols-1 gap-12">
          {filteredCourses.map((course) => {
            const Icon = course.id === 1 ? TrendingUp :
                        course.id === 2 ? Zap :
                        course.id === 3 ? TargetIcon :
                        course.id === 4 ? BookOpen :
                        course.id === 5 ? Users :
                        MessageSquare;
            
            return (
              <div key={course.id} className="bg-white rounded-md shadow-md overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="bg-blue-50 p-8 flex flex-col justify-center items-center border-r border-blue-100 md:justify-start md:items-start">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 border border-blue-100">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-blue-600 mb-2 text-center md:text-left">{course.title}</h3>
                    <p className="text-gray-700 font-medium text-center md:text-left">{course.subtitle}</p>
                  </div>
                  
                  <div className="p-8 col-span-2">
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-gray-600 font-medium">Duration: {course.duration}</span>
                        <span className="text-gray-600 font-medium">Time: {course.sessionTime}</span>
                      </div>
                      <div className="space-y-2">
                        {course.days.map((day, index) => (
                          <div key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span className="text-gray-700">Day {index + 1}: {day.content}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-8 flex flex-wrap gap-4">
                      <button 
                        onClick={() => handleRegisterClick(course)}
                        className="btn btn-outline"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fee Structure */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Fee Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {feeStructure.map((fee, index) => (
              <div key={index} className="bg-white p-6 rounded-md shadow-md">
                <h3 className="text-xl font-bold mb-4">{fee.category}</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">{fee.priceFormatted}</p>
                <p className="text-gray-600 mb-4">per participant (inclusive of 18% GST)</p>
                <div className="space-y-2">
                  {feeIncludes.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     
      {/* Registration Modal */}
      <RegistrationModal 
        isOpen={showRegModal} 
        onClose={() => setShowRegModal(false)} 
        program={selectedProgram}
      />
    </div>
  );
}

export default Courses;
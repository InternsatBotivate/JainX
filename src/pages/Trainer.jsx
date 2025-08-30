import React from 'react';
import HeroSection from '../components/HeroSection';
import { Award, BookOpen, ThumbsUp, TrendingUp, Users, PenTool } from 'lucide-react';
import { withBase } from '../lib/utils';
import { Link } from 'react-router-dom';

function Trainer() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroSection 
        title="Meet Our Trainer"
        subtitle="Mr. Sourabh Jain - Life Coach & Consultant"
        backgroundImage="images/WhatsApp Image 2025-08-28 at 12.36.37_5cfc406b.jpg"
      />
      
      {/* Trainer Profile */}
      <section className="container-custom object-contain">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
          <div>
          <div className="w-full max-w-md mx-auto">
  <img 
    src={withBase('images/WhatsApp Image 2025-08-28 at 12.36.37_2d711664.jpg')} 
    alt="Mr. Sourabh Jain" 
    className="rounded-lg shadow-xl w-full max-w-full h-auto object-contain"
  />
</div>

          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Mr. Sourabh Jain</h2>
            <p className="text-xl text-blue-600 font-semibold mb-6">Life Coach & Consultant | Director, Sourabh Jain Personal Mastery Academy</p>
            
            <p className="text-gray-700 mb-4">
              Mr. Sourabh Jain has huge corporate & professional experience of more than 16+ years. He has conducted training programs across Individuals, Schools, Colleges, Management Institutions & Corporate sectors.
            </p>
            
            <p className="text-gray-700 mb-6">
              He designs the training programs as per the client requirements. He keeps updating his programs so as to meet the future needs. He also makes sure that his training programs are easily understood by the participants & they take home easy learning.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Award className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <p className="text-gray-700">PGDBM (Marketing & HR) from IIPM</p>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <p className="text-gray-700">Masters degree in Commerce from Pune University</p>
              </div>
              <div className="flex items-start">
                <ThumbsUp className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <p className="text-gray-700">Helped 21,000+ Individuals, Employees & Business owners</p>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <p className="text-gray-700">Managed 50+ office staff at Kohinoor Group of Construction</p>
              </div>
            </div>
            
            <Link to="/contact" className="btn btn-primary">Connect with Mr. Sourabh Jain</Link>
          </div>
        </div>
      </section>
      
      {/* Experience */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Director</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <p className="text-blue-600 font-medium">Sourabh Jain Personal Mastery Academy, Raipur</p>
                    <span className="mx-2 text-gray-400">|</span>
                    <p className="text-gray-600">2013 - Present</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Founded Mastery Academy with a powerful purpose "to help individuals & organizations around the world become World class". Leads personality & business development training programs and provides consultation services.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold">Marketing & HR Professional</h3>
                  <div className="flex items-center mt-2 md:mt-0">
                    <p className="text-blue-600 font-medium">Kohinoor Group of Construction, Pune</p>
                    <span className="mx-2 text-gray-400">|</span>
                    <p className="text-gray-600">Prior to 2013</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Gained extensive experience in the fields of Marketing & Sales as well as Human Resource with real estate giant Kohinoor Group of Construction, Pune. Managed a team of 50+ office staff.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Training Approach */}
      <section className="container-custom">
        <h2 className="section-heading">Training Approach & Methodology</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
            <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mb-4 border border-blue-100">
              <PenTool className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Problem Resolution</h3>
            <p className="text-gray-700">
              He understands the problems & resolves through facilitation, taking a personalized approach to each client.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-amber-500">
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-4 border border-amber-100">
              <BookOpen className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Real-Life Application</h3>
            <p className="text-gray-700">
              He shares real life case studies to draw relevance, making complex concepts easy to understand and apply.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-emerald-500">
            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center mb-4 border border-emerald-100">
              <Users className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Simplified Learning</h3>
            <p className="text-gray-700">
              Handouts with simple English/Hindi, no high-end vocabulary used, making learning accessible to everyone.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-purple-500">
            <div className="w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center mb-4 border border-purple-100">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Engaging Methods</h3>
            <p className="text-gray-700">
              He makes delegates learn with fun using Audio Visual aids, Discussion, Role plays & many other techniques.
            </p>
          </div>
        </div>
      </section>
      
      {/* Training Fields */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Training Expertise</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-1">Public Speaking</h4>
                  <p className="text-sm text-gray-700">& Confidence Building</p>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                  <h4 className="font-bold text-amber-800 mb-1">Leading & Managing</h4>
                  <p className="text-sm text-gray-700">People & Teams</p>
                </div>
                
                <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-100">
                  <h4 className="font-bold text-emerald-800 mb-1">Positive Thinking</h4>
                  <p className="text-sm text-gray-700">& Possibility Thinking</p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                  <h4 className="font-bold text-purple-800 mb-1">Negotiation Skills</h4>
                  <p className="text-sm text-gray-700">& Influencing Skills</p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                  <h4 className="font-bold text-red-800 mb-1">Communication</h4>
                  <p className="text-sm text-gray-700">& Presentation Skills</p>
                </div>
                
                <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-100">
                  <h4 className="font-bold text-cyan-800 mb-1">Self Management</h4>
                  <p className="text-sm text-gray-700">& Stress Management</p>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-100">
                  <h4 className="font-bold text-teal-800 mb-1">Time Management</h4>
                  <p className="text-sm text-gray-700">as Life Management</p>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                  <h4 className="font-bold text-indigo-800 mb-1">Organizational</h4>
                  <p className="text-sm text-gray-700">Development</p>
                </div>
                
                <div className="bg-pink-50 p-4 rounded-lg border border-pink-100">
                  <h4 className="font-bold text-pink-800 mb-1">Conflict Management</h4>
                  <p className="text-sm text-gray-700">& Assertiveness</p>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <h4 className="font-bold text-orange-800 mb-1">Decision Making</h4>
                  <p className="text-sm text-gray-700">& Problem Solving</p>
                </div>
                
                <div className="bg-lime-50 p-4 rounded-lg border border-lime-100">
                  <h4 className="font-bold text-lime-800 mb-1">Interpersonal Skills</h4>
                  <p className="text-sm text-gray-700">& Grooming</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-bold text-blue-800 mb-1">Customer Centricity</h4>
                  <p className="text-sm text-gray-700">& Service Excellence</p>
                </div>
              </div>
              
              <p className="text-gray-700 mt-8 text-center italic">
                "I've learned that everyone wants to live on top of the mountain, but all the happiness & growth occurs while you're climbing it."
              </p>
              <p className="text-gray-700 mt-2 text-center font-medium">
                Keep learning - Keep Growing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Book a Session */}
      <section className="container-custom bg-blue-50 rounded-xl border border-blue-100">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Book a One-on-One Session</h2>
          <p className="text-xl text-gray-700 mb-8">
            Interested in personalized coaching? Schedule a one-on-one session with Mr. Sourabh Jain to discuss your specific challenges and goals.
          </p>
          <Link to="/contact" className="btn btn-primary">Request a Session</Link>
        </div>
      </section>
    </div>
  );
}

export default Trainer;
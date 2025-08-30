import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import { Award, Users, BookOpen, Target, Clock, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  const [animateVision, setAnimateVision] = useState(false);
  const [animateMission, setAnimateMission] = useState(false);
  const [animateStory, setAnimateStory] = useState(false);
  const [animateValues, setAnimateValues] = useState(false);
  
  useEffect(() => {
    // Trigger animations with slight delays for a cascade effect
    const visionTimer = setTimeout(() => setAnimateVision(true), 300);
    const missionTimer = setTimeout(() => setAnimateMission(true), 600);
    const storyTimer = setTimeout(() => setAnimateStory(true), 900);
    const valuesTimer = setTimeout(() => setAnimateValues(true), 1200);
    
    return () => {
      clearTimeout(visionTimer);
      clearTimeout(missionTimer);
      clearTimeout(storyTimer);
      clearTimeout(valuesTimer);
    };
  }, []);
  
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroSection 
        title="About Mastery Academy"
        subtitle="Founded in 2013 with a vision to create 1 Million success stories"
        backgroundImage="images/WhatsApp Image 2025-08-28 at 12.36.38_5191a2e0.jpg"
      />
      
      {/* Mission & Vision */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`glass gradient-blue bg-opacity-5 p-8 rounded-lg border border-blue-100 shadow-lg transform transition-all duration-700 hover-lift ${animateVision ? 'opacity-100 translate-y-0 slide-in-left' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-blue-800 mb-4 relative group">
              Our Vision
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="text-gray-700 mb-4">
              We aim to be the leading Business & Life Coaching provider in INDIA by helping & empowering individuals & organizations to become World Class & Extraordinary.
            </p>
          </div>
          
          <div className={`glass gradient-amber bg-opacity-5 p-8 rounded-lg border border-amber-100 shadow-lg transform transition-all duration-700 hover-lift ${animateMission ? 'opacity-100 translate-y-0 slide-in-right' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-2xl font-bold text-amber-800 mb-4 relative group">
              Our Mission
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 transition-all duration-500 group-hover:w-full"></span>
            </h3>
            <p className="text-gray-700 mb-4">
              To create 1 Million Success Stories & make them reach a higher level of thinking, thereby giving a meaning to their existence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-heading">Our Story</h2>
            <div className={`glass p-8 rounded-lg shadow-lg transform transition-all duration-700 hover-lift ${animateStory ? 'opacity-100 translate-y-0 zoom-in' : 'opacity-0 translate-y-10'}`}>
              <p className="text-gray-700 mb-4">
                Learning is a never ending process. Everyday new things are been learnt through Seminars, Books, Experience, Friends, Internet, Media & many other means. But the question is how many of us; really put that learning into practice in order to check its worthiness.
              </p>
              <p className="text-gray-700 mb-4">
                One more important reason is that we forget what we learnt in just 2-3 days. Hence, when we actually want to implement the learning we don't know what to implement as we have already forgot the material. But, the fact is, we cannot compromise on learning. We have to take time some-how to work on the learning; otherwise we are giving no value for the TIME we spent on learning new things.
              </p>
              <p className="text-gray-700 mb-4">
                As rightly said, TIME is PRECIOUS so also LEARNING.
              </p>
              <p className="text-gray-700 mb-4">
                To overcome this problem, Mr. Sourabh Jain tried to give a new look to the training process. His training programs are designed giving importance to Time & also to Individual's Work & Personal life. All the training programs he conducts are clubbed with Interesting Facts & Fun. Sometimes programs are combined with memory techniques. This way you learn the contents of seminar easily & also not forget them.
              </p>
              <p className="text-gray-700">
                Training is a process of unlearning & learning—to acquire & enhance skills & knowledge & put it into practice—to enable the trainees to do the job efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="container-custom">
        <h2 className="section-heading">Our Values</h2>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700 ${animateValues ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 group hover-lift">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center mb-4 border border-blue-100 group-hover:bg-blue-100 transition-colors duration-300 shadow-sm group-hover:shadow">
              <Award className="h-6 w-6 text-blue-600 group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-700 transition-colors duration-300">Innovation</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              We encourage changes & innovation to meet challenges in both personal and business environments.
            </p>
          </div>
          
          <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 group hover-lift delay-100">
            <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mb-4 border border-amber-100 group-hover:bg-amber-100 transition-colors duration-300">
              <Medal className="h-6 w-6 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-amber-700 transition-colors duration-300">Honesty & Integrity</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              We promote honesty, integrity & openness in all we do, ensuring trust and transparency.
            </p>
          </div>
          
          <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 group hover-lift delay-200">
            <div className="w-14 h-14 bg-gradient-to-br from-green-50 to-green-100 rounded-full flex items-center justify-center mb-4 border border-green-100 group-hover:bg-green-100 transition-colors duration-300 shadow-sm group-hover:shadow">
              <Target className="h-6 w-6 text-green-600 group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-green-700 transition-colors duration-300">Accountability</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              We are responsible, accountable & effective in our approach to training and development.
            </p>
          </div>
          
          <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 group hover-lift delay-300">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full flex items-center justify-center mb-4 border border-purple-100 group-hover:bg-purple-100 transition-colors duration-300 shadow-sm group-hover:shadow">
              <BookOpen className="h-6 w-6 text-purple-600 group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-700 transition-colors duration-300">Uniqueness</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Uniqueness is the value of our existence. We bring fresh perspectives to traditional training.
            </p>
          </div>
          
          <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 group hover-lift delay-400">
            <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-full flex items-center justify-center mb-4 border border-red-100 group-hover:bg-red-100 transition-colors duration-300 shadow-sm group-hover:shadow">
              <Users className="h-6 w-6 text-red-600 group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-red-700 transition-colors duration-300">Client First</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              Client above all else. We prioritize the growth and success of our clients in everything we do.
            </p>
          </div>
          
          <div className="glass p-6 rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-2 group hover-lift delay-500">
            <div className="w-14 h-14 bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-full flex items-center justify-center mb-4 border border-cyan-100 group-hover:bg-cyan-100 transition-colors duration-300 shadow-sm group-hover:shadow">
              <Clock className="h-6 w-6 text-cyan-600 group-hover:scale-125 transition-transform duration-300" />
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-700 transition-colors duration-300">Celebrate Life</h3>
            <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
              We celebrate life and the journey of growth, making learning an enjoyable and enriching experience.
            </p>
          </div>
        </div>
      </section>
      
      {/* Philosophy */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Our Philosophy</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 mb-6 text-lg italic text-center">
              "हर व्यक्ति और बिजनेसमेन एक सफलता की कहानी हो सकता है अगर वह अपने ऊपर लगातार काम करता है।"
            </p>
            <p className="text-gray-700 mb-4">
              We believe that success is a combination of five elements. To be successful, one needs to continuously expand ones knowledge, create strong attitudes, develop new skills, form good habits & implement result focused strategies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center border border-blue-100">
                <h4 className="font-bold text-blue-800">Knowledge</h4>
                <p className="text-gray-600 text-sm">ज्ञान</p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg text-center border border-amber-100">
                <h4 className="font-bold text-amber-800">Attitude</h4>
                <p className="text-gray-600 text-sm">मनोवृत्ति</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center border border-green-100">
                <h4 className="font-bold text-green-800">Skills</h4>
                <p className="text-gray-600 text-sm">कौशल</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center border border-purple-100">
                <h4 className="font-bold text-purple-800">Habits</h4>
                <p className="text-gray-600 text-sm">आदतें</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg text-center border border-red-100">
                <h4 className="font-bold text-red-800">Strategies</h4>
                <p className="text-gray-600 text-sm">रणनीतियाँ</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Journey With Us</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover how our approach to training and development can transform your life and business.
          </p>
          <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
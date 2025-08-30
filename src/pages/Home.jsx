import React from 'react';
import HeroSection from '../components/HeroSection';
import { Award, Users, BookOpen, TrendingUp, TargetIcon, Zap } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import { withBase } from '../lib/utils';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <HeroSection 
        title="Transform Your Life & Business With Expert Coaching"
        subtitle="Join over 21,000+ individuals who have transformed their lives through our training programs and coaching"
        backgroundImage="images/WhatsApp Image 2025-08-28 at 12.36.35_1d6db621.jpg"
        cta="Explore Courses"
        ctaLink="/courses"
        secondaryCta="Contact Us"
        secondaryCtaLink="/contact"
      />
      
      {/* About Section */}
      <section className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Mastery Academy - Founded with Purpose</h2>
            <p className="text-gray-700 mb-4">
              Learning is a never-ending process. Everyday new things are learned through Seminars, Books,
              Experience, Friends, Internet, Media & many other means. But the question is how many of us
              really put that learning into practice in order to check its worthiness.
            </p>
            <p className="text-gray-700 mb-6">
              To overcome this problem, Mr. Sourabh Jain tried to give a new look to the training process. His training
              programs are designed giving importance to Time & also to Individual's Work & Personal life. All the
              training programs he conducts are clubbed with Interesting Facts & Fun.
            </p>
            <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
          </div>
          <div>
            <img 
              src={withBase('images/WhatsApp Image 2025-08-28 at 12.36.40_57de21f9.jpg')} 
              alt="Training session" 
              className="rounded-md shadow-xl w-full h-auto"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Why Choose Mastery Academy</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-md shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-sm flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Experienced Coach</h3>
              <p className="text-gray-600">
                Mr. Sourabh Jain has huge corporate & professional experience of more than 16+ years with real expertise in training.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-md shadow-md">
              <div className="w-16 h-16 bg-amber-100 rounded-sm flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">21,000+ Successes</h3>
              <p className="text-gray-600">
                We've helped over 21,000 individuals, employees & business owners transform through our training programs.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-md shadow-md">
              <div className="w-16 h-16 bg-emerald-100 rounded-sm flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">Practical Learning</h3>
              <p className="text-gray-600">
                Our programs focus on practical application of knowledge, ensuring you implement what you learn.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Programs */}
      <section className="container-custom">
        <h2 className="section-heading">Our Training Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard 
            title="The Game Of Business" 
            description="A Business Coaching Program designed to professionalize family business, increase sales and create systems for success." 
            icon={TrendingUp}
            color="blue"
          />
          
          <CourseCard 
            title="Energy In Top Gear" 
            description="Life Mastery Program focusing on leadership, responsibility, confidence building and effective decision making." 
            icon={Zap}
            color="amber"
          />
          
          <CourseCard 
            title="Moving Ahead Program" 
            description="Kids Confidence Builder Program (9-16 yrs) that develops responsibility, attitude and communication skills." 
            icon={TargetIcon}
            color="emerald"
          />
        </div>
        <div className="text-center mt-12">
          <Link to="/courses" className="btn btn-primary">View All Programs</Link>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Rajesh Kumar"
              role="CEO"
              company="Nova Ispat Ltd"
              text="The business coaching program has completely transformed how I run my company. We've seen a 40% increase in productivity since implementing Mr. Jain's strategies."
            />
            
            <TestimonialCard 
              name="Priya Sharma"
              role="HR Manager"
              company="SECL"
              text="Mr. Sourabh's team building workshop created significant positive change in our organization. Communication improved dramatically and our employees are more engaged."
            />
            
            <TestimonialCard 
              name="Amit Patel"
              role="Business Owner"
              text="The Game of Business program helped me systematize my family business that was running on intuition. Now we have clear processes and our profits have increased substantially."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Life & Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join the thousands who have already experienced the power of our training programs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Contact Us Today
            </Link>
            <Link to="/courses" className="btn border-2 border-white text-white hover:bg-white hover:text-blue-600">
              Explore Our Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
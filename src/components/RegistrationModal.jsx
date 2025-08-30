import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { X } from 'lucide-react';
import { courses } from '../data/courses';

export default function RegistrationModal({ isOpen, onClose, program }) {
  const modalRef = useRef(null);
  const scrollYRef = useRef(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: program ? program.id.toString() : '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  
  // Update form data when program changes
  useEffect(() => {
    if (program) {
      setFormData(prev => ({
        ...prev,
        program: program.id.toString()
      }));
    }
  }, [program]);
  
  // Close modal when clicking outside and freeze background
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Freeze background exactly where it is (prevents any vertical jump)
      scrollYRef.current = window.scrollY || window.pageYOffset || 0;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      // Restore background scroll
      const y = Math.abs(parseInt(document.body.style.top || "0", 10)) || 0;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (y) window.scrollTo(0, y);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      const y = Math.abs(parseInt(document.body.style.top || "0", 10)) || 0;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      if (y) window.scrollTo(0, y);
    };
  }, [isOpen, onClose]);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission with GAS integration
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    console.log('=== Form Submission Started ===');
    console.log('Form data:', formData);
    console.log('Program:', program);
    console.log('Program title:', program?.title);
    console.log('Program object keys:', program ? Object.keys(program) : 'No program');

    try {
      const selectedCourse = courses.find(c => c.id.toString() === (formData.program || ''));
      const programTitle = program?.title || selectedCourse?.title || '';
      const params = new URLSearchParams({
        action: 'submitRegistration',
        sheetName: 'Program',
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        program: programTitle,
        message: formData.message
      });

      console.log('Selected program title:', programTitle);
      console.log('URL params:', params.toString());
      console.log('Fetching URL:', 'https://script.google.com/macros/s/AKfycbyLgYJlvw2uk6Hn5SspDi5y5DHvxlEFJg0LUsBST5JkzRIBthej8T52CE0sxGksNoTZxg/exec');

      const response = await fetch('https://script.google.com/macros/s/AKfycbyLgYJlvw2uk6Hn5SspDi5y5DHvxlEFJg0LUsBST5JkzRIBthej8T52CE0sxGksNoTZxg/exec', {
        method: 'POST',
        body: params
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      const responseText = await response.text();
      console.log('Raw response text:', responseText);

      let result;
      try {
        result = JSON.parse(responseText);
        console.log('Parsed result:', result);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        console.log('Response was not valid JSON');
        throw new Error('Invalid response format: ' + responseText);
      }
      
      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Registration submitted successfully!'
        });
        
        setFormData({
          name: '',
          email: '',
          phone: '',
          program: program ? program.id.toString() : '',
          message: ''
        });
        
        setTimeout(() => {
          onClose();
        }, 1500);
      } else {
        throw new Error(result.error || 'Submission failed');
      }

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit registration. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  if (!isOpen) return null;

  const modalContent = (
  <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
    <div
      ref={modalRef}
      className="relative w-full max-w-[760px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Top badge */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2">
        
      </div>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors rounded-full p-2 hover:bg-gray-100"
        aria-label="Close"
      >
        <X size={18} />
      </button>
      {/* Content */}
      <div className="p-8">
        <h2 className="text-3xl font-semibold text-gray-900">Register now</h2>
        <p className="mt-2 text-gray-600">
          Fill out this form, and we'll get you enrolled for the selected program.
        </p>
        {program && (
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100 text-sm">
            <span className="font-medium">Program:</span> {program.title}
          </div>
        )}
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="johndoe@email.com"
                />
              </div>
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                <input
                  type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+91 98765 43210"
                />
              </div>
              {/* Program */}
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-gray-700">Program interest</label>
                <select
                  id="program" name="program" value={formData.program} onChange={handleChange} required
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                >
                  <option value="">Select a Program</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.id.toString()}>{course.title}</option>
                  ))}
                </select>
              </div>
            </div>
            {/* Message */}
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Additional Information</label>
              <textarea
                id="message" name="message" value={formData.message} onChange={handleChange} rows="4"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Example text"
              ></textarea>
            </div>
            {/* Submit */}
            <div className="mt-6">
              <button
                type="submit" disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-lg transition-colors"
              >
                {isSubmitting ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </div>
          {/* Status Message */}
          {submitStatus.message && (
            <div className={`mt-4 p-4 rounded-lg text-sm ${
              submitStatus.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {submitStatus.message}
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
}
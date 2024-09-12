import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Use EmailJS to send form data
    emailjs
      .send(
        'service_p30frvv', // Your EmailJS service ID
        'template_20b8n75', // Your EmailJS template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        }, // Form data to send
        'p2FmLOOB7gO9y32FW' // Your Public API key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true); // Show success message
          setFormData({ name: '', email: '', message: '' }); // Reset form
          setLoading(false);
        },
        (error) => {
          console.log(error.text); // Handle error
          setLoading(false);
        }
      );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 sm:p-8">
      <div className="bg-[#1f1f1f] p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center uppercase tracking-wide">
          Contact Me
        </h2>

        {submitted ? (
          <div className="text-cyan-400 text-lg text-center animate-pulse">
            Your message has been sent! I’ll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-cyan-400 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-[#252526] text-cyan-400 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-cyan-400 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-[#252526] text-cyan-400 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-cyan-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-md bg-[#252526] text-cyan-400 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
              />
            </div>

            <div className="flex justify-center font-bold">
              <button
                type="submit"
                className={`px-6 py-3 rounded-md transition focus:ring-2 focus:ring-cyan-500 ${loading ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black cursor-not-allowed shadow-lg' : 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 shadow-lg'} ${loading ? 'animate-pulse' : 'hover:scale-105'}`}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm2 0a6 6 0 1 0 12 0 6 6 0 0 0-12 0z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

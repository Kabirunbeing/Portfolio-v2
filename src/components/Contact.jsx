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

    emailjs
      .send(
        'service_p30frvv',
        'template_20b8n75',
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        'p2FmLOOB7gO9y32FW'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="flex items-center justify-center min-h-screen bg-black p-4 sm:p-8">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-lg w-full">
        <h2 className="text-3xl font-extrabold text-cyan-400 mb-8 text-center uppercase tracking-wider">
          Contact Me
        </h2>

        {submitted ? (
          <div className="text-cyan-400 text-lg text-center animate-pulse">
            <p>Your message has been sent!</p>
            <p>I'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-cyan-400 mb-2 text-sm font-semibold">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-cyan-400 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-cyan-400 mb-2 text-sm font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-cyan-400 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-cyan-400 mb-2 text-sm font-semibold">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-3 rounded-md bg-gray-700 text-cyan-400 border border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-600 transition"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className={`px-6 py-3 rounded-md transition focus:ring-2 focus:ring-cyan-600 ${loading ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black cursor-not-allowed shadow-lg' : 'bg-gradient-to-r from-cyan-400 to-cyan-500 text-black hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-600 shadow-lg'} ${loading ? 'animate-pulse' : 'hover:scale-105'}`}
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

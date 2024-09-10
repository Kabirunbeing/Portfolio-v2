import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
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

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-cyan-400 text-black font-bold rounded-md transition hover:bg-cyan-500 focus:ring-2 focus:ring-cyan-500">
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;

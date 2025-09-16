import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Instagram, Facebook, Heart } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6]">
  <div
  className="relative py-16 text-center bg-cover bg-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-1613052271194-5427710fb39d?q=80&w=1012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
  }}
>
  <div className="px-4">
    <h1
      className="text-4xl md:text-5xl font-bold text-[#2F5233] mb-4 drop-shadow-lg"
    >
      Get in Touch
    </h1>
    <p
      className="text-xl text-[#333333] max-w-2xl mx-auto bg-red-200/80 rounded-xl px-4 py-2 shadow-md"
    >
      We'd love to hear from you. Send us a message and we'll respond as soon as possible.
    </p>
  </div>
</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#2F5233] mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#F7D6E0] rounded-lg focus:ring-2 focus:ring-[#A3C9A8] focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#F7D6E0] rounded-lg focus:ring-2 focus:ring-[#A3C9A8] focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-[#333333] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#F7D6E0] rounded-lg focus:ring-2 focus:ring-[#A3C9A8] focus:border-transparent"
                  placeholder="What is this regarding?"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-[#F7D6E0] rounded-lg focus:ring-2 focus:ring-[#A3C9A8] focus:border-transparent"
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#2F5233] hover:bg-[#3D6B41] text-white font-medium py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-[#2F5233] mb-6">Contact Information</h2>
            <p className="text-[#333333] mb-8">
              Have questions about our floral arrangements or custom orders? Reach out to us through any of the following channels.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex items-start">
                <div className="bg-[#F7D6E0] p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-[#2F5233]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2F5233]">Phone</h3>
                  <p className="text-[#333333]">+1 (555) 123-4567</p>
                  <p className="text-sm text-[#333333]">Mon-Fri: 9am-5pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#F7D6E0] p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-[#2F5233]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2F5233]">Email</h3>
                  <p className="text-[#333333]">hello@bloomify.com</p>
                  <p className="text-sm text-[#333333]">We respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#F7D6E0] p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-[#2F5233]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#2F5233]">Location</h3>
                  <p className="text-[#333333]">123 Blossom Street</p>
                  <p className="text-[#333333]">Floral Park, NY 11001</p>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-[#2F5233] mb-4">Follow Bloomify</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#C7B8EA] hover:bg-[#B0A1D3] p-3 rounded-full transition duration-300">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-[#C7B8EA] hover:bg-[#B0A1D3] p-3 rounded-full transition duration-300">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="bg-[#C7B8EA] hover:bg-[#B0A1D3] p-3 rounded-full transition duration-300">
                  <Heart className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="mt-12 p-6 bg-[#F7D6E0] rounded-2xl text-center">
              <h3 className="font-semibold text-[#2F5233] mb-2">Visit Our Showroom</h3>
              <p className="text-[#333333] text-sm">
                Come experience the beauty and fragrance of our floral arrangements in person.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#A3C9A8] bg-opacity-20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2F5233] text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-[#2F5233] mb-3">Do you offer custom floral arrangements?</h3>
              <p className="text-[#333333]">Yes, we specialize in custom arrangements for all occasions. Please allow 3-5 days advance notice for custom orders.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-[#2F5233] mb-3">What is your delivery policy?</h3>
              <p className="text-[#333333]">We offer local delivery within a 20-mile radius for a flat fee of $15. Orders over $100 qualify for free delivery.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-[#2F5233] mb-3">How far in advance should I place my order?</h3>
              <p className="text-[#333333]">We recommend placing orders at least 48 hours in advance. For weddings and large events, 2-3 weeks notice is ideal.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-md">
              <h3 className="font-semibold text-[#2F5233] mb-3">Do you offer subscription services?</h3>
              <p className="text-[#333333]">Yes! We have weekly, bi-weekly, and monthly subscription options to keep your home or office filled with fresh flowers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
import React, { useState } from 'react';
import { HiPhone, HiMail } from 'react-icons/hi';
import { supabase } from '../lib/supabase';
import { ContactFormData } from '../types/contact';
import { toast } from 'react-hot-toast';
import { GoogleMap } from './GoogleMap';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const domain = window.location.hostname;
      const subjectWithDomain = `${formData.subject} (${domain})`;

      const { error } = await supabase
        .from('quadrate_contact_submissions')
        .insert([{
          ...formData,
          subject: subjectWithDomain
        }]);

      if (error) throw error;

      toast.success('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="relative overflow-hidden bg-[linear-gradient(180deg,#07131f_0%,#0b1c2c_100%)]">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,176,235,0.07),transparent_40%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,198,53,0.05),transparent_40%)] pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="mb-4 text-2xl font-medium tracking-tight text-[#f4fbff] md:text-3xl">
            Get in Touch
          </h2>
          <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#4ec4ff]/30 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Cards */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              {/* Phone Card */}
              <div className="rounded-[1.5rem] border border-[#24435d] bg-[rgba(12,27,42,0.9)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="rounded-xl bg-[#102335] p-3">
                    <HiPhone className="h-6 w-6 text-[#4ec4ff]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-[#f4fbff]">Phone</h3>
                    <a 
                      href="tel:+94 81 123 4567" 
                      className="text-lg text-[#9db0c3] hover:text-[#dce7f1] hover:underline"
                    >
                      +94 81 123 4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="rounded-[1.5rem] border border-[#24435d] bg-[rgba(12,27,42,0.9)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="rounded-xl bg-[#102335] p-3">
                    <HiMail className="h-6 w-6 text-[#4ec4ff]" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-xl font-semibold text-[#f4fbff]">Email</h3>
                    <a 
                      href="mailto:info@gakandy.com" 
                      className="text-lg text-[#9db0c3] hover:text-[#dce7f1] hover:underline"
                    >
                      info@gakandy.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-[1.75rem] border border-[#24435d] bg-[rgba(12,27,42,0.92)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#dce7f1]">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-xl border border-[#24435d] bg-[#102335] px-4 py-3 text-[#f4fbff] placeholder-[#7d92a7] shadow-sm focus:border-[#4ec4ff] focus:ring-2 focus:ring-[#12314a]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#dce7f1]">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-xl border border-[#24435d] bg-[#102335] px-4 py-3 text-[#f4fbff] placeholder-[#7d92a7] shadow-sm focus:border-[#4ec4ff] focus:ring-2 focus:ring-[#12314a]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#dce7f1]">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-xl border border-[#24435d] bg-[#102335] px-4 py-3 text-[#f4fbff] placeholder-[#7d92a7] shadow-sm focus:border-[#4ec4ff] focus:ring-2 focus:ring-[#12314a]"
                    placeholder="Subject of your message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#dce7f1]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-xl border border-[#24435d] bg-[#102335] px-4 py-3 text-[#f4fbff] placeholder-[#7d92a7] shadow-sm focus:border-[#4ec4ff] focus:ring-2 focus:ring-[#12314a]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full rounded-full bg-[#22B0EB] px-6 py-3 font-medium text-[#06131f] transition-all duration-300 ${
                    isSubmitting 
                      ? 'opacity-70 cursor-not-allowed' 
                      : 'hover:bg-[#56d4ff]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Map, Business Hours */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Map Card */}
              <div className="overflow-hidden rounded-[1.5rem] border border-[#24435d] bg-[rgba(12,27,42,0.92)] shadow-[0_18px_50px_rgba(0,0,0,0.22)]">
                <GoogleMap />
              </div>

              {/* Business Hours Card */}
              <div className="rounded-[1.5rem] border border-[#24435d] bg-[rgba(12,27,42,0.9)] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1">
                <h3 className="mb-4 text-xl font-semibold text-[#f4fbff]">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#9db0c3]">Monday - Friday</span>
                    <span className="font-medium text-[#dce7f1]">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#9db0c3]">Saturday</span>
                    <span className="font-medium text-[#dce7f1]">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#9db0c3]">Sunday</span>
                    <span className="text-[#dce7f1]">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4ec4ff]/20 to-transparent"></div>
    </div>
  );
}

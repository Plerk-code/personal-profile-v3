import React, { useState } from 'react';
import { Send, Mail, Phone, Linkedin, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  investorType: string;
  investmentAmount: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  investorType?: string;
  message?: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    investorType: '',
    investmentAmount: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const investorTypes = [
    'Angel Investor',
    'Venture Capital',
    'Private Equity',
    'Family Office',
    'Strategic Partner',
    'Other',
  ];

  const investmentRanges = [
    'R500K - R1M',
    'R1M - R3M',
    'R3M - R5M',
    'R5M+',
    'Prefer not to say',
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.investorType) {
      newErrors.investorType = 'Please select investor type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = 'Message should be at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        investorType: '',
        investmentAmount: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss investment opportunities? Get in touch with us today
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                We're actively seeking strategic partners and investors who share our vision of transforming Africa's digital landscape through artificial intelligence. Let's explore how we can work together.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="mailto:bhinson@plerk.co.za"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-semibold">bhinson@plerk.co.za</div>
                </div>
              </a>

              <a
                href="tel:+27825654665"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="font-semibold">+27 (82) 565-4665</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/[PROFILE]"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">LinkedIn</div>
                  <div className="font-semibold">Connect on LinkedIn</div>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Schedule</div>
                  <div className="font-semibold">Book a Meeting</div>
                </div>
              </a>
            </div>

            {/* Additional Info */}
            <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
              <h4 className="font-bold mb-3">Response Time</h4>
              <p className="text-gray-300 text-sm">
                We typically respond to investment inquiries within 24 hours. For urgent matters, please call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Investment Inquiry</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-green-400">Message sent successfully!</div>
                  <div className="text-sm text-gray-300 mt-1">We'll get back to you within 24 hours.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.name ? 'border-red-500' : 'border-white/20'
                  } rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <div className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name}
                  </div>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.email ? 'border-red-500' : 'border-white/20'
                  } rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <div className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </div>
                )}
              </div>

              {/* Investor Type */}
              <div>
                <label htmlFor="investorType" className="block text-sm font-semibold mb-2">
                  Investor Type *
                </label>
                <select
                  id="investorType"
                  name="investorType"
                  value={formData.investorType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.investorType ? 'border-red-500' : 'border-white/20'
                  } rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white`}
                >
                  <option value="" className="bg-slate-900">Select investor type</option>
                  {investorTypes.map((type) => (
                    <option key={type} value={type} className="bg-slate-900">
                      {type}
                    </option>
                  ))}
                </select>
                {errors.investorType && (
                  <div className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.investorType}
                  </div>
                )}
              </div>

              {/* Investment Amount */}
              <div>
                <label htmlFor="investmentAmount" className="block text-sm font-semibold mb-2">
                  Investment Interest Range (Optional)
                </label>
                <select
                  id="investmentAmount"
                  name="investmentAmount"
                  value={formData.investmentAmount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white"
                >
                  <option value="" className="bg-slate-900">Select range</option>
                  {investmentRanges.map((range) => (
                    <option key={range} value={range} className="bg-slate-900">
                      {range}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  } rounded-lg focus:outline-none focus:border-cyan-400 transition-colors text-white placeholder-gray-400 resize-none`}
                  placeholder="Tell us about your investment interests and any questions you have..."
                />
                {errors.message && (
                  <div className="mt-2 text-sm text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Investment Inquiry
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

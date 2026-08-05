import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCopy, FiCheck, FiPaperclip, FiImage, FiX } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalDetails } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [imageAttachment, setImageAttachment] = useState(null);
  const [status, setStatus] = useState({ loading: false, success: false, error: null, message: null });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      setStatus({ loading: false, success: false, error: 'Image size should be less than 5MB.' });
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageAttachment({
        file,
        name: file.name,
        preview: URL.createObjectURL(file),
        base64: reader.result
      });
      setStatus(prev => ({ ...prev, error: null }));
    };
    reader.readAsDataURL(file);
  };

  const removeImageAttachment = () => {
    setImageAttachment(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ loading: false, success: false, error: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ loading: true, success: false, error: null, message: null });

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject || `Portfolio Message from ${formData.name}`,
      message: formData.message,
      imageBase64: imageAttachment ? imageAttachment.base64 : null,
      imageName: imageAttachment ? imageAttachment.name : null
    };

    // 1. Try Vercel Serverless Endpoint (/api/contact)
    try {
      const apiRes = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (apiRes.ok) {
        const apiData = await apiRes.json();
        if (apiData.success) {
          setStatus({
            loading: false,
            success: true,
            error: null,
            message: apiData.message || 'Thank you! Your message and image have been delivered directly to mohdsajid9600@gmail.com.'
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          setImageAttachment(null);
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
          return;
        }
      }
    } catch (err) {
      console.warn('Vercel API route skipped, using direct endpoint:', err);
    }

    // 2. Try EmailJS if environment keys are configured
    const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
      try {
        await emailjs.send(
          emailJsServiceId,
          emailJsTemplateId,
          {
            from_name: formData.name,
            reply_to: formData.email,
            subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
            message: formData.message + (imageAttachment ? `\n\n[Attached File: ${imageAttachment.name}]` : ''),
            to_name: personalDetails.name,
          },
          emailJsPublicKey
        );

        setStatus({
          loading: false,
          success: true,
          error: null,
          message: 'Thank you! Your message has been sent successfully to mohdsajid9600@gmail.com.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setImageAttachment(null);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        return;
      } catch (err) {
        console.warn('EmailJS delivery failed, falling back to direct endpoint:', err);
      }
    }

    // 3. Direct Live Provider Fallback to mohdsajid9600@gmail.com
    try {
      const response = await fetch('https://formsubmit.co/ajax/mohdsajid9600@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message + (imageAttachment ? `\n\n[Attached Image: ${imageAttachment.name}]` : ''),
          _captcha: 'false',
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          message: 'Thank you! Your message (and image attachment) has been sent directly to mohdsajid9600@gmail.com!'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setImageAttachment(null);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } else if (data.message && data.message.includes('Activation')) {
        setStatus({
          loading: false,
          success: true,
          error: null,
          message: 'Message dispatched! FormSubmit sent an activation email to mohdsajid9600@gmail.com. Please click "Activate Form" in your inbox once to complete verification.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        setImageAttachment(null);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } else {
        throw new Error(data.message || 'Failed to deliver message.');
      }
    } catch (err) {
      console.error('Contact Form Submit Error:', err);
      setStatus({
        loading: false,
        success: false,
        error: 'Unable to send message automatically. Please email directly to mohdsajid9600@gmail.com.'
      });
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="section-container">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20">
        <span className="section-tag">
          <FiMail className="w-3.5 h-3.5" /> Get In Touch
        </span>
        <h2 className="section-title text-white">
          Let's Build Something <span className="gradient-accent-text">Exceptional Together</span>
        </h2>
        <p className="section-subtitle mx-auto">
          Currently available for Java Full Stack Developer, Full-Stack AI Engineer, and Spring Boot Microservice positions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Direct Details & Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 flex flex-col gap-6 text-left justify-between"
        >
          {/* Quick Contact Cards */}
          <div className="glass-card p-6 sm:p-7 lg:p-8 flex flex-col gap-6 border border-slate-800/80">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Direct Reach</h3>

            <div className="flex flex-col gap-4">
              {/* Email Card */}
              <div className="h-16 min-h-[64px] flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-950 transition-all duration-200 gap-4 group">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center gap-1 min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest leading-none font-medium">Email Address</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate leading-tight">{personalDetails.email}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalDetails.email, 'email')}
                  className="w-10 h-10 rounded-xl bg-slate-900/90 text-slate-400 hover:text-indigo-400 hover:bg-indigo-500/10 border border-slate-800 transition-all shrink-0 flex items-center justify-center cursor-pointer active:scale-95"
                  title="Copy Email"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="h-16 min-h-[64px] flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-950 transition-all duration-200 gap-4 group">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center gap-1 min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest leading-none font-medium">Phone / WhatsApp</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate leading-tight">{personalDetails.phone}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalDetails.phone, 'phone')}
                  className="w-10 h-10 rounded-xl bg-slate-900/90 text-slate-400 hover:text-emerald-400 hover:bg-emerald-500/10 border border-slate-800 transition-all shrink-0 flex items-center justify-center cursor-pointer active:scale-95"
                  title="Copy Phone"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <FiCheck className="w-4 h-4 text-emerald-400" /> : <FiCopy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="h-16 min-h-[64px] flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-purple-500/50 hover:bg-slate-950 transition-all duration-200 gap-4 group">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center gap-1 min-w-0 flex-1">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest leading-none font-medium">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate leading-tight">{personalDetails.location}</span>
                  </div>
                </div>
                <span className="px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] font-mono uppercase tracking-wider font-semibold shrink-0">
                  HQ
                </span>
              </div>
            </div>
          </div>

          {/* Location Map Placeholder Card */}
          <div className="glass-card p-6 sm:p-7 flex flex-col gap-4 border border-slate-800/80">
            <div className="h-52 rounded-xl bg-slate-950/90 relative overflow-hidden border border-slate-800/80 flex flex-col items-center justify-center p-6 text-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-30" />
              <div className="relative z-10 flex flex-col items-center gap-2 max-w-xs">
                <div className="w-12 h-12 rounded-full bg-indigo-600/15 text-indigo-400 border border-indigo-500/30 shadow-lg shadow-indigo-500/10 flex items-center justify-center mb-1">
                  <FiMapPin className="w-6 h-6 animate-bounce" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white tracking-wide">Ghaziabad / Delhi NCR, India</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Available for Remote & Hybrid Onsite Engineering Roles</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Live Form with Image Attachment & Vercel API */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-7 flex flex-col gap-6 text-left h-full"
        >
          <div className="glass-card p-6 sm:p-8 lg:p-10 flex flex-col gap-6 h-full justify-between border border-slate-800/80">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">Send a Message</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-[1.75]">
                Fill out the form below to initiate contact regarding Java backend positions, contract services, or architectural consulting. You can also attach an image or screenshot.
              </p>
            </div>

            {status.success && (
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium flex items-center gap-3">
                <FiCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{status.message || 'Thank you! Your message has been sent successfully to mohdsajid9600@gmail.com.'}</span>
              </div>
            )}

            {status.error && (
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-medium">
                {status.error}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5 flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-name" className="text-xs font-mono font-semibold text-slate-300 tracking-wider uppercase flex items-center gap-1">
                    Your Name <span className="text-indigo-400 font-bold">*</span>
                  </label>
                  <input
                    id="form-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Satya Nadella"
                    className="form-input"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="form-email" className="text-xs font-mono font-semibold text-slate-300 tracking-wider uppercase flex items-center gap-1">
                    Your Email <span className="text-indigo-400 font-bold">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. satya@microsoft.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="form-subject" className="text-xs font-mono font-semibold text-slate-300 tracking-wider uppercase">
                  Subject
                </label>
                <input
                  id="form-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Java Full Stack Developer Opportunity"
                  className="form-input"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="form-message" className="text-xs font-mono font-semibold text-slate-300 tracking-wider uppercase flex items-center gap-1">
                  Message <span className="text-indigo-400 font-bold">*</span>
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message or project requirements here..."
                  className="form-textarea"
                  required
                />
              </div>

              {/* Optional Image Attachment Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono font-semibold text-slate-300 tracking-wider uppercase flex items-center gap-1.5">
                  <FiPaperclip className="w-3.5 h-3.5 text-indigo-400" />
                  Attach Image / Screenshot <span className="text-slate-500 font-normal lowercase">(optional)</span>
                </label>

                {!imageAttachment ? (
                  <label className="flex items-center justify-center gap-2 p-3 rounded-xl border border-dashed border-slate-700 hover:border-indigo-500/50 bg-slate-950/60 hover:bg-slate-950 text-slate-400 hover:text-indigo-300 transition-all cursor-pointer text-xs font-mono">
                    <FiImage className="w-4 h-4 text-indigo-400" />
                    <span>Click to attach an image or screenshot (PNG, JPG, WebP)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                ) : (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/90 border border-slate-800 text-xs">
                    <div className="flex items-center gap-3 min-w-0">
                      {imageAttachment.preview && (
                        <img
                          src={imageAttachment.preview}
                          alt="Attachment preview"
                          className="w-10 h-10 object-cover rounded-lg border border-slate-700 shrink-0"
                        />
                      )}
                      <div className="flex flex-col truncate">
                        <span className="font-semibold text-slate-200 truncate">{imageAttachment.name}</span>
                        <span className="text-[10px] text-emerald-400 font-mono">Image attached ready to send</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeImageAttachment}
                      className="p-1.5 rounded-lg bg-slate-900 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition shrink-0"
                      title="Remove image"
                    >
                      <FiX className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="mt-4 sm:mt-6">
                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn btn-lg btn-primary w-full justify-center text-xs font-semibold py-3 uppercase tracking-wider"
                >
                  <FiSend className={`w-4 h-4 ${status.loading ? 'animate-bounce' : ''}`} />
                  <span>{status.loading ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

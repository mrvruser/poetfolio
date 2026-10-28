"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Create client mailto action to guarantee message delivery without third-party exposure
    const mailtoUri = `mailto:vijayaregunath005@gmail.com?subject=${encodeURIComponent(
      subject || `Portfolio Contact from ${name}`
    )}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUri;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 px-6 sm:px-10 lg:px-20 transition-colors duration-400">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-semibold px-4 py-1.5 rounded-full border border-theme bg-surface-theme text-accent-theme inline-block mb-3">
            Initiate Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold font-serif-title mb-4">
            Let’s Engineer Together
          </h2>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-secondary leading-relaxed">
            Whether inquiring about research collaborations, incubation initiatives, full-stack projects, or intellectual discussions on artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Direct Channels */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl border border-theme bg-card-theme space-y-4">
              <h3 className="font-bold font-serif-title text-xl mb-4">Direct Channels</h3>

              <div>
                <span className="text-xs text-secondary block font-semibold">Email</span>
                <a
                  href="mailto:vijayaregunath005@gmail.com"
                  className="text-sm font-medium hover:text-accent-theme transition-colors"
                >
                  vijayaregunath005@gmail.com
                </a>
              </div>

              <div>
                <span className="text-xs text-secondary block font-semibold">Phone / WhatsApp</span>
                <a
                  href="https://wa.me/918300398072"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-accent-theme transition-colors"
                >
                  +91 8300398072
                </a>
              </div>

              <div>
                <span className="text-xs text-secondary block font-semibold">Location</span>
                <p className="text-sm text-secondary">
                  Karambakkudi, Pudukkottai, Tamil Nadu, India
                </p>
              </div>
            </div>

            {/* Social Grid */}
            <div className="p-6 rounded-3xl border border-theme bg-card-theme">
              <span className="text-xs uppercase font-bold tracking-wider text-accent-theme block mb-4">
                Verified Social Footprint
              </span>
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold">
                <a
                  href="https://www.linkedin.com/in/mr-vijayaregunath-t-77b427316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-theme bg-surface-theme hover:scale-103 transition-transform text-center"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="https://github.com/vijayaregunath-t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-theme bg-surface-theme hover:scale-103 transition-transform text-center"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://x.com/RhConqueror?t=qszqmX_cMg6LmDDkZA&s=08"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-theme bg-surface-theme hover:scale-103 transition-transform text-center"
                >
                  X (Twitter) ↗
                </a>
                <a
                  href="https://www.instagram.com/vijay_a_regunath.t?utm_source=qr&igsh=YW9mODF6Y2ZxdWt0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-theme bg-surface-theme hover:scale-103 transition-transform text-center"
                >
                  Instagram ↗
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-3xl border border-theme bg-card-theme shadow-md space-y-4"
            >
              <div>
                <label className="text-xs font-semibold block mb-1 text-secondary">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Dr. Aravind / Priya Sharma"
                  className="w-full px-4 py-3 rounded-xl border border-theme bg-surface-theme text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1 text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-3 rounded-xl border border-theme bg-surface-theme text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1 text-secondary">
                  Subject / Topic
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Research Collaboration, Project Review, etc."
                  className="w-full px-4 py-3 rounded-xl border border-theme bg-surface-theme text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label className="text-xs font-semibold block mb-1 text-secondary">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your thoughts, proposal, or inquiry here..."
                  className="w-full px-4 py-3 rounded-xl border border-theme bg-surface-theme text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-102 shadow-md"
                style={{
                  backgroundColor: "var(--accent-primary)",
                  color: "#08090C",
                  boxShadow: "0 0 20px var(--accent-glow)",
                }}
              >
                Send Message via Mail Client
              </button>

              {submitted && (
                <p className="text-center text-xs text-accent-theme mt-2 font-medium">
                  ✓ Prepared message! Your default email client has been opened.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}


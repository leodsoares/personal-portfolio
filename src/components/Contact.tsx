import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiSend } from 'react-icons/fi';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your actual form handler (e.g. Formspree, EmailJS)
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-900/50">
      <div className="max-w-xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="text-center mb-12">
            <p className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
              Let's Talk
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </div>

          {sent ? (
            <div className="text-center py-12 bg-gray-900 border border-gray-800 rounded-2xl">
              <p className="text-2xl mb-2">✅</p>
              <p className="text-lg font-medium">Message sent!</p>
              <p className="text-gray-400 text-sm mt-2">I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { label: 'Name', name: 'name', type: 'text', placeholder: 'Your name' },
                { label: 'Email', name: 'email', type: 'email', placeholder: 'your@email.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-sm text-gray-400 mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    required
                    placeholder={field.placeholder}
                    value={form[field.name as keyof typeof form]}
                    onChange={handleChange}
                    className="w-full bg-gray-900 border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 outline-none transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm text-gray-400 mb-1.5">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="What's on your mind?"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 focus:border-indigo-500 rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-xl font-medium text-sm transition-colors"
              >
                <FiSend size={15} />
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

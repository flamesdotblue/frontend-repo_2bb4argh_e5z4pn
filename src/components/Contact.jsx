import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.detail || 'Failed to send message');
      }

      setStatus({ loading: false, success: 'Message sent successfully!', error: null });
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: null, error: err.message || 'Something went wrong' });
    }
  };

  return (
    <section id="contact" className="relative bg-[#0B0F19] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/10 via-transparent to-blue-600/10" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold sm:text-3xl">Contact</h2>
          <p className="mt-2 text-sm text-blue-200/70">Have a project in mind? Let’s talk.</p>
        </div>

        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label className="mb-1 block text-xs text-blue-100/80">Name</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={onChange}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              placeholder="Your name"
            />
          </div>
          <div className="sm:col-span-1">
            <label className="mb-1 block text-xs text-blue-100/80">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={onChange}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs text-blue-100/80">Subject</label>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={onChange}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              placeholder="Project inquiry"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-1 block text-xs text-blue-100/80">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={onChange}
              className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              placeholder="Tell me a bit about your project..."
            />
          </div>

          <div className="sm:col-span-2 mt-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={status.loading}
              className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-500 to-blue-500 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status.loading ? 'Sending…' : 'Send Message'}
            </button>
            {status.success && <span className="text-sm text-green-400">{status.success}</span>}
            {status.error && <span className="text-sm text-red-400">{status.error}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}

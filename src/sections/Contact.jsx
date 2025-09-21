import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError]   = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending'); setError('');

    try {
      const form = e.currentTarget;
      const body = new FormData(form);
      body.append('_subject', 'New message from portfolio');

      const res = await fetch('https://formspree.io/f/mkgqwgda', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      });

      if (!res.ok) {
        let details = '';
        try {
          const data = await res.json();
          details = data?.errors?.map(x => x.message).join(', ');
        } catch {}
        throw new Error(details || `HTTP ${res.status}`);
      }

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong');
    }
  }

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2>Contact</h2>

        <div className="grid grid--2">
          {/* LEFT: quick contact links */}
          <div className="card">
            <h3>Reach me</h3>
            <ul className="contact-list">
              <li>
                <a href="mailto:ayechanaung.dec27@gmail.com" title="Send me an email">
                   ayechanaung.dec27@gmail.com
                </a>
              </li>
              <li>
                <a href="https://github.com/AyeCham" target="_blank" rel="noopener">
                   github.com/AyeCham
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/ayecham" target="_blank" rel="noopener">
                   linkedin.com/in/ayecham
                </a>
              </li>
              <li className="muted"> Chiang Rai, TH</li>
            </ul>
          </div>

          {/* RIGHT: email form */}
          <form className="card form" onSubmit={onSubmit} noValidate>
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Message<textarea name="message" rows={5} required /></label>

            {/* Honeypot (spam trap) */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>

            {status === 'success' && (
              <p className="muted small" style={{ color: '#10b981' }} aria-live="polite">✅ Sent! I’ll reply soon.</p>
            )}
            {status === 'error' && (
              <p className="muted small" style={{ color: '#ef4444' }} aria-live="assertive">❌ Failed to send — {error}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

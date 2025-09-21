import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');   // idle | sending | success | error
  const [error, setError]   = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    // Grab form fields
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      message: fd.get('message'),
      _subject: 'New message from portfolio',
    };

    try {
      const res = await fetch('https://formspree.io/f/mkgqwgda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',   // prevents redirect to a Formspree thank-you page
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success');
      e.currentTarget.reset();
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
          <div className="card">
            <h3>Reach me</h3>
            <p className="muted"> ayechanaung.dec27@gmail.com</p>
            <p className="muted"> github.com/AyeCham</p>
            <p className="muted"> linkedin.com/in/ayecham</p>
            <p className="muted">📍 Chiang Rai, TH</p>
          </div>

          <form className="card form" onSubmit={onSubmit} noValidate>
            <label>Name<input name="name" required /></label>
            <label>Email<input name="email" type="email" required /></label>
            <label>Message<textarea name="message" rows="5" required /></label>

            {/* Honeypot (spam trap) */}
            <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

            <button className="btn btn--primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send'}
            </button>

            {status === 'success' && (
              <p className="muted small" style={{ color: '#10b981' }} aria-live="polite">
                Sent! I’ll reply soon.
              </p>
            )}
            {status === 'error' && (
              <p className="muted small" style={{ color: '#ef4444' }} aria-live="assertive">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

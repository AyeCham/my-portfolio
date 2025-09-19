import React, { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending'); setError('');
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name'),
      email: fd.get('email'),
      message: fd.get('message'),
    };

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('Failed to send');
      setStatus('success'); e.currentTarget.reset();
    } catch (err) {
      setStatus('error'); setError(err.message || 'Something went wrong');
    }
  }

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2>Contact</h2>
        <form className="card form" onSubmit={onSubmit}>
          <label>Name<input name="name" required /></label>
          <label>Email<input name="email" type="email" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="btn btn--primary" disabled={status==='sending'}>
            {status==='sending' ? 'Sending…' : 'Send'}
          </button>
          {status==='success' && <p className="muted small" style={{color:'#10b981'}}> Sent! I’ll reply soon.</p>}
          {status==='error'   && <p className="muted small" style={{color:'#ef4444'}}> {error}</p>}
          <input type="text" name="_gotcha" style={{display:'none'}} aria-hidden="true" />
        </form>
      </div>
    </section>
  );
}

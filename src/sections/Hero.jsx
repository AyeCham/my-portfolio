import React from 'react'



export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="kicker">HELLO, I’M CHAN</p>
          <h1>Data & AI • Computer Enginner</h1>
          <p className="muted">
            I build practical AI and reliable web apps. Final-year Computer Engineering student at MFU (Thailand).
          </p>
          <div className="actions">
            <a href="#projects" className="btn btn--primary">View Projects</a>
            <a href={`${import.meta.env.BASE_URL}document/MyResume.pdf`} target="_blank" rel="noopener" className="btn btn--primary" s>View Résumé</a>
          </div>
          <p className="muted small">📍 Chiang Rai, Thailand · Open to internships & freelance</p>
        </div>

        <div className="hero__card card">
        <img src={`${import.meta.env.BASE_URL}images/IMG_24001.png`} alt="portrait" />
          <ul className="tags">
            <li>Python</li><li>PyTorch</li><li>YOLOv8</li>
            <li>OpenCV</li><li>SQL</li><li>Docker</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

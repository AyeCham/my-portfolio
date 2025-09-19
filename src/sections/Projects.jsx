import React from 'react'

const PROJECTS = [

  {
    title: 'Insect & Pest Detection (Raspberry Pi 5 + Pi HQ Camera)',
    desc: 'Curated a Thailand-focused pest dataset (IP102 + custom). Deployed real-time detection on Pi 5; alerts sent to Discord via webhook.',
    tags: ['Raspberry Pi', 'YOLOv8', 'Discord', 'Computer Vision'],
    link: 'https://github.com/AyeCham/Insect-Detection-System-For-Common-Pest-In-Thailand'
  },
  {
    title: 'Food & Beverage Detection for Mini-market (Jetson Orin Nano)',
    desc: 'Built a store-shelf detector to identify and count products; streamed counts to a live web dashboard.',
    tags: ['Jetson Orin', 'YOLOv8', 'Flask', 'Dashboard'],
    link: 'https://github.com/AyeCham/snack-beverage-detection'
  },
  {
    title: 'Staff/Customer Detection & Engagement + Sentiment (RTSP CCTV)',
    desc: 'Real-time staff vs. customer detection on RTSP feeds; engagement duration per staff–customer pair; logged results to CSV and Flask dashboard.',
    tags: ['RTSP', 'YOLOv8', 'Flask', 'Analytics'],
    link: 'https://github.com/AyeCham/custmoer_behavior_detection'
  },
  {
    title: 'Library System',
    desc: 'JWT auth, role dashboards. Node/Express + MariaDB.',
    tags: ['Node.js', 'Express', 'SQL'],
    link: 'https://github.com/AyeCham/Library_WebApp'
  },

]


export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="grid">
          {PROJECTS.map(p => (
            <a className="card project" href={p.link} key={p.title} target="_blank" rel="noreferrer">
              <div className="thumb"></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

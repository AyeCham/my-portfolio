import React from 'react'

const SKILLS = ['Python','PyTorch','YOLOv8/11','OpenCV','Pandas','SQL','Airflow','NiFi','Spark','Docker','Node.js','Express','React','Flutter']

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <h2>Skills</h2>
        <ul className="chiplist">
          {SKILLS.map(s => <li key={s}>{s}</li>)}
        </ul>
      </div>
    </section>
  )
}

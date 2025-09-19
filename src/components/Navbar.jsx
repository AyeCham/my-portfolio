import React from 'react'

export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="brand">CHAN • Portfolio</a>
        <nav className="links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

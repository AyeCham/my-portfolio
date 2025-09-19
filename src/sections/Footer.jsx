import React, { useEffect, useState } from 'react'

export default function Footer() {
  const [year, setYear] = useState('')
  useEffect(() => setYear(String(new Date().getFullYear())), [])
  return (
    <footer className="footer">
      <div className="container">
        © {year} Chan — Built with React & CSS
      </div>
    </footer>
  )
}

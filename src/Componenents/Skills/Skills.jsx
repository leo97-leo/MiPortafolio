import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <h1>Mis habilidades</h1>
      <div className="skills-base">
        {/* Habilidades técnicas */}
        <div className="skill-box">
          <i className="fas fa-code"></i>
          <h3>Lenguajes & Frameworks</h3>
          <p>C/C++, JavaScript (ES6+), TypeScript básico, React js, React native</p>
        </div>

        <div className="skill-box">
          <i className="fas fa-database"></i>
          <h3>Bases de datos</h3>
          <p>MongoDB, MySQL</p>
        </div>

        <div className="skill-box">
          <i className="fas fa-cloud-upload-alt"></i>
          <h3>Despliegue & Control de versiones</h3>
          <p>Git, GitHub, Vercel</p>
        </div>

        <div className="skill-box">
          <i className="fas fa-paint-brush"></i>
          <h3>Diseño UI & APIs</h3>
          <p>Material UI, CSS, APIs REST, WhatsApp API, Google Maps, QR codes</p>
        </div>

        {/* Habilidades blandas */}
        <div className="skill-box">
          <i className="fas fa-comments"></i>
          <h3>Comunicación</h3>
          <p>Comunicación clara y cercana con clientes</p>
        </div>

        <div className="skill-box">
          <i className="fas fa-clock"></i>
          <h3>Organización</h3>
          <p>Gestión efectiva del tiempo y tareas</p>
        </div>

        <div className="skill-box">
          <i className="fas fa-rocket"></i>
          <h3>Adaptabilidad</h3>
          <p>Aprendizaje continuo y adaptación a nuevas tecnologías</p>
        </div>

        <div className="skill-box">
          <i className="fas fa-user-check"></i>
          <h3>Responsabilidad</h3>
          <p>Trabajo autónomo y compromiso con la calidad</p>
        </div>
      </div>
    </div>
  )
}

export default Skills

import React from 'react'
import foto from "../../assets/Foto.jpg"
import "./About.css"

const About = () => {
	return (
		<div className="about-details" id="about">
			<div className="circle-bg">
				<img src={foto} alt="foto" />
			</div>

			<div className="about-infos">
				<h1>Sobre mí</h1>
				<p className="description">
					Soy apasionado por la tecnología y me especializo en el desarrollo de 
					software web con un enfoque práctico y funcional.
					<br/>
					He comenzado a trabajar con emprendedores y pequeños negocios, 
					desarrollando proyectos como menús digitales y páginas web 
					personalizadas. Cada uno de ellos ha sido una oportunidad para
					aplicar mis habilidades y mejorar con cada entrega.
					<br />
					Mi enfoque está en entender las necesidades del cliente y ofrecer 
					soluciones simples, funcionales y bien diseñadas, listas para crecer
					junto a su negocio.
				</p>
			</div>
		</div>
	)
}

export default About

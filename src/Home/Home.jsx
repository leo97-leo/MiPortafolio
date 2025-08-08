import React from 'react'
import Hero from "../Componenents/Hero/Hero"
import About from "../Componenents/About/About"
import Skills from "../Componenents/Skills/Skills"
import "./Home.css"
import Portafolio from "../Componenents/Portafolio/Portafolio"
import Contacto from "../Componenents/ContactForm/ContactForm"


const Home = () => {
	return (
		<div className="home">
			<Hero />
			<About />
			<Skills />
			<Portafolio />
			<Contacto />
		</div>
	)
}

export default Home;
import foto from "../../assets/Foto.jpg"
import "./Hero.css"


const Hero = () => {
	return (
		<div className="hero"  id="hero">
			<div className="text-container">
			<span>Hola soy</span>
				<h1>Leobardo Antunez Cayetano</h1>
				<p>Soy ingeniero en telemática y desarrollador de software freelance. 
					Me dedico a crear soluciones digitales para negocios, como páginas
					 web, menús interactivos y sistemas personalizados. Mi enfoque es 
					 ayudarte a digitalizar tu negocio de forma eficiente y profesional
					 </p>

				<a href="" target="blank" className="btn">
					Contáctame
				</a>
				</div>
				<div className="image-container">
				<div className="circle-bg">
					<img src={foto} alt="foto" />
				</div>
					
				</div>
		</div>
	)
}

export default Hero
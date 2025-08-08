import React from 'react'
import "./ContactForm.css"
const ContactForm = () => {
	return (
			<div className="contact" id="contact">
			<h1>Contacto</h1>
			<div className="contact-container">
			<div className="contact-info">
				<div className="info-content">
				<i className="fas fa-usercircle icon "></i>
				<h2>INFORMACION DE CONTACTO</h2>
				<p>
					<i className="fas fa-envelope"></i>
					leo.ayuujk@gmail.com
				</p>
				<p>
				<i className="fas fa-phone"></i>
					+52 (419) 131 73 74
				</p>
				</div>
			</div>
				<div className="contact-form">
				<h2>Envia tu mensaje</h2>
				<form action="https://formspree.io/f/myzebygb" method="POST">
					<input type="text" name="name" placeholder="nombre" required />
					<input type="email" name="email" placeholder="Correo electronico" required />
					<textarea name="message" placeholder="mensaje" required></textarea>
					<button type="submit"> Enviar Mensaje</button>
				</form>
			</div>
			</div>
		</div>
	)
}

export default ContactForm
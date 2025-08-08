import React from 'react'
import "./Footer.css"

const Footer = () => {

	const currentYear = new Date().getFullYear();
	return (
		<footer className="footer">
			<hr />
			<div className="social-icons">
				<a href="https://www.facebook.com/leo.antunez.446505/" target="blank" rel="noe  none nnke">
					<i className="fab fa-facebook-f"></i>
				</a>
				<a
					href="https://wa.me/4191317374"
					target="_blank"
					rel="noopener noreferrer"
					>
					<i className="fab fa-whatsapp"></i>
					</a>

				<a href="https://www.linkedin.com/in/leobardo-antunez-cayetano-3746631aa/" target="blank" rel="noe  none nnke">
					<i className="fab fa-linkedin-in"></i>

				</a>
			</div>
			<p>Copyright {currentYear} Leobardo Todos lo derechos reservados</p>
		</footer>
	)
}

export default Footer
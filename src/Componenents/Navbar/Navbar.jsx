import logo1 from "../../assets/logo1.png"
import "./Navbar.css"
import { useEffect, useState } from "react"


const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const [showNavbar, setShowNavbar] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	

	const handleScoll = (e, sectionId) => {
		e.preventDefault();
		const section = document.getElementById(sectionId)
		if (section) {
			section.scrollIntoView({ behavior: "smooth", block: "start" })
		}
		setMenuOpen(false)
	}

	// 👇 Detecta scroll hacia abajo o arriba
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > lastScrollY) {
				// scrolling hacia abajo
				setShowNavbar(false)
			} else {
				// scrolling hacia arriba
				setShowNavbar(true)
			}
			setLastScrollY(window.scrollY)
		}

		window.addEventListener("scroll", handleScroll)

		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [lastScrollY])

	return (
		<nav className={showNavbar ? "navbar show" : "navbar hide"}>
			<img src={logo1} alt="logo" className="logo" />
			<ul className={menuOpen ? "active" : ""}>
				<li><a href="#" onClick={(e) => handleScoll(e, "hero")}>Inicio</a></li>
				<li><a href="about" onClick={(e) => handleScoll(e, "about")}>Sobre mí</a></li>
				<li><a href="skills" onClick={(e) => handleScoll(e, "skills")}>Habilidades</a></li>
				<li><a href="portafolio" onClick={(e) => handleScoll(e, "portafolio")}>Portafolio</a></li>
				<li><a href="contact" onClick={(e) => handleScoll(e, "contact")}>Contacto</a></li>
				<i className="fa-solid fa-xmark" onClick={() => setMenuOpen(false)}></i>
			</ul>
			<i className="fa-solid fa-bars" onClick={() => setMenuOpen(true)}></i>
		</nav>
	);
}

export default Navbar;

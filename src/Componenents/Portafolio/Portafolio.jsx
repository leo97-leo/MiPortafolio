import "./Portafolio.css"
import fogon from "../../assets/capfogon.jpg"
import taconcito from "../../assets/captaconcito.jpg"
import mixe from "../../assets/appMixe.png"

const portafolioItems = [
	{
	id: 1,
	image: taconcito,
	title: "Taquería el Taconcito",
	description: "Menú digital con pedido por WhatsApp, desarrollado con React.js",
	demoLink: "https://www.taqueriataconcito.com.mx/"
},
{
	id: 2,
	image: fogon,
	title: "Tacos el Fogón",
	description: "Sitio web para taquería con menú digital, desarrollado con React.js",
	demoLink: "https://tacos-el-fogon-phi.vercel.app/"
},
{
	id: 3,
	image: mixe,
	title: "App lengua indígena Mixe",
	description: "Aplicación educativa desarrollada en React Native para promover el idioma Mixe"
}

	
]

	const Portafolio = () => {
	return (
		<div className="portafolio" id="portafolio">
			<h1>Portafolio</h1>
			<div className="portafolio-container">
				{portafolioItems.map((item) => (
					<div className="portafolio-card" key={item.id}>
						<img src={item.image} alt={item.title} className="portafolio-image"
						/>
						<div className="portafolio-content">
						<h3>{item.title}</h3>
						<p>{item.description}</p>
						<a href={item.demoLink} target="-blank" rel="noopener norerererrer"
						className="demon-button">
						Ver proyecto
						</a>
						</div>
					</div>
					))}
				</div>
			</div>
		
	)
}

export default Portafolio;
import { createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext();
/*  esta parte es para el modo oscuro*/
export const ThemeProvider = ({children}) => { /*ocupamos chlidren para enviar valres*/
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");/*creamos el constante para almacenar
	el tema store y una funcion para determinar su valor*/
	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";/*funcio si esta en modo claro cambia a oscuro
		si esta en modo oscuro cabia a clao*/
		setTheme(newTheme)
		localStorage.setItem("theme", newTheme)
	}

	useEffect(()=>{
		document.documentElement.classList.toggle("dark", theme === "dark")
	}, [theme])
	
	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}


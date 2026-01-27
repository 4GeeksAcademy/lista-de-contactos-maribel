
import { ContactList } from "../components/ContactsList.jsx";
import { Link } from "react-router-dom";

//Home, donde va la lista de contactos
export const ContactsPage = () => {	
	
	return (
		<div className="text-center mt-5">
			<h1>LISTA DE CONTACTOS</h1>

				<ContactList />
	
			<Link to={"/add"} className="btn btn-primary mb-4">Crear contacto</Link>
		
				
		</div>
	);
};  
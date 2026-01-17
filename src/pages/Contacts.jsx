
import { ContactList } from "../components/ContactsList.jsx";
import { Link } from "react-router-dom";


//Home, donde va la lista de contactos
export const ContactsPage = () => {	
	return (
		<div className="text-center mt-5">
	
			<Link to={"/add"}>Crear contacto</Link>
			<ContactList/>
				
		</div>
	);
}; 
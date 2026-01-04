import { useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { ContactCard } from "./ContacCard.jsx";
import { Link } from "react-router-dom";
import { Profile } from "../Profile.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [listContact, setListContact] = useState([
		
	  {name: "Maria",
	      phone: "5416146531",
	      email: "maria@hola.com",
	      address: "C/santo",
	      id: 0 },

		{name: "Robin",
	      phone: "5416146531",
	      email: "maria@hola.com",
	      address: "C/santo",
	      id: 1 },

		  {name: "Pedro",
	      phone: "5416146531",
	      email: "maria@hola.com",
	      address: "C/santo",
	      id: 2 }
	])

	return (
		<div className="text-center mt-5">
			<ContactCard />
			<Profile />

			<Link to={"/CreateContact"}>
				<button className="button primary">
					Crear Contacto
				</button>
			</Link>

			<ol>
				{
					listContact.map((e) => {
						return (
							<li key={e.id}>
								<Link to={`/profile/${e.id}`}>
								{e.id}
								</Link>
							</li>

						)

					})
				}
			</ol>


		</div>
	);
}; 
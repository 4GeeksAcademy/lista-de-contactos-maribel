import { useContext } from "react"
import { Link } from "react-router-dom"
import { StoreContext } from "../hooks/useGlobalReducer"


export const ContactCard = ({contact})=> {
    const { dispatch } = useContext(StoreContext)

    return (

        <div className="card p-3 mb-2">
			<h5>{contact.name}</h5>
			<p>{contact.email}</p>
			<p>{contact.phone}</p>

			<Link
				to={`/edit/${contact.id}`}
				className="btn btn-primary btn-sm me-2"
			>
				Edit
			</Link>

			<button
				className="btn btn-danger btn-sm"
				onClick={() => deleteContact(dispatch, contact.id)}
			>
				Delete
			</button>
		</div>
	)
}

export default ContactCard
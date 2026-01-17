import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { StoreContext } from "./hooks/useGlobalReducer"

export const Profile = () => {
    const {id} = useParams()

    const navigate = useNavigate()

    const {store, dispatch } = useContext(StoreContext)

    const [form, setForm] = useState ({
        name: " ",
        email: " ",
        phone: " ",
        address: " "
    })

    useEffect(() => { 
        if (id) { 
        const contact = store.contacts.find((e)=> e.id === parseInt(id))
        if (contact) setForm(contact)
        }
    }, [id, store.contacts])

    const handleChange = e =>
        setForm({...form, [e.target.name]: e.target.value})

    const  handleSubmit = e => { e.preventDefault()
        if(id) {
            updateContact (dispatch, id, form)
        } else {
            addContact(dispatch, form)
        }
        navigate("/")
    }
    return (

        <form onSubmit={handleSubmit}>
				<input className="form-control mb-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
				<input className="form-control mb-2" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
				<input className="form-control mb-2" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
				<input className="form-control mb-2" name="address" placeholder="Address" value={form.address} onChange={handleChange} />

				<button className="btn btn-primary">Save</button>
			</form>
    )
}

export default Profile
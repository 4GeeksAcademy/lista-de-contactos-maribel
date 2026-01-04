import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Profile = () => {
    const {id} = useParams()

    const [form, setForm] = useState ({
        name: " ",
        email: " ",
        phone: " ",
        address: " "
    })


    useEffect(() => { 
        if (id) { 
        const contact = form.find((e)=> e.id === parseInt(id))
        if (contact) setForm(contact)
        }
    }, [id, setForm])

    const handleChange = e =>
        setForm({...form, [e.target.name]: e.target.value})

    const  handleSubmit = e => { e.preventDefault()
        
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
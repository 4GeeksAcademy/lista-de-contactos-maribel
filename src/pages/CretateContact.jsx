//Página donde va el formulario crear contacto

  import { useContext, useEffect, useState } from "react"
  import { useNavigate, useParams } from "react-router-dom"
import { StoreContext } from "../hooks/useGlobalReducer"
import { addContact, loadContacts, updateContact } from "../store"
 


  
export const CreateContactPage = () => {
      const { dispatch } = useContext(StoreContext)


      const {id} = useParams()
  
      const navigate = useNavigate()
  
      const {store, actions } = useContext(StoreContext)
  
      const [form, setForm] = useState ({
          name: " ",
          email: " ",
          phone: " ",
          address: " "
      })

      useEffect(()=>{
        loadContacts(dispatch)
      }, [])
  
      // EDITAR CONTACTO
      useEffect(() => { 
          if (id) { 
            const contact = store.contacts.find((e)=> e.id === parseInt(id))
            if (contact) setForm(contact)
          }
      }, [id, store.contacts])
  
      const handleChange = e => {
          setForm({...form, [e.target.name]: e.target.value})
      }
  
      const  handleSubmit = e => { e.preventDefault()
          if (id) {
              updateContact(dispatch, id, form)
          } else {
              addContact(dispatch, form)
          }

          navigate("/")
        }
      

    return (
  <>
        <div className="text-center">
        <h1>Create Contacts</h1>
        </div>
        
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-8">
              
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input 
          type="text" 
          className="form-control" 
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          />
        </div>

        <div className="mb-3">
          <label for="address" className="form-label">Address</label>
          <input 
          type="text" 
          className="form-control" 
          name="address"
          value={form.address}
          onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input 
          type="email" 
          className="form-control" 
          name="email" 
          value={form.email}
          onChange={handleChange}
          required/>
        </div>
        <div className="mb-3">
          <label for="phone" className="form-label"> Phone </label>
          <input 
          type="tel" 
          name="phone" 
          className="form-control"  
          placeholder="+34 612 345 678" 
          pattern="(\+34)?[0-9]{9}"
          value={form.phone}
          onChange={handleChange}
          required/>
        </div>

        <button type="submit" 
        className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>

</>

    )
}
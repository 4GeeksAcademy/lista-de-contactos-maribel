//Página donde va el formulario crear contacto

export const CreateContactPage = () => {
    return (
        <>
        <div className="text-center">
        <h1>Create Contacts</h1>
        </div>
        
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-md-8">
      <form>
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name"/>
        </div>
        <div className="mb-3">
          <label for="address" className="form-label">Address</label>
          <input type="text" className="form-control" id="address"/>
        </div>
        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" required/>
        </div>
        <div className="mb-3">
          <label for="telefono" className="form-label"> Phone </label>
          <input type="tel" id="telefono" className="form-control"  placeholder="+34 612 345 678" pattern="(\+34)?[0-9]{9}"required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</div>

</>

    )
}
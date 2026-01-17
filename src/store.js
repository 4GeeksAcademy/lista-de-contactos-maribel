
const url = "https://playground.4geeks.com/contact"



export const initialStore=()=>{
  return{
    contacts: []
  }
}

export default function storeReducer(state, action = {}) {
  switch(action.type){
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.payload
      };
    default:
      return state
  }    
}

export const loadContacts = async (dispatch) => {
  const response = await fetch ()
  const data = await response.json()

  dispatch({
    tipe: "SET_CONTACT",
    payload: data.contacts || []
  })
}
export const addContact = async (dispatch, contact) => {
	await fetch(`${BASE_URL}/agendas/${AGENDA}/contacts`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(contact)
	});

	loadContacts(dispatch); // sincroniza el store
};

/*
  🔹 PUT
  Actualiza un contacto existente
*/
export const updateContact = async (dispatch, id, contact) => {
	await fetch(`${BASE_URL}/contacts/${id}`, {
		method: "PUT",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(contact)
	});

	loadContacts(dispatch);
};

/*
  🔹 DELETE
  Elimina un contacto
*/
export const deleteContact = async (dispatch, id) => {
	await fetch(`${BASE_URL}/contacts/${id}`, {
		method: "DELETE"
	});

	loadContacts(dispatch);
};
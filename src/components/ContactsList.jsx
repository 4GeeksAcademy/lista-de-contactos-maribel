import { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer"

export const ContactList = () => {
     const { store } = useGlobalReducer()
        useEffect(()=>{
            store.loadContacts
        }, [])
        const [list, setList] = useState()
    return (
        <p>Aqui va la tabla de contactos</p>
    )
}


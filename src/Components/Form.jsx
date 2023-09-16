import React from "react";
import { useState } from "react"

const Form = () => {
  const[nombre,setNombre]=useState("");
  const[email,setEmail]=useState("");
  const [message, setMessage] = useState("")


  const handleSubmit = (e)=>{
    e.preventDefault();
  

    if (nombre.length<=5) {
        setMessage("Por favor verifique su información nuevamente")
    } else{
        setNombre("");
        setEmail("");
        setMessage(`Gracias ${nombre}, te contactaremos cuando antes vía mail`)
    }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your full name" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
        <input type="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <button className="Submit" type= "submit"> Send </button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  )

};

export default Form;
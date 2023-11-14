import React, { useState } from "react";

function Register() {
  const[count, setcount] = useState(0);
  
  function getUserInformation() {
    setcount(count+1);
  }
    
  function decrement(){
    setcount(count-1);
  }
  return (
    <div>
      <h1>Numero de usuarios registrados: {count}</h1>
      <button onClick={getUserInformation}>Registrar</button>
      <button onClick={decrement}>Decrement</button>
    </div>

    /*<section id="contact_section" className="sections">
            <div className="col-md-6">
                    <p>Información de registro</p>
                    <label htmlFor="formGroupExampleInput" className="form-label" >Nombre(s):</label>
                    <input type="text" className="form-control" id="name" />
                    <label htmlFor="exampleFormControlInput1" className="form-label">Correo:</label>
                    <input type="email" className="form-control" id="email"/>
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Mensaje:</label>
                    <textarea className="form-control" id="message" cols="6"></textarea>
                    <button onClick={getUserInformation} className="btn btn-light">Submit</button>
            </div>
        </section>*/
  );
}

export default Register;

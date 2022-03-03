import { useState } from "react"


export default function Login() {
  const [txtCorreo, setTxtCorreo] = useState("")
  const [txtContraseña, setTxtContraseña] = useState("")

  const txtCorreoOnChange = (event) => {
    const txtCorreoIngresado = event.target.value
    setTxtCorreo(txtCorreoIngresado)
    //setTxtUsername("")
  }

  const txtContraseñaOnChange = (event) => {
    setTxtContraseña(event.target.value)//lo mismo de arriba
  }
  return <aside className="col-md-3 mt-4">
    <div className="card">
      <div className="card-body">
        <form>
          <div>
            <label htmlFor="txt_username" className="form-label">Correo electrónico</label>
            <input id="txt_username" type="text" className="form-control"
              defaultValue={txtCorreo} onChange={txtCorreoOnChange} />
          </div>
          <div className="mb-2">
            <label htmlFor="txt_password" className="form-label">Contraseña</label>
            <input id="txt_password" type="password" className="form-control"
              defaultValue={txtContraseña} onChange={txtContraseñaOnChange} />
          </div>
          <button id="butLogin" className="btn btn-primary" type="button">Iniciar sesión</button>
        </form>
      </div>
    </div>
  </aside>
}

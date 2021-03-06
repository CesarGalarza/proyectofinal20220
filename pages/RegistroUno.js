import C_RegistroUno from "../component/RegistroUno"

function Registro_Uno() {

  const obtenerUsuariosHTTP = async () => {

    let response = await fetch("api/usuario")
    const data = await response.json()
    return data
  }

  const registrarUsuarioHandler = async (nombre, apellido, dni) => {

    // Haremos una petición al Backend de tipo POST

    const User = {
      nombre: nombre,
      apellido: apellido,
      dni: dni
    }
    // Petición a backend

    const resp = await fetch("/api/usuario", {
      method: "POST",
      body: JSON.stringify(User)
    })
  }

  return <div>

    <div>
      <C_RegistroUno onRegistrarUsuario={registrarUsuarioHandler} />
    </div>

  </div>
}

export default Registro_Uno
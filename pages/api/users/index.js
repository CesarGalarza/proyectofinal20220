//ENDPOINTS
import { guardarUsuario } from "../../../dao/usuario"

// path : /api/usuario
const UsuariosHandler = async (req, res) => {

    if ( req.method == "GET" ) {

        // Consultar en la base de datos
        console.log("Es una resp GET")

    } else if ( req.method == "POST" ){

        const data = JSON.parse(req.body)
        await guardarUsuario(data.nombre, data.apellido, data.dni)
        
        res.json({
            msg : ""
        })    
    } else {
        res.status(400).json({
            msg : "Error, metodo no disponible"
        })
    }
}
export default UsuariosHandler
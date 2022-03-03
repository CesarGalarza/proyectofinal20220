import C_titulo_inicio from "../component/Titulo_Inicio"
import C_Login_Inicio from "../component/Login_Inicio"
import C_Footer from "../component/Footer"

function Inicio() {

    return <div>
        <div>
            <C_titulo_inicio />
        </div>
        <div>
            <C_Login_Inicio />
        </div>
        <hr></hr>
        <div>
            <C_Footer />
        </div>
    </div>
}
export default Inicio
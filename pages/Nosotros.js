import C_titulo_Nosotros from "../component/Nosotros_Titulo"
import C_BodyNosotros from "../component/Nosotros_BodyDos"
import C_BodyNosotrosDos from "../component/Nosotros_BodyUno"

function TNosotros() {
    return <div>
    <div>
    <C_titulo_Nosotros /> 
    </div>
    <div>
    <C_BodyNosotrosDos />
    </div>
    <div>
    <C_BodyNosotros />
    </div>
    
    </div>
  }
  
export default TNosotros
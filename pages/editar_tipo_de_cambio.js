import { useState } from "react"
import Comprar_Vender from "./comprar_vender"

export default function editar_tipo_de_cambio(props) {
    const [txtPEN, setTxtPEN] = useState("")
    const [txtBTC, setTxtBTC] = useState("")

    const txtPENOnChange = (event) => {
        const txtPENIngresado = event.target.value
        setTxtCorreo(txtPENIngresado)
        //setTxtUsername("")
    }

    const txtBTCOnChange = (event) => {
        setTxtBTC(event.target.value)//lo mismo de arriba
    }

    const butCambiarOnClick = () => {
        Comprar_Vender.MostrarTipoDeCambio(txtBTC)
    }
    return <div className="card col-lg-5 col-md-6 col-sm-8 col-9">
        <div className="card-body">
            <div>
                <div className="card mt-2" style={{ width: 18 + 'rem' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <input type="text" defaultValue={txtPEN}
                                onChange={txtPENOnChange} />
                            &nbsp;
                            &nbsp;
                            <span>PEN</span>
                        </li>
                        <li className="list-group-item">
                            <input type="text" defaultValue={txtBTC}
                                onChange={txtBTCOnChange} />
                            &nbsp;
                            &nbsp;
                            <span>BTC</span>
                        </li>
                    </ul>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" className="mt-2" onClick={butCambiarOnClick}>Cambiar</button>
            </div>
        </div>
    </div>



}
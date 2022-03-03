import { useEffect, useState } from "react"
import { guardarTC, obtenerTC } from "../dao/proyectos_local"
import SolicitudCompra from "../pages/Vender/Solicitud"
const Tipo_Cambio = (props) => {
    const [txtVenta, setTxtVenta] = useState("")
    const [txtCompra, setTxtCompra] = useState("")
    const [txtPEN, setTxtPEN] = useState("")
    const [txtBTC, setTxtBTC] = useState("")
    const [mostrarCambiar, setMostrarCambiar] = useState(props.mostrar)
    const [listaTipo, setListaTipo] = useState([])
    const [mostrarComprar, setMostrarComprar] = useState(true)

    {
        useEffect(() => {
            setListaTipo(obtenerTC())
        }, [])
    }

    if (mostrarCambiar) {
        const butCambiarOnClick = () => {
            guardarTC(txtVenta, txtCompra)
            setListaTipo(obtenerTC)
        }
        const txtVentaOnChange = (event) => {
            const txtVentaIngresado = event.target.value
            setTxtVenta(txtVentaIngresado)
            //setTxtUsername("")
        }
        const txtCompraOnChange = (event) => {
            setTxtCompra(event.target.value)//lo mismo de arriba
        }
        return <div >
            <div >Tipo de cambio (PEN/BTC)</div>
            <div className="card mt-2" style={{ width: 19 + 'rem' }} >
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item" >
                        <input type="text" defaultValue={txtVenta}
                            onChange={txtVentaOnChange} />
                        &nbsp;
                        &nbsp;
                        <span>Venta</span>
                    </li>
                    <li className="list-group-item">
                        <input type="text" defaultValue={txtCompra}
                            onChange={txtCompraOnChange} />
                        &nbsp;
                        &nbsp;
                        <span>Compra</span>
                    </li>
                </ul>
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button type="button" className="mt-2" onClick={butCambiarOnClick}>Cambiar</button>
        </div>
    } else {
        const butSolicitarCompraOnClick= () => {
           location.href="../pages/Comprar/Solicitud"
        }
        const butSolicitarVentaOnClick = () => {
            location.href="../pages/Vender/Solicitud"
        }
        const butComprarOnClick = () => {
            setMostrarComprar(true)
        }
        const butVenderOnClick = () => {
            setMostrarComprar(false)
        }
        if (mostrarComprar) {
            const txtBTCOnChange = (event) => {
                setTxtBTC(event.target.value)//lo mismo de arriba
                if (event.target.value != 0) {
                    setTxtPEN(event.target.value * listaTipo.tc_comp)
                } else {
                    setTxtPEN("")
                }
            }
            return <div>
                <div className="mb-3">
                    <button type="button" onClick={butComprarOnClick} >Comprar</button>
                    &nbsp;
                    &nbsp;
                    <button type="button" onClick={butVenderOnClick}>Vender</button>
                </div>
                <div >
                    {`1 BTC = ${listaTipo.tc_comp} PEN`}
                </div>
                <div className="col-md-3">
                    <div className="card mt-3 mb-2" style={{ width: 18 + 'rem' }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                &nbsp;
                                <span defaultValue={txtPEN}>{txtPEN}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" onClick={butSolicitarCompraOnClick}>Solicitar</button>
            </div>
        } else {
            const txtBTCOnChange = (event) => {
                setTxtBTC(event.target.value)//lo mismo de arriba
                if (event.target.value != 0) {
                    setTxtPEN(event.target.value * listaTipo.tc_vt)
                } else {
                    setTxtPEN("")
                }
            }
            return <div>
                <div className="mb-3">
                    <button type="button" onClick={butComprarOnClick} >Comprar</button>
                    &nbsp;
                    &nbsp;
                    <button type="button" onClick={butVenderOnClick}>Vender</button>
                </div>
                <div >
                    {`1 BTC = ${listaTipo.tc_vt} PEN`}
                </div>
                <div className="col-md-3">
                    <div className="card mt-3 mb-2" style={{ width: 18 + 'rem' }}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                &nbsp;
                                <span defaultValue={txtPEN}>{txtPEN}</span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button type="button" onClick={butSolicitarVentaOnClick}>Solicitar</button>
            </div>
        }
    }

}

export default Tipo_Cambio
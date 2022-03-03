import { useEffect, useState } from "react"
import { guardarTC, obtenerTC } from "../dao/proyectos_local"
import Tipo_Cambio from "../components/Tipo_Cambio.component"

export default function editar_tipo_de_cambio(props) {

    return <div>
        <div className="card col-md-3 mt-4">
            <div className="card-body">
                <div>
                    <Tipo_Cambio  mostrar={true}/>
                </div>
            </div>
        </div>
    </div>



}
import { Button, ListGroup } from "react-bootstrap";
import editar_tipo_de_cambio from "./editar_tipo_de_cambio";
import { useState } from "react";
import Tipo_Cambio from "../component/Tipo_Cambio.component";
import { guardarTC,obtenerTC} from "../dao/proyectos_local";


export default function Comprar_Vender() {

  const [listaTipo, setListaTipo] = [[], () => { }]

  const listaTC = (TCs) => {
     setListaTipo(TCs)
  }

  return <span className="card mt-4 col-md-3">
    <span className="card-body">
      <div className="mt-2">
        <Tipo_Cambio onListaTC={listaTC} mostrar={false}/>
      </div>
    </span>
  </span>
}
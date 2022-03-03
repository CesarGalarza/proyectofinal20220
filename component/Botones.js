import { useState } from "react";

const Botones_todos = () => {
    const [seDebeMostrar, setSeDebeMostrar] = useState(true) 

    const butboton = () => {
        setSeDebeMostrar(true) 
    }

    return <div className="mt-4">
            <a href= "Listadeclientes"><center><button className="btn btn-primary" 
                onClick={butboton }>
                Clientes
            </button></center></a>
            <p><center><button className="btn btn-primary" 
                onClick={butboton }>
                Tipo de cambio
            </button></center></p>
            
            <p><center><button className="btn btn-primary" 
                onClick={butboton }>
                Operaciones
            </button></center></p>

            <p><center><button className="btn btn-primary" 
                onClick={butboton }>
                Cerrar Sesión
            </button></center></p>
        </div>
 }
 
 export default Botones_todos
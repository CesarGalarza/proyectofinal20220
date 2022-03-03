import React, { useState, Fragment} from "react";
import data from "../pages/dataclient.json";
import Readrow from "./Readrow";
import Editrow from "./Editrow";
const App = () => {
   const [clientes, setClientes] = useState(data);

   const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    lastname: "",
    dni: "",
    email: "",
    cellnumber: "",
  });


  const [editClientetId, setEditClienteId] = useState(null);



  const editform = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const editformguardar = (event) => {
    event.preventDefault();

    const editadoCliente = {
      id: editClientetId,
      id: editFormData.id,
      name: editFormData.name,
      lastname: editFormData.lastname,
      dni: editFormData.dni,
      email: editFormData.email,
      cellnumber: editFormData.cellnumber,
    };

    const nuevosClientes = [...clientes];

    const index = clientes.findIndex((cliente) => cliente.id === editClientetId);

    nuevosClientes[index] = editadoCliente;

    setClientes(nuevosClientes);
    setEditClienteId(null);
  };

  const editclick = (event, cliente) => {
    event.preventDefault();
    setEditClienteId(cliente.id);

    const formValues = {
      id: cliente.id,
      name: cliente.name,
      lastname: cliente.lastname,
      dni: cliente.dni,
      email: cliente.email,
      cellnumber: cliente.cellnumber,
    };

    setEditFormData(formValues);
  };
   return (
     <div className="app-container">
         <form onSubmit={editformguardar}>
           <table> 
           <thead>
             <tr>
               <th>ID</th>
               <th>Nombres</th>
               <th>Apellidos</th>
               <th>DNI</th>
               <th>email</th>
               <th>Número</th>
               <th>Acciones</th>
             </tr>
           </thead>
           <tbody>
             {clientes.map((cliente) => (
               <Fragment>  
                 {editClientetId === cliente.id ? (
                   <Editrow 
                   editFormData={editFormData}
                   editform={editform}
                   />
                 ) : (
                       <Readrow cliente={cliente}
                       editclick={editclick}

                       />
                 )}
              </Fragment>
             ))}
            </tbody>
         </table>
         </form>
     </div>
   );
 };
 
 export default App;
import React from "react";

const Readrow = ({cliente, editclick}) => {
    return (
        <tr>
        <td>{cliente.id}</td>
        <td>{cliente.name}</td>
        <td>{cliente.lastname}</td>
        <td>{cliente.dni}</td>
        <td>{cliente.email}</td>
        <td>{cliente.cellnumber}</td>
        <td> <button
          type="button"
          onClick={(event) => editclick(event, cliente)}
        >
          Editar
        </button>
      </td>
        </tr>
    );

 };
 
 export default Readrow;
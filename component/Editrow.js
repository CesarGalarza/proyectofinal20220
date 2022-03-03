import React from "react";

const Editrow = ({editFormData, editform}) => {
    return (
        <tr>
        <td><input
          type="text"
          required="required"
          placeholder="Ingrese el ID..."
          name="id"
          value={editFormData.id}
          onChange={editform}
        ></input></td>

        <td><input
          type="text"
          required="required"
          placeholder="Ingrese un Nombre..."
          name="name"
          value={editFormData.name}
          onChange={editform}
        ></input></td>

        <td><input
          type="text"
          required="required"
          placeholder="Ingrese el Apellido..."
          name="lastname"
          value={editFormData.lastname}
          onChange={editform}
        ></input></td>

        <td><input
          type="text"
          required="required"
          placeholder="Ingrese el DNI..."
          name="dni"
          value={editFormData.dni}
          onChange={editform}
        ></input></td>

        <td><input
          type="text"
          required="required"
          placeholder="Ingrese el email..."
          name="email"
          value={editFormData.email}
          onChange={editform}
        ></input></td>

        <td><input
          type="text"
          required="required"
          placeholder="Ingrese un número..."
          name="cellnumber"
          value={editFormData.cellnumber}
          onChange={editform}
        ></input>
        </td>
        <td>
            <button type="submit">Guardar</button>
        </td>

        </tr>
    );

 };
 
 export default Editrow;
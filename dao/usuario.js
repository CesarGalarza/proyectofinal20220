import db from "../sequelize/models"

// Aqui colocamos los métodos DAO que se van a comunicar con la DB

const guardarUsuario = async (nombre, apellido, dni) => {
    
    //Insersion
    const UserGuardado = await db.Usuario.create({
        nombre: nombre,
        apellido: apellido,
        dni : dni,
    })
    return UserGuardado
}
export { guardarUsuario }
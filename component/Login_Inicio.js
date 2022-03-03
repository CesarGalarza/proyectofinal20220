const C_Login_Inicio = () => {

    return <div>
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
        <div className="container mt-4">

            <div className="text-center mb-4">
                <h4>INGRESA TU CUENTA</h4>
            </div>
            <div className="text-center">
                <p class="paragraph-name-text">
                    Por favor coloque sus credenciales para ingresar al sistema, <br></br>si aún no se ha registrado,
                    <a href="/RegistroUno">&nbsp;<i>podrá hacerlo aquí.</i></a></p>
            </div>

            

            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <form>
                        
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Correo electrónico</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>

                        <button type="submit" className="btn btn-primary form-control">Ingresar</button>

                    </form>
                </div>
                <div className="col-3"></div>
            </div>
        </div>

        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
        
    </div>

}

export default C_Login_Inicio
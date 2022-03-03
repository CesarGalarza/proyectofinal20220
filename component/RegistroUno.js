const C_RegistroUno = () => {

    return <div>

        <div className="container mt-4 mb-4 text-center">
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>

        <div className="container mt-4 mb-4 text-center">
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
            </div>
        </div>
        <div className="container mt-4 mb-4">
            <div className="row">
                <div className="col">
                </div>
                <div className="col text-center">
                    <img src="https://www.decision-capital.com/fx/images/key_icon2.png" class="img-fluid w-25" alt="..."></img>
                </div>
                <div className="col">
                </div>
            </div>
        </div>
        <div className="container mt-4 mb-4 text-center">
            <h3>Crear usuario</h3>
        </div>
        <div className="container mt-4 mb-4 text-center">
            <p>Por favor coloque sus datos para crear su cuenta</p>
        </div>

        <div className="row mb-4">
            <div className="col-4"></div>
            <div className="col-4">
                <form>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Apellido</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">DNI</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" />
                    </div>

                    <div className="container row mt-4">

                        <div className="col">
                            <a href="/#" type="submit" className="btn btn-secondary form-control">Regresar</a>
                        </div>
                        <div className="col">
                            <a href="/RegistroDos" type="submit" className="btn btn-secondary form-control">Siguiente</a>
                        </div>

                    </div>

                </form>
            </div>
            <div className="col-4"></div>
        </div>


    </div>


}

export default C_RegistroUno
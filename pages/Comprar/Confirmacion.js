function MostrarNumeroOperacion(n) {

    return <div>
        <label htmlFor="operacion">El número identificador de la presente operación es: </label>
        <p className="mt-2 mb-4" id="operacion">{n}</p>
    </div>
}

const Operacion = 123456789;

function ConfirmacionComprar() {
  
    return <div>
      
        <body className="mt-4 container">
            <div>
                <h1>Comprar</h1>
                <h3 className="mt-4 mb-4">Paso 2 de 3 - Confirmación</h3>
            </div>

            <div>
                <label htmlFor="cuentabancariaempresa">La cuenta bancaria a donde deberá depositar soles es: </label>
                <h5 className="mt-2 mb-4" id="cuentabancariaempresa">312480713217491310</h5>
            </div>

            <div>
                <label htmlFor="transaccion">Realize el depósito de soles e ingrese el número de la transacción: </label>
                <input className="form-control mt-2 mb-4" type="text" id="transaccion"></input>
            </div>

            <div>
                {MostrarNumeroOperacion(Operacion)}
            </div>

            <div>
                <a className="mt-4 mb-4 btn btn-primary" type="button" href="./Espera">Enviar Confirmación</a>
            </div>
                
        </body>

    </div>
  }
  
  export default ConfirmacionComprar

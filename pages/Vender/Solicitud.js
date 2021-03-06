function TiempoActual() {

    var today = new Date();

    var ano = today.getFullYear();
    var mes = today.getMonth() + 1;
    var dia = today.getDate();
    var hora = today.getHours();
    var minuto = today.getMinutes();
    var segundo = today.getSeconds();
    var milisegundos = today.getMilliseconds();

    var timeActual = milisegundos + segundo*1000 + minuto*100000 + hora*10000000 + dia*1000000000 + mes*100000000000 + ano*10000000000000;

    return timeActual;

}

function MostrarNumeroOperacion(n) {

    return <div>
        <label htmlFor="operacion">El número identificador de la presente operación es: </label>
        <p className="mt-2 mb-4" id="operacion">{n}</p>
    </div>

}

const nOperacion = TiempoActual()



const Operacion = nOperacion.toString()

const CuentaBancaria = ""

function SolicitudVender() {

    const leerValor = (event) => {

        const valor = event.target.value;
        CuentaBancaria = valor;

        console.log(nOperacion);
        console.log(CuentaBancaria);

    }
  
    return <div>
      
        <body className="mt-4 container">

            <div>
                <h1>Vender</h1>
                <h3 className="mt-4 mb-4">Paso 1 de 3 - Solicitud</h3>
            </div>

            <div>
                <label htmlFor="cuentabancaria">Ingrese número de cuenta bancaria que recibirá soles: </label>
                <input className="form-control mt-2 mb-4" type="text" id="cuentabancaria" onChange={leerValor}></input>
            </div>

            <div>
                <label htmlFor="banco">Ingrese banco administrador de la cuenta: </label>
                <select className="form-select mt-2 mb-4" id="banco">
                    <option selected value="BCP">BCP</option>
                </select>
            </div>

            <div>
                {MostrarNumeroOperacion(Operacion)}
            </div>

            <div>
                <a className="mt-4 mb-4 btn btn-primary" type="button" href="./Confirmacion">Solicitar Venta</a>
            </div>
            
       </body>

    </div>
  }
  
  export default SolicitudVender

  export { Operacion }
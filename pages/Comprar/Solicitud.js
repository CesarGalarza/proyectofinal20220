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
        <label for="operacion">El número identificador de la presente operación es: </label>
        <p class="mt-2 mb-4" id="operacion">{n}</p>
    </div>

}

const nOperacion = TiempoActual()

const Operacion = nOperacion.toString()

const Wallet = ""

function SolicitudCompra() {

    const leerValor = (event) => {

        const valor = event.target.value;
        Wallet = valor;

        console.log(nOperacion);
        console.log(Wallet);

    }

    return <div>

        <body class="mt-4 container">
            <div>
                <h1>Comprar</h1>
                <h3 class="mt-4 mb-4">Paso 1 de 3 - Solicitud</h3>
            </div>

            <div>
                <label for="direccionwallet">Ingrese dirección wallet que recibirá bitcoins: </label>
                <input class="form-control mt-2 mb-4" type="text" id="direccionwallet" onChange={leerValor}></input>
            </div>

            <div>
                {MostrarNumeroOperacion(nOperacion)}
            </div>

            <div>
                <a class="mt-4 mb-4 btn btn-primary" type="button" href="./Confirmacion">Solicitar Compra</a>
            </div>
                
        </body>

    </div>

}

export default SolicitudCompra
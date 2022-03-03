import { Operacion } from "./Solicitud"
import Head from 'next/head'

function MostrarNumeroOperacion(n) {

    return <div>
        <label htmlFor="operacion">El número identificador de la presente operación es: </label>
        <p className="mt-2 mb-4" id="operacion">{n}</p>
    </div>

}

function EsperaComprar() {
  
    return <div>

        <Head>
            <meta httpEquiv="refresh" content="3;../OperacionCompletada" />
        </Head>
      
        <body className="mt-4 container">
            <div>
                <h1>Comprar</h1>
                <h3 className="mt-4 mb-4">Paso 3 de 3 - Espera</h3>
            </div>

            <div>
                <label className="mt-2 mb-4">Espera mientras se verifica la transacción... </label>
            </div>

            <div>
                {MostrarNumeroOperacion(Operacion)}
            </div>
                
        </body>

    </div>
}

export default EsperaComprar
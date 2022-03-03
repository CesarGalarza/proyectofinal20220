import Head from 'next/head'

function EsperaVender() {
  
    return <div>

        <Head>
            <meta httpEquiv="refresh" content="3;../OperacionCompletada" />
        </Head>
      
        <body className="mt-4 container">
            <div>
                <h1>Vender</h1>
                <h3 className="mt-4 mb-4">Paso 3 de 3 - Espera</h3>
            </div>

            <div>
                <label className="mt-2 mb-4">Espera mientras se verifica la transacción... </label>
            </div>

            <div>
                <label htmlFor="operacion">El número identificador de la presente operación es: </label>
                <p className="mt-2 mb-4" id="operacion">138323492137401</p>
            </div>
            
        </body>

    </div>
  }
  
  export default EsperaVender
function OperacionCompletada() {
  
    return <div>
      
        <body className="mt-4 container">
            <div>
                <h2 className="mt-4 mb-4">Operación Completada</h2>
            </div>

            <div>
                <label htmlFor="operacion">El número identificador de la operación realizada es: </label>
                <p className="mt-2 mb-4" id="operacion">138323492137401</p>
            </div>

            <div>
                <a className="mt-4 btn btn-primary" type="button" href="./Menu_Cliente">Volver al Menú</a>
            </div>
                
        </body>

    </div>
  }
  
  export default OperacionCompletada
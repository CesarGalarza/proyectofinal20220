export default function Comprar_Vender() {

  return <span className="card mt-4 col-lg-5 col-md-6 col-sm-8 col-9">
    <span className="card-body">
      <div className="mt-2">
        <div className="mb-3">
          <button type="button">Comprar</button>
          &nbsp;
          &nbsp;
          <button type="button">Vender</button>
        </div>
        <div>
          1 BTC = 170.406 PEN
        </div>
        <div className="card mt-3 mb-2" style={{ width: 18 + 'rem' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              &nbsp;
              <span>...</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>PEN</span>
            </li>
            <li className="list-group-item">
              <input type="text" />
              &nbsp;
              &nbsp;
              <span>BTC</span>
            </li>
          </ul>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button">Solicitar</button>
      </div>
    </span>
  </span>






}
import { CardElement } from "@stripe/react-stripe-js"

const CardSecion = (props) => {
  const { submitOrder, errorMsg, successMsg } = props
  return (
    <div>
      <div>
        <label htmlFor="card-element">クレジット/デビットカード</label>

        <div>
          <fieldset>
            <div className="form-row">
              <div id="card-element" style={{ width: "100%" }}>
                <CardElement />
              </div>
              <br />
              <div className="order-button-wrapper">
                <button onClick={submitOrder}>注文を確認</button>
              </div>
              {errorMsg ? <div>{errorMsg}</div> : null}
              {successMsg ? <div>{successMsg}</div> : null}
            </div>
          </fieldset>
        </div>
      </div>
      <style jsx>
        {`
          .order-button-wrapper {
            display: flex;
            width: 100%;
            align-items: flex-end;
            justify-content: flex-end;
          }
        `}
      </style>
    </div>
  );
}

export default CardSecion;

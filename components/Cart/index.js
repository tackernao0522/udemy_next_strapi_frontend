import { Card, CardBody, CardTitle } from "reactstrap";

const Cart = () => {
  return (
    <div>
      <Card>
        <CardTitle>
          注文一覧
        </CardTitle>
        <hr />
        <CardBody>
          <div>
            <small>料理：</small>
          </div>
          <div>
            <div className="items-one">
              <span id="item-price">&nbsp; 200円</span>
              <span id="item-name">&nbsp; サラダ</span>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default Cart;

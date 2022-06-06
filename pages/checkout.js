import { Col, Row } from "reactstrap";
import Cart from "../components/Cart/index"
import CheckoutForm from "../components/Checkout/CheckoutForm";

const checkout = () => {
  return (
    <Row>
      <Col>
        <h1>チェックアウト</h1>
        <Cart />
      </Col>
      <Col>
        <CheckoutForm />
      </Col>
    </Row>
  );
}

export default checkout;

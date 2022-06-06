import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js"
import { Col, Row } from "reactstrap";
import Cart from "../components/Cart/index"
import CheckoutForm from "../components/Checkout/CheckoutForm";

const checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51L7W89JIrxSQKjakE1p3wWfbeAZGsMVSCoaeFGs5GXzvzCooY8Q11VFKeUhIFncBkgF6esJgvwNvY8jgop29Puy800gEkdfyQ2"
  )
  return (
    <Row>
      <Col style={{ paddingRight: 0 }} sm={{ size: 3, order: 1, offset: 2 }}>
        <h1 style={{ margin: 20, fontSize: 20, textAlign: "center" }}>
          チェックアウト
        </h1>
        <Cart />
      </Col>
      <Col style={{ paddingLeft: 5 }} sm={{ size: 6, order: 2 }}>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </Col>
    </Row>
  );
}

export default checkout;

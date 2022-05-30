import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";

const RestaurantList = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardImg src="" />
          <CardBody>
            <CardTitle>Italian Restaurant</CardTitle>
            <CardTitle>イタリアンのレストランです。</CardTitle>
          </CardBody>
          <div className="card-footer">
            <Link
              href="/restaurants?id=1"
              as="/restaurants/1"
            >
              <a className="btn btn-primary">もっと見る</a>
            </Link>
          </div>
        </Card>
      </Col>
    </Row>
  );
}

export default RestaurantList;

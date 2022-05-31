import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"

const query = gql`
{
  restaurants {
    id
    name
    description
    image {
      url
    }
  }
}
`

const RestaurantList = () => {
  const { loading, error, data } = useQuery(query)
  console.log(data)
  return (
    <Row>
      <Col xs="6" sm="4">
        <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
          <CardImg src="http://localhost:1337/uploads/large_restaurant1_a38901cd49.jpg" top={true} style={{ height: 250 }} />
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

      <style jsx>
        {`
          a {
            color: white;
          }
          a;link {
            text-decoration: none;
            color: white;
          }
          a:hover {
            color: white;
          }
          .card-columns {
            column-count: 3;
          }
        `}
      </style>
    </Row>
  );
}

export default RestaurantList;

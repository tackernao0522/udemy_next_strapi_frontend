import Link from "next/link";
import { Card, CardBody, CardImg, CardTitle, Col, Row } from "reactstrap";
import { gql } from "apollo-boost"
import { useQuery } from "@apollo/react-hooks"
import { useRouter } from "next/router"

const GET_RESTAURANT_DISHES = gql`
    {
      query ($id: ID!) {
        restaurant(id: $id) {
          id
          name
          dishes {
            id
            description
            price
            image {
              url
            }
          }
        }
      }
    }
`;

const Restaurants = (props) => {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: router.query.id },
  })

  const { search } = props

  if (error) return "レストランの読み込みに失敗しました。"

  if (loading) return <h1>読み込み中・・・</h1>

  if (data) {
    const searchQuery = data.restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(search)
    )
    return (
      <Row>
        {searchQuery.map((res) => (
          <Col xs="6" sm="4" key={res.id}>
            <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
              <CardImg
                src={`${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`}
                top={true}
                style={{ height: 250 }}
              />
              <CardBody>
                <CardTitle>{res.name}</CardTitle>
                <CardTitle>{res.description}</CardTitle>
              </CardBody>
              <div className="card-footer">
                <Link
                  as={`/restaurants/${res.id}`}
                  href={`/restaurants?id=${res.id}`}
                >
                  <a className="btn btn-primary">もっと見る</a>
                </Link>
              </div>
            </Card>
          </Col>
        ))}

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
  } else {
    return <h1>レストランが見つかりませんでした。</h1>
  }
}

export default Restaurants;
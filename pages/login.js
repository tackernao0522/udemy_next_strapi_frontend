import { useContext, useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import AppContext from "../context/AppContext";
import { login } from "../lib/auth";

const Login = () => {
  const appContext = useContext(AppContext)
  const [data, setData] = useState({ identifier: "", password: "" })
  // console.log(data)

  const handleLogin = () => {
    login(data.identifier, data.password)
      .then((res) => {
        appContext.setUser(res.data.user)
        // console.log(res.data.user)
      })
      .catch((err) => console.log(err))
  }

  const handleChangee = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  // console.log(data)

  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <div className="header">
              <h2>ログイン</h2>
            </div>
          </div>
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>メールアドレス：</Label>
                  <Input
                    type="email"
                    name="identifier"
                    style={{ height: 50, fontsize: "1.2 rem" }}
                    onChange={(e) => handleChangee(e)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード：</Label>
                  <Input
                    type="password"
                    name="password"
                    style={{ height: 50, fontsize: "1.2 rem" }}
                    onChange={(e) => handleChangee(e)}
                  />
                </FormGroup>
                <span>
                  <a href="">
                    <small>パスワードをお忘れですか？</small>
                  </a>
                </span>
                <Button
                  style={{ float: "right", width: 120 }}
                  color="primary"
                  onClick={() => { handleLogin() }}
                >
                  ログイン
                </Button>
              </fieldset>
            </Form>
          </section>
        </Col>
      </Row>
      <style jsx>
        {`
          .paper {
            text-align: center;
            margin-top: 50px;
          }
          .header {
            width: 100%;
            margin-bottom: 30px;
          }
          .wrapper {
            padding: 10px 30px 20px 30px;
          }
        `}
      </style>
    </Container>
  );
}

export default Login;

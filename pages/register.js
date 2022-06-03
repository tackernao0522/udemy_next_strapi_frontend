import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const register = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="paper">
            <div className="header">
              <h2>ユーザー登録</h2>
            </div>
          </div>
          <section className="wrapper">
            <Form>
              <fieldset>
                <FormGroup>
                  <Label>ユーザー名：</Label>
                  <Input
                    type="text"
                    name="username"
                    style={{ height: 50, fontsize: "1.2 rem" }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>メールアドレス：</Label>
                  <Input
                    type="email"
                    name="email"
                    style={{ height: 50, fontsize: "1.2 rem" }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label>パスワード：</Label>
                  <Input
                    type="password"
                    name="password"
                    style={{ height: 50, fontsize: "1.2 rem" }}
                  />
                </FormGroup>
                <span>
                  <a href="">
                    <samall>パスワードをお忘れですか？</samall>
                  </a>
                </span>
                <Button style={{ float: "right", width: 120 }} color="primary">
                  登録
                </Button>
              </fieldset>
            </Form>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default register;

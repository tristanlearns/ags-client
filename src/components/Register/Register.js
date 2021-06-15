import React from "react";
import { Container, Row, Col, Jumbotron, Card, CardBody } from "reactstrap";
import LoginForm from "./Register.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";
import Logo from "../../assets/hop.png";

const Register = (props) => {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col />
          <Col lg="8">
            <Jumbotron>
              <img alt="logo" src={Logo} />
              <Card>
                <CardBody>
                  <LoginForm />
                </CardBody>
              </Card>
            </Jumbotron>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
};

export default Register;
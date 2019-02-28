import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Pokemon from "./Pokemon";

export default class Layout extends Component {
  render() {
    const { appName, shouldRender } = this.props;
    console.log("I should render?", shouldRender);
    return (
      <Container>
        <Row>
          <Col>{appName}!</Col>
        </Row>
        <Row>
          <Col>
            {shouldRender ? (
              <Pokemon
                name="Slowbro"
                description="Really, really slow"
                imageURL="https://tse4.mm.bing.net/th?id=OIP.ioWmmNTyFBaNJ1v5T87iIQHaIn&pid=Api"
              />
            ) : (
              <React.Fragment>No Pokemon for sale</React.Fragment>
            )}
          </Col>
        </Row>
        <Row>
          <Col xs="auto">This app made by James Traver</Col>
        </Row>
      </Container>
    );
  }
}

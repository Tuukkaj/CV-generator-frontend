import React, { Component } from 'react';

import { Container, Col, Row } from 'react-bootstrap';

import Document from './Document';
import Ribbon from './Ribbon';

import './App.css';

class App extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          <Col xs={12}>
            <Ribbon />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Document />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

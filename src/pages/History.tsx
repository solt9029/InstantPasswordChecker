import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import PasswordHistory from '../containers/PasswordHistory';
import Container from '../styled/Container';

const Index: React.FC = () => (
  <>
    <Jumbotron>
      <Container center={1}>
        <h1>Password History</h1>
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <Col xs={12}>
          <PasswordHistory />
        </Col>
      </Row>
    </Container>
  </>
);

export default Index;

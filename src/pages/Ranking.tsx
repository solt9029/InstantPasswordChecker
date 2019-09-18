import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';
import PasswordRanking from '../containers/PasswordRanking';
import Container from '../styled/Container';

const Ranking: React.FC = () => (
  <>
    <Jumbotron>
      <Container center={1}>
        <h1>Password Ranking</h1>
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <Col xs={12}>
          <PasswordRanking />
        </Col>
      </Row>
    </Container>
  </>
);

export default Ranking;

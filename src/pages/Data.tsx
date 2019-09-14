import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DataList from '../containers/DataList';

const Index: React.FC = () => (
  <Container>
    <Row>
      <Col xs={12}>
        <DataList />
      </Col>
    </Row>
  </Container>
);

export default Index;

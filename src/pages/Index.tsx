import React from 'react';
import { Row, Col, Form, Jumbotron } from 'reactstrap';
import PasswordInput from '../containers/PasswordInput';
import Container from '../components/styled/Container';

const Index: React.FC = () => (
  <>
    <Jumbotron>
      <Container center={1}>
        <h1>Password Input</h1>
      </Container>
    </Jumbotron>
    <Container center={1}>
      <Row>
        <Col xs={12}>
          <Form>
            <PasswordInput />
          </Form>
        </Col>
      </Row>
    </Container>
  </>
);

export default Index;

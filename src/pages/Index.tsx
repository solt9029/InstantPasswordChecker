import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Jumbotron } from 'reactstrap';
import PasswordInput from '../containers/PasswordInput';

const StyledContainer = styled(Container)`
  text-align: center;
`;

const Index: React.FC = () => (
  <>
    <Jumbotron>
      <StyledContainer>
        <h1>Password Input</h1>
      </StyledContainer>
    </Jumbotron>
    <StyledContainer>
      <Row>
        <Col xs={12}>
          <Form>
            <PasswordInput />
          </Form>
        </Col>
      </Row>
    </StyledContainer>
  </>
);

export default Index;

import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form } from 'reactstrap';
import PasswordInput from '../components/PasswordInput';

const StyledContainer = styled(Container)`
  text-align: center;
`;

const Index: React.FC = () => (
  <StyledContainer>
    <Row>
      <Col xs={12}>
        <Form>
          <PasswordInput />
        </Form>
      </Col>
    </Row>
  </StyledContainer>
);

export default Index;

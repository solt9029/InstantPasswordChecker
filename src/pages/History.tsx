import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import PasswordHistory from '../containers/PasswordHistory';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  text-align: center;
`;

const Index: React.FC = () => (
  <>
    <Jumbotron>
      <StyledContainer>
        <h1>Password History</h1>
      </StyledContainer>
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

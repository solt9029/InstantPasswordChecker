import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'reactstrap';

const StyledContainer = styled(Container)`
  text-align: center;
`;

const Index: React.FC = () => {
  return (
    <StyledContainer>
      <Row>
        <Col xs={12}>index</Col>
      </Row>
    </StyledContainer>
  );
};

export default Index;

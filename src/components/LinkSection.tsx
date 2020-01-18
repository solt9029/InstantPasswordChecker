import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin-top: 30px;
`;

const LinkSection: React.FC = () => (
  <StyledDiv>
    <Link to="/ranking">Check Ranking</Link> /{' '}
    <Link to="/history">Check History</Link>
  </StyledDiv>
);

export default LinkSection;

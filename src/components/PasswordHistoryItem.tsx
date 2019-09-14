import React from 'react';
import { Card, CardBody } from 'reactstrap';
import styled from 'styled-components';

interface Props {
  children: JSX.Element[] | JSX.Element | string;
}

const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

const PasswordHistoryItem: React.SFC<Props> = ({ children }: Props) => (
  <StyledCard>
    <CardBody>{children}</CardBody>
  </StyledCard>
);

export default PasswordHistoryItem;

import React from 'react';
import { Card, CardBody } from 'reactstrap';
import styled from 'styled-components';

interface Props {
  history: string[];
}

const StyledCard = styled(Card)`
  margin-bottom: 10px;
`;

const DataList: React.SFC<Props> = ({ history }: Props) => (
  <>
    {history.map((value, index) => {
      return (
        <StyledCard key={index}>
          <CardBody>{value}</CardBody>
        </StyledCard>
      );
    })}
  </>
);

export default DataList;

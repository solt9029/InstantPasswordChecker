import styled from 'styled-components';
import { Container } from 'reactstrap';

export default styled(Container)`
  text-align: ${({ center }) => (center ? 'center' : 'left')};
`;

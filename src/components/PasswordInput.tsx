import React from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';

const StyledInput = styled(Input)`
  margin-top: 20px;
`;

interface Props {
  handleChange: any;
  password: string;
}

const PasswordInput: React.SFC<Props> = (props: Props) => {
  return (
    <input
      onChange={event => {
        props.handleChange(event.target.value);
      }}
      value={props.password}
      type="text"
      placeholder="password"
    />
  );
};

export default PasswordInput;

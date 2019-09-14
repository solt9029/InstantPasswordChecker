import React from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';

const StyledInput = styled(Input)`
  margin-top: 20px;
`;

interface Props {
  changeInput: any;
  inputValue: string;
}

const PasswordInput: React.SFC<Props> = (props: Props) => {
  return (
    <input
      onChange={event => {
        props.changeInput(event.target.value);
      }}
      value={props.inputValue}
      type="text"
      placeholder="password"
    />
  );
};

export default PasswordInput;

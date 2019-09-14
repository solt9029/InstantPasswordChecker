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

const PasswordInput: React.SFC<Props> = ({
  changeInput,
  inputValue,
}: Props) => (
  <StyledInput
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      changeInput(event.target.value);
    }}
    value={inputValue}
    type="text"
    placeholder="password"
  />
);

export default PasswordInput;

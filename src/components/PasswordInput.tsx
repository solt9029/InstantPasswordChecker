import React from 'react';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import reducer, { initialState } from '../reducers/app';
import * as actions from '../actions/app';
import useThunkReducer from 'react-hook-thunk-reducer';

const StyledInput = styled(Input)`
  margin-top: 20px;
`;

const Index: React.FC = () => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(actions.handleChange(event.currentTarget.value));
  };

  return (
    <StyledInput
      onChange={handleChange}
      value={state.password}
      type="text"
      placeholder="password"
    />
  );
};

export default Index;

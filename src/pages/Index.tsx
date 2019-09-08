import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Input } from 'reactstrap';
import { reducer, initialState } from '../reducer';
import { actions } from '../actions';
import useThunkReducer from 'react-hook-thunk-reducer';

const StyledContainer = styled(Container)`
  text-align: center;
`;

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
    <StyledContainer>
      <Row>
        <Col xs={12}>
          <Form>
            <StyledInput
              onChange={handleChange}
              value={state.password}
              type="text"
              placeholder="password"
            />
          </Form>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Index;

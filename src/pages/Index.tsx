import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Container, Row, Col, Form, Input } from 'reactstrap';

enum InputState {
  READY,
  ACTIVE,
  PAUSED,
}

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledInput = styled(Input)`
  margin-top: 20px;
`;

const delay = (time: number) =>
  new Promise(resolve => setTimeout(resolve, time));

const Index: React.FC = () => {
  const [password, setPassword] = useState('');
  const [inputState, setInputState] = useState(InputState.READY);
  const passwordRef = useRef(password);
  passwordRef.current = password;

  const handleChange = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (inputState === InputState.ACTIVE) {
      setPassword(event.currentTarget.value);
      return;
    }

    if (inputState === InputState.READY) {
      setInputState(InputState.ACTIVE);
      setPassword(event.currentTarget.value);

      await delay(500);
      setInputState(InputState.PAUSED);
      const prevPasswordsStr = localStorage.getItem('passwords');
      const prevPasswords = prevPasswordsStr ? prevPasswordsStr.split(',') : [];
      const passwords = [...prevPasswords, passwordRef.current];
      console.log(passwords);
      localStorage.setItem('passwords', passwords.toString());
      setPassword('');

      await delay(500);
      setInputState(InputState.READY);
    }
  };

  return (
    <StyledContainer>
      <Row>
        <Col xs={12}>
          <Form>
            <StyledInput
              inputState={inputState}
              onChange={handleChange}
              value={password}
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

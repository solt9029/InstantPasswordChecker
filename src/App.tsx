import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Index from './pages/Index';
import styled from 'styled-components';
import { Navbar } from 'reactstrap';

const StyledNavbar = styled(Navbar)`
  color: white;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <StyledNavbar color="dark">Instant Password Checker</StyledNavbar>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;

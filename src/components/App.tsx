import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Index from '../pages/Index';
import styled from 'styled-components';
import { Navbar } from 'reactstrap';
import History from '../pages/History';
import Ranking from '../pages/Ranking';

const StyledNavbar = styled(Navbar)`
  color: white;
`;

const App: React.FC = () => {
  return (
    <div className="App">
      <StyledNavbar color="dark">Instant Password Checker</StyledNavbar>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/history" component={History} />
        <Route exact path="/ranking" component={Ranking} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;

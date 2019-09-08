import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Index from './pages/Index';

const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Index} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;

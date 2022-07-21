// eslint-disable-next-line react-hooks/exhaustive-deps
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Starred from './components/pages/Starred';
import Show from './components/pages/Show';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/starred" component={Starred} />
      <Route exact path="/show/:id" component={Show} />
      <Route>
        <div>404 Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;

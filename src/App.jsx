// eslint-disable-next-line react-hooks/exhaustive-deps
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './components/pages/Home';
import Starred from './components/pages/Starred';
function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/starred" component={Starred} />
      <Route>
        <div>404 Not Found</div>
      </Route>
    </Switch>
  );
}

export default App;

// eslint-disable-next-line react-hooks/exhaustive-deps
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './components/pages/Home';
import Starred from './components/pages/Starred';
import Show from './components/pages/Show';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/starred" component={Starred} />
        <Route exact path="/show/:id" component={Show} />
        <Route>
          <div>404 Not Found</div>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;

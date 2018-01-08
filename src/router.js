import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Logistics from './routes/logistics';
import Cooperation from './routes/cooperation';
import Teams from './routes/Teams';
import MyCenter from './routes/MyCenter';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/logistics" exact component={Logistics} />
        <Route path="/cooperation" exact component={Cooperation} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/myCenter" exact component={MyCenter} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './Scenes/Home';
import App from './Scenes/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'));

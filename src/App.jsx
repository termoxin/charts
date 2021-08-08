import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';
import LoginPage from './features/LoginPage/LoginPage';
import MainPage from './features/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

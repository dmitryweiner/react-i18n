import React from 'react';
import {
  Route,
  Switch,
  Redirect, Link,
} from 'react-router-dom';
import './App.css';
import MainView from "./views/MainView";

function App() {
  return (
    <div className="App">
      <Link to="/main">Главная</Link>&nbsp;
      <Link to="/react-intl">react-intl</Link>&nbsp;
      <Switch>
        <Route path='/main' component={MainView} />
        <Redirect from='/' to='/main'/>
      </Switch>
    </div>
  );
}

export default App;

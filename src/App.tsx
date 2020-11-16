import React from 'react';
import {
  Route,
  Switch,
  Redirect, Link,
} from 'react-router-dom';
import './App.css';
import MainView from "./views/MainView";
import ReactIntlView from "./views/ReactIntlView";
import LinguiView from "./views/LinguiView";

function App() {
  return (
    <div className="App">
      <Link to="/main">Главная</Link>&nbsp;
      <Link to="/react-intl">react-intl</Link>&nbsp;
      <Link to="/lingui">lingui</Link>&nbsp;
      <Switch>
        <Route path='/main' component={MainView} />
        <Route path='/react-intl' component={ReactIntlView} />
        <Route path='/lingui' component={LinguiView} />
        <Redirect from='/' to='/main'/>
      </Switch>
    </div>
  );
}

export default App;

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
import {I18NextView} from "./views/I18NextView";

function App() {
  return (
    <div className="App">
      <Link to="/main">Главная</Link>&nbsp;
      <Link to="/react-intl">react-intl</Link>&nbsp;
      <Link to="/lingui">lingui</Link>&nbsp;
      <Link to="/i18next">i18next</Link>&nbsp;
      <Switch>
        <Route path='/main' component={MainView} />
        <Route path='/react-intl' component={ReactIntlView} />
        <Route path='/lingui' component={LinguiView} />
        <Route path='/i18next' component={I18NextView} />
        <Redirect from='/' to='/main'/>
      </Switch>
    </div>
  );
}

export default App;

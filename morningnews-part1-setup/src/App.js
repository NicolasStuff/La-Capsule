import React from 'react';
import './App.css';
import screenhome from './ScreenHome';
import screenmyarticles from './ScreenMyArticles';
import screensource from './ScreenSource';
import screenarticlesbysource from './ScreenArticlesBySource';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={screenhome} />
        <Route path="/screenmyarticles" component={screenmyarticles} />
        <Route path="/screensource" component={screensource} />
        <Route path="/screenarticlesbysource" component={screenarticlesbysource}/>
      </Switch>
    </Router>
    
  );
}

export default App;

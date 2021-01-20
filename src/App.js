import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Beers from './pages/Beers'
import  Beer  from './pages/Beer'
import Nav from './components/Nav'
import TypeOf from './pages/TypeOf'

import './App.scss';


 function App() {
  return (
    <div className="App">
      
      <Nav />
      <Switch>
     <Route exact path="/">
      <Home  />  
     </Route>
     <Route path="/Beers/">
       <Beers />
     </Route>
         <Route path="/Beer/:id"
         render={(routerProps) => <Beer {...routerProps} />}
      />
      <Route path="/TypeOf/">
        <TypeOf />
      </Route>
     </Switch>
    
    </div>
  );
}

export default App;

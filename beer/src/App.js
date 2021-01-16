import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Beers from './pages/Beers'
// import SingleBeer from './pages/SingleBeer'
import Nav from './components/Nav'
import TypeOf from './pages/TypeOf'
import './App.css';


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
         <Route path="/TypeOf/:id"
         render={(routerProps) => <TypeOf {...routerProps} />}
      />
     </Switch>
    </div>
  );
}

export default App;

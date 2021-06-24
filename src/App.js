import React from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Header/>
        <Switch>
          <Route path='/' exact>
            <Home/>
          </Route>
          <Route path='/details'>
            <Details/>
          </Route>
        </Switch> 
    </Router>
  )
}

export default App

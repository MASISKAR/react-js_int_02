import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/pages/ToDo/ToDo';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';
import NavMenu from './components/NavMenu/NavMenu';
import SingleTask from './components/pages/SingleTask/SingleTask';
import FlexBox from './demo/FlexBox';
import Block from './demo/Block';

import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

const blocks = [];
for(let i=1; i<=25; i++){
  blocks.push(<Block key={i}/>);
}


function App() {
  return (
    <div className="App">
    <FlexBox>
      {blocks}
    </FlexBox>
 



    <BrowserRouter>
    <NavMenu />

    <Switch>
      <Route 
       path='/'
       component = {ToDo}
       exact = {true}
      />
      <Route 
      path='/home'
      component = {ToDo}
      exact = {true}
      />
      <Route 
      path='/about'
      component = {About}
      exact = {true}
      />
      <Route 
      path='/contact'
      component = {Contact}
      exact
      />
      <Route 
      path='/task/:taskId'
      component = {SingleTask}
      exact
      />
      <Route 
      path='/not-found'
      component = {NotFound}
      exact
      />

      <Redirect to='/not-found'/>
      </Switch>


    </BrowserRouter>


    </div>
  );
}



export default App;

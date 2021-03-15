import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './components/pages/ToDo/ToDo';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import NotFound from './components/pages/NotFound/NotFound';
import NavMenu from './components/NavMenu/NavMenu';
import SingleTask from './components/pages/SingleTask/SingleTask';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import Spinner from './components/Spinner/Spinner';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {history} from './helpers/history';

const toastProps = {
  position: "bottom-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
  };

function AuthRoute({path, component}){

  return (
    <Route 
    path={path}
    component={component}
    exact = {true}
   />
  );


}


function App({loading, successMessage, errorMessage, isAuthenticated}) {
console.log(isAuthenticated)
  useEffect(()=>{
    
    if(successMessage){
      toast.success(successMessage, toastProps);
    }

    if(errorMessage){
      toast.error(errorMessage, toastProps);
    }
    
  }, [successMessage, errorMessage]);

  return (
    <div className="App">
    <Router history={history}>
    <NavMenu />

    <Switch>
    <AuthRoute 
    path='/'
    component = {ToDo}
    exact
   />
      <Route 
       path='/register'
       component = {Register}
       exact
      />
      <AuthRoute 
       path='/login'
       component = {Login}
       exact
      />
      <AuthRoute 
      path='/home'
      component = {ToDo}
      exact = {true}
      />
      <AuthRoute 
      path='/about'
      component = {About}
      exact = {true}
      />
      <AuthRoute 
      path='/contact'
      component = {Contact}
      exact
      />
      <AuthRoute 
      path='/task/:taskId'
      component = {SingleTask}
      exact
      />
      <AuthRoute 
      path='/not-found'
      component = {NotFound}
      exact
      />

      <Redirect to='/not-found'/>
      </Switch>


    </Router>
{ loading && <Spinner />}
<ToastContainer />

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      loading: state.loading,
      successMessage: state.successMessage,
      errorMessage: state.errorMessage,
      isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps)(App);

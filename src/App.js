import React from 'react';
import './App.css';
import { Counter } from './Counter';

function Greeting() {

  const name = "Alex";

  return (
    <div>
      <h4>Hello, I am a function component!!!</h4>
      <h3>Hello, I am {name}!</h3>
    </div>
  );
}

function Name(props) {
  return (
    <span>{props.name}</span>
  );
}

function Surname(props) {
  return (
    <span>{props.surname}</span>
  );
}


function User(props) {
  // let surname;
  // if(props.surname){
  //   surname = props.surname;
  // }
  // else{
  //   surname='no surname';
  // }

  return (
    <div >
      <h3>Hello, I am <Name name={props.name} /> <Surname surname={props.surname || 'no surname'} />, and I am {props.age}!</h3>
      <a href={props.href}>Go to Google</a>
    </div>

  );
}


function App() {

  return (
    <div className="App">
      <header className={"App-header"}>

        <Counter defaultValue={0}/>

        <Greeting />

        <User
          name='Alex'
          age={25}
          surname='Doe'
        />

        <User
          name='John'
          age={38}
          surname='Smith'
        />

        <User
          name='Sarah'
          age={46}
          href='https://google.com'
        />
      </header>
    </div>
  );
}



export default App;

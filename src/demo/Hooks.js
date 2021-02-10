import React, {useState, useEffect, useRef} from 'react';

export default function Hooks(){

   const [count, setCount] = useState(0);
//    const [surname, setSurname] = useState('');

const [values, setValues] = useState({
    name: '',
    surname: '',
    info: {
        address: 'Yerevan',
        age: 15
    }
});

const elemRef = useRef();
console.log('elemRef', elemRef)

//componentDidMount, componentDidUpdate
// useEffect(()=>{
//     console.log('useEffect');
// });

//componentDidMount, componentDidUpdate
// useEffect(()=>{
//     console.log('useEffect');
// }, [values, count]);

//componentDidMount
useEffect(()=>{
    console.log('useEffect');

    return ()=>{
        console.log('componentWillUnmount');
    }
}, []);


        return (
            <div>
        <input 
        type="text"
        value ={values.name}
        onChange = {(event)=> {
            setValues({
                ...values,
                name: event.target.value
            });
        }}
        />

        <input 
        ref = {elemRef}
        type="text"
        onChange = {(event)=> {
            setValues({
                ...values,
                info: {
                    ...values.info,
                    address: event.target.value
                }
            });
        }}
        />  

        <input 
        type="text"
        onChange = {(event)=> {
            setValues({
                ...values,
                surname: event.target.value
            });
        }}
        />  
        <button
        onClick = {()=>{
            console.log('name', values.name);
            console.log('surname', values.surname);

        }}
        >Click me</button>  
        
        
        <h1>{count}</h1>
        <button
        onClick = {()=>{
            setCount(count+1);
        }}
        >
        Change count
        </button>  
            </div>
        );

}
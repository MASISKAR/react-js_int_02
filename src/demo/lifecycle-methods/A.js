import React, {Component} from 'react';
import B from './B';

export default class A extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };
        
        console.log('A constructor');
    }

    componentDidMount(){
        console.log('A componentDidMount');
    }

handleChange = (event)=>{

    this.setState({
        value: event.target.value
    });
};

    render(){
        console.log('A render');

        return(
            <div>
            <h4>A component</h4>
            <input 
            type="text"
            value = {this.state.value}
            onChange = {this.handleChange}
            />
            
            <B/>
          
            </div>
        );
    }
}
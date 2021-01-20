import React, {Component} from 'react';
import C from './C';

export default class B extends Component{
    constructor(props){
        super(props);
        console.log('B constructor');
    }

    componentDidMount(){
        console.log('B componentDidMount');
    }

    render(){

        console.log('B render');
        return(
            <div>
            <h4>B component</h4>
                <C />
            </div>
        );
    }
}
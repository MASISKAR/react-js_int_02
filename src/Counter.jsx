import React, {Component} from 'react';


class Counter extends Component{
    constructor(props){
        super(props);
        // console.log('props', props)
        // this.value = 0;
        // this.handleClickPlus = this.handleClickPlus.bind(this);
        this.state = {
            value: 0,
            text: ''
        };
    }
    

    handleClickPlus = ()=>{
        // console.log('this', this)

        this.setState({
            value: this.state.value + 1,
            text: "It works"
        });
        // this.state.value++;
    }

    render(){

        // console.log(this.props);
        return(
            <div>
            Hello from Counter
            <p>The default value is {this.props.defaultValue}</p>

            <h3>{this.state.value}</h3>
            <button
            onClick= {()=> {
                this.setState({
                    value: this.state.value - 1
                });
            }}
            >
            count -
            </button>

            <button
            onClick= {this.handleClickPlus}
            >
            count +
            </button>

            <p>{this.state.text}</p>
            </div>
        );
    }
}

export  {Counter};



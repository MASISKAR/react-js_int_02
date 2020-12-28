import React, {Component} from 'react';
import styles from './todo.module.css';
import {Container, Row, Col} from 'react-bootstrap';

class ToDo extends Component{
state = {
    inputValue: '',
    tasks: []
};

handleChange = (event)=>{
    this.setState({
        inputValue: event.target.value
    });
};

addTask = ()=>{
const inputValue = this.state.inputValue.trim();

if(!inputValue){
  return;  
}

//variant 1
// const tasks = [...this.state.tasks];
// tasks.push(inputValue);

//variant 1
const tasks = [...this.state.tasks, inputValue];


this.setState({
    tasks,
    inputValue: ''
});
};

    render(){
        const {tasks, inputValue} = this.state;
  
        // const taskComponents = tasks.map((task, index)=>{
        //     return <li key={index} className={index === 2 ? styles.selected : null}>{task}</li>
        // });

        // const taskComponents = tasks.map((task, index)=>{
        //     return <li key={index} className={`${index === 2 ? styles.selected : ""} ${styles.task}`}>{task}</li>
        // });

        const taskComponents = tasks.map((task, index)=>{
            const classes = [styles.task];
            if(index === 2){
                classes.push(styles.selected);
            }
            return (
                <Col
                key={index}
                xs={2}
                sm={6}

                // lg={name==='Alex'? 10 : 6}
                >
                 <li  className={classes.join(' ')}>{task}</li>
                </Col>
            )
        });

        return (
            <div>
            <h2>ToDo List</h2>
            <input 
            type="text"
            value = {inputValue}
            onChange={this.handleChange}
            />
            <button
            onClick={this.addTask}
            >
            Add task
            </button>
            <ol>
                {taskComponents}
            </ol>
            <Container>
            <Row>
            {taskComponents}
            </Row>
            </Container>
            </div>
        );
    }
}

export default ToDo;
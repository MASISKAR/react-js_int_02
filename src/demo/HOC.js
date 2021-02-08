import React from 'react';
import styles from './styles.module.css';

export default function HOC(props){
console.log('props', props)

    return (
        <div className={styles.flex}>
        <h1>Higher order component</h1>
        <div>{props.children}</div>
        </div>
    )
}
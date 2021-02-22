import React from 'react';
import styles from './styles.module.css';

export default function FlexBox(props){
console.log('props', props)

    return (
        <div className={styles.flex}>
        {props.children}
        </div>
    )
}
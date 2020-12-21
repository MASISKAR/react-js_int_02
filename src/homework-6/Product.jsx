import React from 'react';
import Name from './Name';
import Price from './Price';
import Description from './Description';

class Product extends React.Component {

    render() {
const {name, price, description} = this.props;
        
        return (
            <>
                <Name value={name}/>
                <Price value={price}/>
                <Description value={description}/>
            </>
        );
    }
}

export default Product;
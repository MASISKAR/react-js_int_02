import React from 'react';

class Price extends React.Component{

    render(){
        const {value} = this.props;

        return(
            <span>{value}</span>
        );
    }
}

export default Price;
import React, { useState } from 'react';
import { connect } from 'react-redux';

function ChangeCount(props) {

    const [value, setValue] = useState('');


    return (
        <div>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                onClick={() => {
                    props.onSendValue(value);
                    setValue('');
                }}
            >
                Send value
</button>

            <button
                onClick={props.onChange}
            >
                Change count
        </button>
        </div>
    )
}


// const mapStateToProps = (state)=>{
//     return {
//         value: state.count
//     };

//     };

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: () => {
            dispatch({ type: 'CHANGE_COUNT' });
        },
        onSendValue: (val) => {
            dispatch({ type: 'SEND_MESSAGE', message: val });
        },
    };

};

export default connect(null, mapDispatchToProps)(ChangeCount);

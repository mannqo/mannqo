import React from 'react'; 
import connect from '../utils/connect';
import {
    addAction,
    subAction
} from '../store/actionCreators'

function About(props) { 
    return (
        <div>
            <hr />
            <h1>About</h1>
            <h2>当前计数：{props.counter}</h2>
            <button onClick={e => props.addNumber(1)}>1</button>
            <button onClick={e => props.subNumber(5)}>-5</button>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        counter: state.counter,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        addNumber: (num) => {
            dispatch(addAction(num));
        },
        subNumber: (num) => {
            dispatch(subAction(num));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(About)

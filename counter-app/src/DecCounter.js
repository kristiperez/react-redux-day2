import React, {useState} from 'react'
import './App.css';
import { connect } from 'react-redux';

function DecrementCounter(props) {
    const [counter, setCounter] = useState(0)

    const onDecButtonClicked = () => {
        props.onDecrement()
    }

    return (
        <div>
        <button onClick={() => onDecButtonClicked()}>Decrement</button>
        </div>
    );

}

const mapStateToProps = (state) => { //state is global state
    return {
        ctr: state.counter  // props.ctr in our component
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => dispatch({type: 'DEC_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecrementCounter);
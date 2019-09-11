import React, {useState} from 'react'
import './App.css';
import { connect } from 'react-redux';

function AddCounter(props) {
    const [counter, setCounter] = useState(0)

    const onAddButtonClicked = () => {
        props.onAddition()
    }

    return (
        <div>
        <button onClick={() => onAddButtonClicked()}>Add 10</button>
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
        onAddition: () => dispatch({type: 'ADD_COUNTER', value: 10})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCounter);
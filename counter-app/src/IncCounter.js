import React, {useState} from 'react'
import './App.css';
import { connect } from 'react-redux';


function IncrementCounter(props) {
    const [counter, setCounter] = useState(0)

    const onIncButtonClicked = () => {
        props.onIncrement()
    }
    //render using return
    return (
        <div>
        <button onClick={() => onIncButtonClicked()}>Increment</button>
        </div>
    );

}

const mapStateToProps = (state) => { //state is global state
    return {
        //ctr is an object you define
        ctr: state.counter  // props.ctr in our component
    }
}
//in order to increment, you must dispatch an action!
//mapDispatchToProps returns an object.onIncmentis an object
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch({type: 'INC_COUNTER'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncrementCounter);
import React, {useState} from 'react'
import './App.css';
import { connect } from 'react-redux';

function SubCounter(props) {
    const [counter, setCounter] = useState(0)

    const onSubButtonClicked = () => {
        props.onSubtraction()
    }

    return (
        <div>
        <button onClick={() => onSubButtonClicked()}>Subtract 10</button>
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
        onSubtraction: () => dispatch({type: 'SUB_COUNTER', value: 10})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubCounter);
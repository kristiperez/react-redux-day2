import React, {useState} from 'react'
import './App.css';
//allows component to connect to the redux store
import { connect } from 'react-redux';

function CounterNumber(props) {
    const [counter,setCounter] = useState(0)

    return (
        <div>{props.ctr}</div>
    );
}

const mapStateToProps = (state) => {
    return {
        ctr: state.counter //here you are defining a prop called ctr and setting its value to the global state, so now you can use props.ctr
    }
}
//connect is a function that returns a function
export default connect(mapStateToProps)(CounterNumber)
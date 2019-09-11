import React from 'react';
import './App.css';
import IncrementCounter from './IncCounter'
import DecrementCounter from './DecCounter'
import AddCounter from './AddCounter'
import SubCounter from './SubCounter'
import CounterNumber from './CounterNumber'



function App() {
  return (
      <div >
        <CounterNumber />
        <IncrementCounter />
        <DecrementCounter />
        <AddCounter />
        <SubCounter />
      </div>
  );
}

export default App;

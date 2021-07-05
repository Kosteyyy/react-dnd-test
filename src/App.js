import React from 'react';
import './App.css';

const MovableItem = () => { 
  return (
    <div className="movable-item">
      I like to move it
    </div>
  )
}

const FirstColumn = () => {
  return (
    <div className="column first-column">
      Column 1
      <MovableItem />
    </div>
  )
}

const SecondColumn = () => {
  return (
    <div className="column second-column">
      Column 2 
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <FirstColumn />
      <SecondColumn /> 
    </div>
  );
}

export default App;

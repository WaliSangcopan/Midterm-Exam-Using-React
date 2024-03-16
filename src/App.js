import React, { useState } from 'react';
import './Stack.css'; 

function Stack() {
  const [stack, setStack] = useState([]);
  const [newValue, setNewValue] = useState('');

  const handlePush = () => {
    if (!newValue.trim()) {
      console.warn('Input is empty!');
      console.warn('No input text!'); 
      return;
    }
    const newStack = [...stack, newValue];
    setStack(newStack);
    setNewValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      console.warn('Stack is empty!');
      return;
    }
    const newStack = stack.slice(0, stack.length - 1);
    setStack(newStack);
  };

  return (
    <div className="stack-container">
      <div className="input-container">
        <input
          type="text"
          className="input-field"
          placeholder="Enter a text or number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button className="push-button" onClick={handlePush}>Push</button>
        <button className="pop-button" onClick={handlePop}>Pop</button>
      </div>
      <div className="stack-content">
        {stack.map((item, index) => (
          <div key={index} className="stack-item">{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Stack;

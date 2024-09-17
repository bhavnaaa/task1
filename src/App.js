import React, { useState } from 'react';
import './App.css'; // Importing the CSS file

// Main App Component
function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">React Learning Task 1</h1>
      <SimpleJSX />
      <hr />
      <ArrayDisplay />
      <hr />
      <ShowHide />
      <hr />
      <EnableDisableButton />
      <hr />
      <TwoWayBinding />
      <hr />
      <AddChildComponent />
      <hr />
      <SumTwoNumbers />
    </div>
  );
}

// Task 1: Simple JSX
function SimpleJSX() {
  return (
  
   <h2 className="task-title">Hello, this is simple JSX!</h2>);
}

// Task 2: Display an Array of Records on Screen
function ArrayDisplay() {
  const records = ["Record 1", "Record 2", "Record 3"];
  return (
    <div className="task-container">
      <h2 className="task-title">Array of Records</h2>
      <ul className="record-list">
        {records.map((record, index) => (
          <li key={index} className="record-item">{record}</li>
        ))}
      </ul>
    </div>
  );
}

// Task 3: Show/Hide Element on Screen
function ShowHide() {
  const [show, setShow] = useState(true);

  return (
    <div className="task-container">
      <h2 className="task-title">Show/Hide Element</h2>
      <button className="task-button" onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Element
      </button>
      {show && <p className="element">This is a visible element</p>}
    </div>
  );
}

// Task 4: Enable/Disable a Button
function EnableDisableButton() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="task-container">
      <h2 className="task-title">Enable/Disable Button</h2>
      <button className="task-button" onClick={() => setEnabled(!enabled)}>
        {enabled ? "Disable" : "Enable"} Button
      </button>
      <button className="task-button" disabled={!enabled}>Button</button>
    </div>
  );
}

// Task 5: Two-Way Data Binding Using Textbox
function TwoWayBinding() {
  const [text, setText] = useState('');

  return (
    <div className="task-container">
      <h2 className="task-title">Two-Way Data Binding</h2>
      <input
        className="task-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="binding-output">{text}</p>
    </div>
  );
}

// Task 6: Dynamically Add Child Components
function AddChildComponent() {
  const [children, setChildren] = useState([]);

  const addChild = () => {
    setChildren([...children, "Child Component"]);
  };

  return (
    <div className="task-container">
      <h2 className="task-title">Dynamically Add Child Components</h2>
      <button className="task-button" onClick={addChild}>Add Child Component</button>
      {children.map((child, index) => (
        <p key={index} className="child-component">{child} {index + 1}</p>
      ))}
    </div>
  );
}

// Task 7: Sum of Two Numbers
function SumTwoNumbers() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div className="task-container">
      <h2 className="task-title">Sum of Two Numbers</h2>
      <input
        className="task-input"
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      />
      <input
        className="task-input"
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />
      <p className="sum-output">Sum: {num1 + num2}</p>
    </div>
  );
}

export default App;

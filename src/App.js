import React from "react";
import { useState } from "react";
import "./App.css";
function App() {

  let [num1, setNum1] = useState("");
  let [num2, setNum2] = useState("");
  let [ans, setans] = useState(0);
  let [err, setErr] = useState("");
  let [error, setError] = useState("");

  const addition = () => {
    if (num1 === ""|| num2 === "") {
      setans("")
      setError("Error"); setErr("value must not be empty")
    }
    else {
      setError(""); setErr("");
      setans(`Result: ${parseInt(num1) + parseInt(num2)}`);
    }
  }
  const subtraction = () => {
    if (num1 === "" || num2 === "") {
      setans("")
      setError("Error"); setErr("value must not be empty")
    }
    else {
      setError(""); setErr("");
      setans(`Result: ${parseInt(num1) - parseInt(num2)}`);
    }
  }
  const multiplication = () => {
    if (num1 === "" || num2 === "") {
      setans("")
      setError("Error"); setErr("value must not be empty")
    }
    else {
      setError(""); setErr("");
      setans(`Result: ${parseInt(num1) * parseInt(num2)}`);
    }
  }
  const division = () => {
    if (num1 === "" || num2 === "") {
      setans("")
      setError("Error"); setErr("value must not be empty")
    }
    else {
      setError("");
      setErr("");
      setans(`Result: ${parseInt(num1) / parseInt(num2)}`);
    }
  }
  return (
    <div className="container">
    <div className="calcul">
      <h1>React Calculator</h1>
      <input type="number" placeholder="Num 1" onChange={(e) => setNum1(e.target.value)}></input>
      <input type="number" placeholder="Num 2" onChange={(e) => setNum2(e.target.value)}></input>
      <div className="Buttons">
        <button onClick={addition}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
      </div> 
      <h3>{ans}</h3>
      <p>{error}<br></br>{err}</p>
      </div>
    </div>
  )
}


export default App;
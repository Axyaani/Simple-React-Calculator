import React from "react";
import { useState } from "react";
function Calculator() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const[sum, setSum] = useState('');
  function add(){
    const result = parseFloat(num1)+parseFloat(num2);
    setSum(result);
  }
  function sub(){
    const result = parseFloat(num1)-parseFloat(num2);
    setSum(result);
  }
  function mul(){
    const result = parseFloat(num1)*parseFloat(num2);
    setSum(result);
  }
  function div(){
    const result = parseFloat(num1)/parseFloat(num2);
    setSum(result);
  }


  return ( 
    <div>
      <div className="cal">
        <h1>Calculator</h1>
        <input value={num1} onChange={(e)=>setNum1(e.target.value)} type="text"placeholder="Enter first number" />
        <input value={num2} onChange={(e)=>setNum2(e.target.value)} type="text"  placeholder="Enter second number" />
       <div className="btn">
       <button onClick={add}>Add</button>
        <button onClick={sub}>Sub</button>
        <button onClick={mul}>Mul</button>
        <button onClick={div}>Div</button>
       </div>
       <p>result: {sum}</p>
      </div>

    </div>
   );
}

export default Calculator;
import React, { useState } from 'react';
import './App.css';


const pnumbers = [1,2,3]
const snumbers = [4,5,6]
const tnumbers = [7,8,9]
const operators = ['/','+','-','*']
const extranumbers = ['.',0]
function App() {
  const [result , setResult] = useState('')
  const clickHandler = (e)=>{
    if((operators.includes(e.target.value) && operators.includes(result[result.length - 1])) || (operators.includes(e.target.value) && result === '')){
      return
    }else{
      setResult(result.concat(e.target.value))
    }
  }
  const clearHandler = (e)=>{
    setResult('')
  }
  const ansHandler = () =>{
    if(operators.includes(result[result.length - 1])){
      return;
    }else{
      setResult(eval(result))
    }
  }
  
  return (
    <>
    <div className="container">
      <div className='calculator_box'>
        <p className="heading">Calculator</p>
      <div className="display">
        <span>{result? result : 0}</span>
      </div>
      <div className="operators">
        <button type='button' onClick={clickHandler} value='/' className='btn'>/</button>
        <button type='button' onClick={clickHandler} value='*' className='btn'>*</button>
        <button type='button' onClick={clickHandler} value='+' className='btn'>+</button>
        <button type='button' onClick={clickHandler} value='-' className='btn'>-</button>
        <button type='button' onClick={clearHandler} className='btn'>C</button>
        
      </div>
      <div className='numbers'>
        <div className='numbers-list'>
        {pnumbers.map((val,idx)=>{
          return <button type='button' onClick={clickHandler} value={val} className='btn-numbers' key={idx}>{val}</button>
        })}
        </div>
        <div className='numbers-list'>
        {snumbers.map((val,idx)=>{
          return <button type='button' onClick={clickHandler} value={val} className='btn-numbers' key={idx}>{val}</button>
        })}
        </div>
        <div className='numbers-list'>
        {tnumbers.map((val,idx)=>{
          return <button type='button' onClick={clickHandler} value={val} className='btn-numbers' key={idx}>{val}</button>
        })}
        </div>
        <div className='numbers-list'>
        {extranumbers.map((val,idx)=>{
          return <button type='button' onClick={clickHandler} value={val} className='btn-numbers' key={idx}>{val}</button>
        })}
        <button type='button' onClick={ansHandler} className='btn-numbers'>=</button>
        </div>
        
       
       
      </div>
      </div>
      
    </div>
    </>
  );
}

export default App;

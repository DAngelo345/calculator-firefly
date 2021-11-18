import './ExploreContainer.css';
import { useState } from 'react'

// https://www.youtube.com/watch?v=oiX-6Y2oGjI

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {

  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("")
  const ops = ['/', '*', '+', '-', '.'];

  // https://newbedev.com/typescript-ts7006-parameter-xxx-implicitly-has-an-any-type
  const updateCalc = (value: any) => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
    
  }

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++){
      digits.push(
        <button  onClick={() => updateCalc(i.toString())}key={i}>{i}</button>
      )
    }
    return digits
  }
  

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {

    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  }

  const clearAll = () => {
    
  }

  return (
    <div className="container">
       {/* <div className="menu-btn__burger"></div> */}
      <div className="calculator">
        <div className="display">
          <div className="dropbtn">
            <div className="dropdown-content">
              <div className="menu-btn__burger"></div>
              <div className="menu-btn__burger"></div>
              <div className="menu-btn__burger"></div>
            </div>
        </div>
          
       
          {result ? <span>({result})</span> : ''} 
       
           { calc || ""}
        </div>
        <div className="operators">
        {/* <button onClick={() => updateCalc('c÷')}>c</button> */}
          <button onClick={() => updateCalc('÷')}>÷</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLast}>delete</button>

        </div>
        <div className="digits">
          { createDigits() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>

          <button onClick={calculate}>=</button>
        </div>

      </div>
      
    </div>
  );
};

export default ExploreContainer;

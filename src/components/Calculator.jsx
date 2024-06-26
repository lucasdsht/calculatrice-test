import React, { useState } from 'react';

export const handleClick = (currentResult, value) => currentResult + value;
export const clear = () => "";
export const backspace = (currentResult) => currentResult.slice(0, -1);
export const calculate = (currentResult) => {
  try {
    return eval(currentResult).toString();
  } catch (err) {
    return "Error";
  }
};

const Calculator = () => {
  const [result, setResult] = useState("");

  return (
    <div className="calculator">
      <form>
        <input type="text" value={result} readOnly />
      </form>

      <div className="keypad">
        <button onClick={() => setResult(clear())} id="clear" data-testid="clear">Clear</button>
        <button onClick={() => setResult(backspace(result))} id="backspace" data-testid="backspace">C</button>
        <button onClick={() => setResult(handleClick(result, '/'))} data-testid="divide">&divide;</button>
        <button onClick={() => setResult(handleClick(result, '7'))} data-testid="num-7">7</button>
        <button onClick={() => setResult(handleClick(result, '8'))} data-testid="num-8">8</button>
        <button onClick={() => setResult(handleClick(result, '9'))} data-testid="num-9">9</button>
        <button onClick={() => setResult(handleClick(result, '*'))} data-testid="multiply">&times;</button>
        <button onClick={() => setResult(handleClick(result, '4'))} data-testid="num-4">4</button>
        <button onClick={() => setResult(handleClick(result, '5'))} data-testid="num-5">5</button>
        <button onClick={() => setResult(handleClick(result, '6'))} data-testid="num-6">6</button>
        <button onClick={() => setResult(handleClick(result, '-'))} data-testid="subtract">&ndash;</button>
        <button onClick={() => setResult(handleClick(result, '1'))} data-testid="num-1">1</button>
        <button onClick={() => setResult(handleClick(result, '2'))} data-testid="num-2">2</button>
        <button onClick={() => setResult(handleClick(result, '3'))} data-testid="num-3">3</button>
        <button onClick={() => setResult(handleClick(result, '+'))} data-testid="add">+</button>
        <button onClick={() => setResult(handleClick(result, '0'))} data-testid="num-0">0</button>
        <button onClick={() => setResult(handleClick(result, '.'))} data-testid="dot">.</button>
        <button onClick={() => setResult(calculate(result))} id="result" data-testid="equals">=</button>
      </div>
    </div>
  );
};

export default Calculator;


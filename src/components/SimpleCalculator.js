import CalculatorButton from './CalculatorButton';
import { evaluate } from 'mathjs';
import { useState } from 'react';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const operators = ['+', '-', '*', '/', '(', ')'];

const SimpleCalculator = () => {
  const [operation, setOperation] = useState('');

  const addToString = (value) => {
    setOperation(String(operation) + String(value));
  };

  const deleteCharacter = () => {
    setOperation(operation.slice(0, -1));
  };

  const clear = () => {
    setOperation('');
  };

  const calculate = () => {
    setOperation(String(evaluate(operation)));

    // Uncomment line below to test eval
    // setOperation(String(eval(operation)));
    
    // You can go crazy with it too
    // setOperation(String(eval(`function al(){alert("${String(evaluate(operation))}")} al();`)));
  };

  return (
    <>
      <input disabled value={operation} />
      
      <br />

      {numbers.map((num) => (
        <CalculatorButton
          value={num}
          onClick={() => addToString(num)}
          key={num}
        />
      ))}

      <br />

      {operators.map((operator) => (
        <CalculatorButton
          value={operator}
          onClick={() => addToString(operator)}
          key={operator}
        />
      ))}

      <br />

      <CalculatorButton onClick={deleteCharacter} value={'Delete'} />
      <CalculatorButton onClick={clear} value={'Clear'} />
      <CalculatorButton onClick={calculate} value={'='} />
    </>
  );
};

export default SimpleCalculator;

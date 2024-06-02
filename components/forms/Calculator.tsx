import { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';

const Calculator = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(expression);
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult('Invalid expression');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  return (
    <Container className="mx-auto flex max-w-md flex-col p-4">
  <section>
    <label htmlFor="expression" className="mb-2 block text-lg font-bold">
      Expression
    </label>
    <Row justify="center" className="mb-4">
      <Col>
        <input
          id="expression"
          type="text"
          className="w-full rounded border border-gray-300 p-2"
          value={expression}
          readOnly
        />
      </Col>
    </Row>
  </section>

  <section>
    <label htmlFor="result" className="mb-2 block text-lg font-bold">
      Result
    </label>
    <Row justify="center" className="mb-4">
      <Col>
        <input
          id="result"
          type="text"
          className="w-full rounded border border-gray-300 p-2"
          value={result}
          readOnly
        />
      </Col>
    </Row>
  </section>

  <section className="flex flex-wrap justify-center">
    {[
      ['1', '2', '3', '+'],
      ['4', '5', '6', '-'],
      ['7', '8', '9', '*'],
      ['0', '.', '=', '/'],
    ].map((row, rowIndex) => (
      <Row key={rowIndex} className="mb-2 flex">
        {row.map((buttonValue, colIndex) => (
          <button
            key={colIndex}
            className="hover:gray-blue-700 m-2 rounded bg-gray-500 p-4 font-bold text-white"
            style={{ minWidth: '200px' }}
            onClick={() => handleButtonClick(buttonValue)}
            aria-label={`Button ${buttonValue}`}
          >
            {buttonValue}
          </button>
        ))}
      </Row>
    ))}
  </section>

  <Row>
    <button
      className="w-full rounded  bg-pink-700 px-12 py-2 text-center text-base text-white transition hover:bg-pink-800"
      style={{ minWidth: '200px' }}
      onClick={() => handleButtonClick('C')}
      aria-label="Clear"
    >
      C
    </button>
  </Row>
</Container>

  );
};

export default Calculator;

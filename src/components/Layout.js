import React, { useState } from 'react';
import './Layout.css';
import Output from './output.js';
const Layout = (props) => {
  let [input, setInput] = useState('0');
  let [result, setResult] = useState('');
  const handleClick = (event) => {
    const value = event.target.value;
    if (value === '=') {
      if (input !== '') {
        let res = '';
        try {
        } catch (err) {
          setResult('Math Error');
        }
        if (res === undefined) {
          setResult('Math Error');
        } else {
          setResult(input + '=');
          setInput(res);
        }
      }
    } else if (value === 'C') {
      setResult('');
      setInput('0');
    } else if (value === 'DEL') {
      setResult('');
      setInput('0');
    }
  };

  return (
    <div className="frame">
      <div className="calculator">
        <Output />
        <img />
        <div className="keys">
          <input
            type="button"
            value={'C'}
            className="button clear"
            onClick={() => {}}
          ></input>

          <input
            type="button"
            value={'DEL'}
            className="button clear"
            onClick={() => {}}
          ></input>

          <input
            type="button"
            value={'%'}
            className="button operator"
            onClick={() => {}}
          ></input>

          <input
            type="button"
            value={'/'}
            className="button operator"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'7'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'8'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'9'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'*'}
            className="button operator"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'4'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'5'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'6'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'-'}
            className="button operator"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'1'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'2'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'3'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'+'}
            className="button operator"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'0'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'.'}
            className="button"
            onClick={handleClick}
          ></input>

          <input
            type="button"
            value={'='}
            className="button operator"
            onClick={handleClick}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Layout;
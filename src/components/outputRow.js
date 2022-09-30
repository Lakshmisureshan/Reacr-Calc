import React from 'react';
import './outputRow.css';
const OutputRow = (props) => {
  return (
    <div>
      <input
        type="text"
        readonly
        className="screen"
        style={props.textSize}
        value={props.value}
      ></input>
    </div>
  );
};
export default OutputRow;

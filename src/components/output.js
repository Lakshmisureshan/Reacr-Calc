import React from 'react';
import OutputRow from './outputRow';
const Output = (props) => {
  return (
    <div>
      <OutputRow value={props.answer} text-size={{ fontSize: '20px' }} />
      <OutputRow value={props.user} text-size={{ fontSize: '20px' }} />
    </div>
  );
};
export default Output;

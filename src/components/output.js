import React from 'react';
import OutputRow from './outputRow';
const Output = (props) => {
  return (
    <div>
      <OutputRow value={99} text-size={{ fontSize: '20px' }} />
      <OutputRow value={100} text-size={{ fontSize: '20px' }} />
    </div>
  );
};
export default Output;

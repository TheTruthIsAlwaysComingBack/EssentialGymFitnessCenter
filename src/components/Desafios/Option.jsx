import React from 'react';
import './Option.css';

const Option = ({ active, children }) => (
  <div className={`option ${active ? 'active' : ''}`}>{children}</div>
);

export default Option;

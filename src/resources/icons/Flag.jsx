import React from 'react';

const Flag = ({ svgSize }) => (
  <svg
    width={svgSize} height={svgSize}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    fill="#000000"
  >
    <g strokeWidth="0" />
    <g strokeLinecap="round" strokeLinejoin="round" />
    <g>
      <path d="M26.2 61.5c0 1.4-4.3 2.5-9.7 2.5c-5.4 0-9.7-1.1-9.7-2.5s4.3-2.5 9.7-2.5c5.3 0 9.7 1.2 9.7 2.5" fill="#ccc" />
      <path d="M56.1 17.7C54.2 16.8 23 2.1 18.4 0v39.5c4.5-2.1 35.7-16.8 37.6-17.7c1.6-.7 1.6-3.4.1-4.1" fill="#ed4c5c" />
      <path fill="#b6815d" d="M14.5 0h3.9v61.5h-3.9z" />
    </g>
  </svg>
)

export default Flag;  
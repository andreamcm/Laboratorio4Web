import React from 'react';

import './button.css';


const POSSIBLE_SIZES = [
  'small',
  'medium',
  'large',
];

const POSSIBLE_TAGS = [
  '0',
  '1', 
  '2',
  '3',
];

const Button = ({
  isTurnedOn = false,
  color = 'red',
  size = 'medium',
  tag = '0',
}) => (
  <div
    className={
      `
        button
        ${ POSSIBLE_SIZES.includes(size) ? size : '' }
        ${ POSSIBLE_TAGS.includes(tag) ? tag : '' }
        ${ color ? color : ''}
        ${ isTurnedOn ? 'on' : '' }
      `
    }
    style={{
      background: color,
    }}
  />
);


export default Button;
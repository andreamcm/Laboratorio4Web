import React from 'react';

import Button from '../Button';
import './simon.css';


const Simon = ({
  colors = ['green', 'red', 'yellow', 'blue'],
  size = 'large',
  turnedOnLight = 'green',
  tag = ['0', '1', '2', '3'],
}) => (
  <div className="simon">
    {
      colors.map(
        color => (
          <Button
            key={color}
            color={color}
            size={size}
            tag={tag}
            isTurnedOn={color === turnedOnLight}
          />
        )
      )
    }
  </div>
);


export default Simon;
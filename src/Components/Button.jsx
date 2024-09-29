// Button.js
import React from 'react';

function Button({ name, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
}

export default Button;

import React from 'react';

import "./search-box.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="field-container">
    <input 
      type="text" 
      className="input-filed" 
      placeholder={ placeholder } 
      onChange={ handleChange }/>
  </div>
);

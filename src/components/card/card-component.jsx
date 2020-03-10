import React from 'react';
import './card-component.css';

export const Card = props => (
  <div className="card">
    <img src={props.record.picture} alt="Profile"/>  
    <h2>{props.record.name}</h2>
    <p>{props.record.email}</p>
  </div>
)
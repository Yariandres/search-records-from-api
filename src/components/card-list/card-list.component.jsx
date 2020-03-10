import React from 'react';
import { Card } from '../card/card-component';

import "./card-list.css";

export const CardList = props => {
  return (
    <div className="card-container">     
      {props.records.map(record => ( 
        <Card key={record.id} record={record}/>
      ))}
    </div>    
  )
};
import React from 'react';
import CardMap from '../location-map/map-component';
import './card-component.css';

export const Card = props => (  

  <div className="card">
    <img src={props.record.picture} alt="Profile"/>  
    <h2>{props.record.name}</h2>
    <p>{props.record.email}</p>
    <p>Age: {props.record.age}</p>
    <p>Eye Color: {props.record.eyeColor}</p>
    <p>Total Balance: {props.record.balance}</p>
    <p>Company Name: {props.record.company}</p>
    <p>Phone: {props.record.phone}</p>
    <p>Bio: {props.record.about}</p>
    <p>Registered:  {props.record.registered}</p>
    <p>Location:</p>
    <CardMap 
      address={props.record.address} 
      lat={props.record.latitude} 
      long={props.record.longitude}/>

    <p>{console.log(props.record.balance)}</p>
  </div>
)
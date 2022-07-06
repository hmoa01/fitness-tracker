import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weight.css';

function Weight ({ weight, index, removeWeight }) {

  const date = new Date(weight.date)
  
  return (
    <div
      className="weight"
     
    >
      <span style={{ textDecoration: weight.isDone ? "line-through" : "" }}>{weight.text}</span>
      <div>
        <Button variant="outline-danger" onClick={() => removeWeight(index)}>✕</Button>
      </div>
      <span>{date.toLocaleDateString()}</span>
    </div>
  );
  
}

export default Weight;



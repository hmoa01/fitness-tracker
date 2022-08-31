import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weight.css';

function Weight ({ weight, index, removeWeight }) {

  const date = new Date(weight.date)
  
  return (
    <div className="weight"> 
      <span className='weight-span' style={{ textDecoration: weight.isDone ? "line-through" : "" }}>{weight.text} kg</span>
      <div>
        <Button className='closeBtn' variant="outline-danger" onClick={() => removeWeight(index)}>✕</Button>
      </div>
      <span className='date-span'>{date.toLocaleDateString()}</span>
    </div>
  );
  
}

export default Weight;



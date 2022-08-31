import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./FormWeight.css";

function FormWeight({ addWeight }) {
    const [value, setValue] = useState("");
   
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addWeight({
        text: value,
        date: new Date()
      });
      setValue("");
    };

    return (
      <Form className="form" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label><b>Add Weight</b></Form.Label>
        <Form.Control type="number" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add new weight" />
      </Form.Group>
      <Button className="form-button" variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
    );
}

export default FormWeight;
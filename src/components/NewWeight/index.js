import React, { useEffect, useState } from "react";
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weight from "../Weight";
import FormWeight from "../FormWeight";
import LineChart from "../Chart";
import moment from "moment";

function NewWeight() {

    const [weight, setWeight] = useState();

    useEffect(() => {
        const storedWeight = localStorage.getItem('weight')
        console.log(storedWeight, JSON.parse(storedWeight))
        if (storedWeight) {
            setWeight(JSON.parse(storedWeight))
        }
    }, [])

    useEffect(() => {
        if (weight) {
            localStorage.setItem('weight', JSON.stringify(weight))
            

        }
    }, [weight])
     
    const addWeight = (data) => {
        let newWeight = [data]

        if (weight != null) {
            newWeight = [...weight,  data ];
        }

        setWeight(newWeight);
    };
       
    const removeWeight = index => {
        const newWeight = [...weight];
        newWeight.splice(index, 1);
        setWeight(newWeight);
    };

    return (
        <div className="app">
            <div className="container">
                <h1 className="text-center mb-4">Fitness Tracker</h1>
                <FormWeight addWeight={addWeight} />
                <Row>
                    <Col>
                        <div>
                            {weight?.map((weight, index) => (
                                <Card key={index}>
                                    <Card.Body>
                                        <Weight
                                            index={index}
                                            weight={weight}
                                            removeWeight={removeWeight}
                                        />
                                    </Card.Body>
                                </Card>
                            ))}
                        </div>
                    </Col>

                    <Col>
                        <LineChart weights={weight?.map(a => a.text) ?? []} labels={weight?.map(a => moment(a.date)).format('DD-MM-YY').toLocalString() ?? []}/>
                    </Col>
                </Row>
                
            </div>
        </div>
    );
}

export default NewWeight;

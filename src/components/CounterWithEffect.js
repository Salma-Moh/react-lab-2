import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const CounterComponent = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(2);

    useEffect(() => {
        setCalculation(count * 2);
    }, [count]);

    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col xs={12} sm={6} md={4}>
                    <h1>Counter</h1>
                    <p>Count: {count}</p>
                    <p>Calculation: {calculation}</p>
                    <Button
                        variant="primary"
                        onClick={() => setCount(count + 1)}
                        className="mr-2"
                    >
                        +
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setCount(count - 1)}
                        disabled={count <= 0}
                        className="mx-2"
                        style={{ width: '37px' }}
                    >
                        -
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default CounterComponent;
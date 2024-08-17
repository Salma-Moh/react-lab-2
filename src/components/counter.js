import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    const reset = () => setCount(0);

    return (
        <Container className="text-center mt-5">
            <h1 style={{ color: 'brown', fontSize: '4rem' }}>{count}</h1>
            <Row className="justify-content-center">
                <Col xs="auto">
                    <Button
                        variant="outline-secondary"
                        className="mx-2"
                        style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}
                        onClick={increment}
                    >
                        +
                    </Button>
                </Col>
                <Col xs="auto">
                    <Button
                        variant="outline-secondary"
                        className="mx-2"
                        style={{ width: '50px', height: '50px', fontSize: '1.5rem' }}
                        onClick={decrement}
                    >
                        -
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3">
                <Col xs="auto">
                    <Button variant="outline-secondary" onClick={reset}>
                        Reset
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Counter;

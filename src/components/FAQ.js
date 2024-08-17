import React, { useState } from 'react';
import { Card, Button, Collapse, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <Card className="mb-3">
            <Card.Header className="d-flex justify-content-between align-items-center">
                <strong>{question}</strong>
                <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                    className="border rounded-circle"
                    style={{
                        fontSize: '1.5rem',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {open ? '-' : '+'}
                </Button>
            </Card.Header>
            <Collapse in={open}>
                <Card.Body>{answer}</Card.Body>
            </Collapse>
        </Card>
    );
}

function FAQ() {
    const faqData = [
        {
            question: 'Is this a good product?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum.',
        },
        {
            question: 'How much does it cost?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum.',
        },
    ];

    return (
        <Container className="mt-5 p-3" style={{ maxWidth: '600px', backgroundColor: '#0033cc', color: 'white', borderRadius: '8px' }}>
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>
            {faqData.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </Container>
    );
}

export default FAQ;

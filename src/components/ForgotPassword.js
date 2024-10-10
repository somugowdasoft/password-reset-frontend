import React, { useState } from 'react';
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';

//import baseURL
import api from "../api";

const ForgotPassword = () => {
    //set state
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    //handle submittion
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //ipi for forgot password
            const response = await api.post('/forgot-password', { email });
            //set success message
            setMessage(response.data.message);
            //set error msg
            setError('');
        } catch (error) {
            setError(error && error.response.data.message);
            setMessage('');
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100 justify-content-center">
                <Col md={6}>
                    <h2 className="text-center mb-4">Forgot Password</h2>
                    <Form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="info" type="submit" className="custom-button w-100">
                            Send Reset Link
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;

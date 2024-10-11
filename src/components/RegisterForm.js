import { useState } from "react";
import { Container, Form, Button, Alert, Row, Col } from 'react-bootstrap';
//router-dom
import { Link, useNavigate } from 'react-router-dom';
//api
import api from "../api";

const RegisterForm = () => {
    const [username, setUsername] = useState(''); // State for username input
    const [email, setEmail] = useState(''); // State for email input
    const [password, setPassword] = useState(''); // State for password input
    const [error, setError] = useState(''); // State for error messages
    const [message, setMessage] = useState(''); // State for success/error messages
    const navigate = useNavigate();

    // function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors
        setMessage(''); // Clear previous messages

        try {
            const res = await api.post("/registers", { username, email, password })

            setMessage(res.message || "Registration successfully.")
            setTimeout(() => navigate('/forgot-password'), 2000);
            setUsername("");
            setError("");
            setEmail("");
            setPassword("");
        } catch (error) {
            setError("Registration failed")
        }
    }

    // Rendering the component
    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100 justify-content-center">
                <Col md={6}>
                    <h2 className="text-center mb-4">Register Here</h2>
                    <Form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm bg-light">
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Name"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </Form.Group>
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
                        <Form.Group controlId="formEmail" className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="info" type="submit" className="custom-button w-100">
                            Send Reset Link
                        </Button>
                        <Link to="/forgot-password" >forgot password</Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}


export default RegisterForm;
import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useFirebase from "../../Hooks/useFirebase";
const Login = () => {
  const {
    handlePassword,
    handleEmail,
    handleLogin,
    handleResetPassword,
    signInWithGoogle,
    setError,
    setUser,
    error,
    email,
    pass,
    user,
  } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleLogin = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
        console.log("testing", result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const handleEmailPassLogin = (event) => {
    event.preventDefault();
    handleLogin(email, pass)
      .then((result) => {
        setError("");
        history.push(redirect_url);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <Container>
      <Row>
        <Col
          xs={11}
          md={4}
          className="mx-auto border border-3 p-5 m-5 rounded rounded-3"
        >
          <h3>Login</h3>
          <Form onSubmit={handleEmailPassLogin} className="w-xs-100">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Your Email"
                required
              ></Form.Control>

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Password at least 6 characters"
                required
              />
            </Form.Group>
            {
              <ul>
                <li>{error}</li>
              </ul>
            }
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
            <Button
              variant="outline-success"
              type="submit"
              onClick={handleEmailPassLogin}
            >
              Login
            </Button>
          </Form>
          <p className="mt-2">
            New to Medi-Ambulance ? <Link to="/signup">Create New Account</Link>
          </p>
          <p>
            <Link to="/resetPassword" onClick={handleResetPassword}>
              Forget Password ?
            </Link>
          </p>
          <div className="container mt-5 mx-auto text-center">
            ----------OR----------
            <br />
            <Button
              onClick={handleGoogleLogin}
              variant="outline-dark"
              type="submit"
            >
              <i className="fab fa-google"></i>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

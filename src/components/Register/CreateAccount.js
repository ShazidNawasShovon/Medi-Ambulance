import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link, useLocation, useHistory } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
const CreateAccount = () => {
  const {
    handlePassword,
    handleEmail,
    handleRegister,
    signInWithGoogle,
    handleNameChange,
    setUser,
    error,
  } = useFirebase();

  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  const handleGoogleSignup = () => {
    signInWithGoogle().then((result) => {
      setUser(result.user);
      history.push(redirect_url);
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
          <h3>Create New Account</h3>
          <Form onSubmit={handleRegister}>
            <Row>
              <Col>
                <Form.Control
                  onBlur={handleNameChange}
                  placeholder="Full Name"
                  required
                />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Enter email"
                required
              />
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
            <Button variant="outline-success" type="submit">
              Sign Up
            </Button>
          </Form>
          <p className="mt-2">
            <Link to="/login">Already Have an Account ?</Link>
          </p>
          <div className="container mt-3 mx-auto text-center">
            ----------OR----------
            <br />
            Sign Up with
            <br />
            <Button
              onClick={handleGoogleSignup}
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

export default CreateAccount;

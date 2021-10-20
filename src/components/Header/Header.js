import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from "../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              style={{ maxHeight: "100px" }}
              className="img-fluid"
              src={logo}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
            Home
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/allCapabilities">
                CAPABILITIES
              </Nav.Link>
              <Nav.Link as={Link} to="/advantages">
                ADVANTAGES
              </Nav.Link>
              <NavDropdown title="MORE" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/provider">
                  PROVIDER
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/contact">
                  CONTACT US
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/about">
                  ABOUT US
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              {user.email && (
                <span className="ms-3 my-auto text-white">
                  Sign in as:
                  <span className="fw-bold"> {user?.displayName}</span>
                </span>
              )}

              {user.email ? (
                <Button
                  onClick={logOut}
                  variant="outline-info "
                  className="ms-1"
                >
                  Log Out
                </Button>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login / Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

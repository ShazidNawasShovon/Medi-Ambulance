// import Button and other from bootstrap
import { Button } from "react-bootstrap";
import { Card, Col, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowData = (props) => {
  // Destructring Data
  const { key, name, details, img } = props.service;
  return (
    <div>
      <Col>
        <Card variant="w-50 mx-auto">
          <Card.Img
            variant="top p-3  "
            src={img}
            className="rounded rounded-3"
          />
          <Card.Body>
            <Card.Title>{name}</Card.Title>

            <Card.Text>{details}</Card.Text>

            <NavLink as={Link} to={`/capabilities/${key}`}>
              <Button variant="outline-danger">Details</Button>
            </NavLink>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default ShowData;

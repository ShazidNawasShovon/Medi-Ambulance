import React from "react";
import {
  Card,
  Col,
  Container,
  Image,
  NavLink,
  Row,
  Button,
} from "react-bootstrap";
import img3 from "../../images/about us/Ambulance-About-Us.jpg";
import img4 from "../../images/about us/About-US-Our-Mission-web.jpg";
import img5 from "../../images/about us/Ground-Ambulance-about-us-web.jpg";
import img6 from "../../images/about us/Ambulance-USA-Dispatch-Coordination.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Container>
        <Row>
          <Image src={img3} fluid rounded />
        </Row>
        <h2 className="text-center fw-bold  fs-1 bg-danger text-white">
          ABOUT-<span className="">US</span>{" "}
        </h2>

        <p>
          <span className="fw-bold">Medi-Ambulance</span>is a Transportation
          Management Organization (TMO) whose management has over 20 years of
          international fixed-wing, ground ambulance, and patient logistics
          experience. Our management hands-on experience involves planning,
          directing, supervising, and coordinating thousands of patient medical
          transports in six continents around the world.
        </p>
        <p>
          We serves companies and private clients around the world in
          identifying, arranging, and coordinating ground medical transportation
          for their patients and loved ones. We partner with medical
          transportation providers worldwide to help provide reliable
          transportation, high-quality coordination, and cost-effective
          services.
        </p>
        <span className="fw-bold">
          Our experience involves identifying, coordinating, and organizing
          scheduled medical transportation with a strong emphasis on
          aviation-related ground ambulance support and private clients.
        </span>
        <NavLink className="text-center my-5" as={Link} to="/contact">
          <Button variant="danger ">CONTACT US</Button>
        </NavLink>
      </Container>
      <Container className="my-4">
        <Row xs={1} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src={img4} />
              <Card.Body>
                <Card.Title>OUR MISSION</Card.Title>
                <Card.Text className="fw-bold">
                  We make sure our clients receive the best information and
                  service in a timely and efficient manner.
                </Card.Text>
                <Card.Text>
                  At Ambulance USA, we value loyalty, honesty, responsibility,
                  and dependability. Our team thrives for performance,
                  continuously striving for constant development and
                  improvement. We believe in effective communication as a way to
                  prevent errors, save time, and unnecessary spending.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img5} />
              <Card.Body>
                <Card.Title>OUR VISION</Card.Title>

                <Card.Text>
                  Our vision is to continue building a customer-oriented company
                  with specialized personnel that treats everyone like family
                  while providing personalized one-on-one service unparalleled
                  in the industry. We are focused on growing our presence to
                  become the premier Worldwide Ground Medical Transport
                  Management Service.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src={img6} />
              <Card.Body>
                <Card.Title>OUR GOAL</Card.Title>

                <Card.Text>
                  OUR GOAL We provide outstanding transportation coordination
                  services to offer your organization quicker, better, more
                  cost-efficient outcomes. Our goal is to make your organization
                  look good! We love what we do. Our passion is to make a
                  difference in EMS domestic and international transportation
                  support for you and your patients.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;

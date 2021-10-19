import React from "react";
import {
  Card,
  Col,
  Form,
  FormControl,
  Image,
  InputGroup,
  Button,
  ListGroup,
  Row,
} from "react-bootstrap";
import img14 from "../../images/providers/Ambulance-Providers.jpg";
const Providers = () => {
  return (
    <>
      <Row>
        <Image src={img14} fluid />
      </Row>
      <h2 className="text-center fw-bold  fs-1 bg-danger text-white ">
        GLOBAL PROVIDERS
      </h2>
      <Row className="g-4">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Text>
                Medi-Ambulance is a Transportation Management Organization (TMO)
                with over 20 years of experience in EMS and International
                Logistics, serving hundreds of customers worldwide in the
                identification, arrangement, and coordination of ground
                transportation. We partner with thousands of medical
                transportation providers throughout the world to help provide
                punctual, high-quality, and cost-effective services. Our
                expertise is in identifying, coordinating, and organizing
                private pay scheduled non-emergency medical transportation with
                a strong emphasis on aviation-related ground ambulance support.
                We serve our global clients through a worldwide network of
                quality ground transportation providers. We consistently look
                forward to expanding and enhancing our relationship with our
                partner transportation providers and clients worldwide. Our
                excellent communication, common sense, and practical system ease
                the frustrations of dealing with third-party payers by offering
                quick payment with claim submissions by email, fax, or old
                fashion mail. We value our Providers Partners’ time, quality,
                and loyalty by ensuring they receive all calls in their assigned
                coverage areas. Your organization will benefit from increased
                utilization and better communications through our EMS
                transportation specialist’s precise and efficient dispatch
                system. To become part of our global provider’s network and
                ensure our effectiveness to process your invoices quickly,
                please follow this instruction:
                <br />
                <ListGroup as="ol" numbered className="mt-4">
                  <ListGroup.Item as="li">
                    By entering your email below, and you will be able to
                    download a fillable PDF document with our{" "}
                    <span className="fw-bold">Provider Service Agreement.</span>{" "}
                    If different rates are applicable per each location, please
                    fill additional rate sheets as needed. Complete it, signed
                    and save it.
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    Include a copy of your current Liability Insurance.
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    For <span className="fw-bold">US Providers</span>, please
                    include a copy of your current W9 and for the Overseas
                    Providers, include a current{" "}
                    <span className="fw-bold">
                      copy of your service permit license certificate.
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
          <Form className="bg-danger mt-3 py-4 text-white">
            <h3>Ambulance Providers</h3>
            <p>
              Thank you for your interest in becoming an Ambulance USA Provider.
              Please enter your company information to instantly download the
              Provider Agreement Form.
            </p>
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                  Name
                </Form.Label>
                <Form.Control
                  className="mb-2"
                  id="inlineFormInput"
                  placeholder="Jane Doe"
                />
              </Col>
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                  User Name
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <FormControl
                    id="inlineFormInputGroup"
                    placeholder="Your Email"
                  />
                </InputGroup>
              </Col>
              <Col xs="auto">
                <Form.Check
                  type="checkbox"
                  id="autoSizingCheck"
                  className="mb-2"
                  label="Remember me"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit" className="mb-2">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col md={4}>
          <div className="container bg-light  rounded">
            <div>
              <h2 className="fw-bold">OUR CUSTOMERS INCLUDE</h2>
            </div>
            <div>
              <ul>
                <li>Domestic and International Air Ambulance Companies</li>
                <li>Private Pay Individuals &amp; Institutions</li>
                <li>Hospitals, Medical Centers</li>
                <li>Rehabilitation Centers</li>
                <li>Workers Compensation Management Companies</li>
                <li>International Liason and Medical Concierge</li>
                <li>Embassies and Consulates</li>
                <li>Repatriation Organizations</li>
                <li>International Medical Assistance Organizations</li>
                <li>Medical Tourism &amp; Travel Assistance</li>
                <li>Healthcare Provider Industries</li>
                <li>Organ Procurement Organizations</li>
                <li>Hospital Social Workers</li>
                <li>Discharge Planners, and Case Managers</li>
              </ul>
            </div>
            <div className="">
              <h2 className="fw-bold">COVERAGE</h2>
            </div>
            <div>
              <div>
                <ul>
                  <li>United States (most metro areas)</li>
                  <li>Canada</li>
                  <li>Mexico</li>
                  <li>Central America</li>
                  <li>The Caribbean</li>
                  <li>Latin America</li>
                  <li>Western Europe</li>
                  <li>Asia</li>
                  <li>Middle East</li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Providers;

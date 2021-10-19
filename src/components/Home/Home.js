import { Carousel, Container, Row } from "react-bootstrap";
import ShowData from "../ShowData/ShowData";
import img0 from "../../images/banner/img0.jpg";
import img1 from "../../images/banner/img1.jpg";
import img2 from "../../images/banner/img2.jpg";
import useServices from "../../Hooks/useServices";
const Home = () => {
  const { services } = useServices();
  return (
    <>
      <div className="container-fluid">
        <Carousel fade variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100  border rounded-5"
              src={img0}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>We have top team Member </h3>
              <p>We reach as soon as possible </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Second slide" />

            <Carousel.Caption>
              <h3>You will satisfy with our services</h3>
              <p>By using top driver our team reach your location in no time</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Third slide" />

            <Carousel.Caption>
              <h3>We have Helicopter Services</h3>
              <p>
                If you are in un reachable location. Then we can support you
                with helicopter
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h2 className="text-center fw-bold  fs-1 bg-danger text-white">
          Medi-Ambulance
        </h2>
      </div>
      <Container>
        <h2 className="text-center fw-bold my-3 fs-1  ">
          Welcome to <span className="text-success">Medi-</span>
          <span className="text-danger">Ambulance</span>{" "}
        </h2>
        <p className="text-center">
          <span className="fw-bold ">
            Patient care begins with the right care at the right time with the
            right medical transport.
          </span>
          <span>
            We pay strict attention to detail and make all the arrangements
            required for each patient’s transfer so that our clients,
            caregivers, and family members have peace of mind. Our team has a
            great sense of urgency and work diligently to solve any of your
            patient medical transportation challenges.
          </span>
          <span className="fw-bold ">
            Ambulance transportation is our passion;{" "}
          </span>
          <span>
            {" "}
            We think outside the box by continuously improving ways to manage
            healthcare transportation properly. Whether you have a MICU critical
            patient transport or a routine schedule patient’s discharge, we are
            steadfastly patient focused and customer-centered.
          </span>
        </p>
        <br />
      </Container>
      <Container>
        <div className="card mb-3 w-100">
          <div className="row g-0 p-2">
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  When you schedule transport with us, our EMS specialists will
                  follow through. Our professional and courteous coordinators
                  will provide you a cost estimate with medical transport
                  availability. Then, we will carefully monitor and keep you
                  informed on the status of your case. We are here to ease the
                  workload on your team’s task so you and your team can focus on
                  what is most efficient for your clients and your business. We
                  use effective communication as a tool to prevent mistakes,
                  save time, and unnecessary expenses. We strive to perform each
                  task to the best of our abilities to offer practical service
                  solutions with professional experience and reliable service.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://ambulanceusa.com/wp-content/uploads/2021/06/contact-us-home-web.jpg"
                className="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
          <div className="row g-0 p-2">
            <div className="col-md-4">
              <img
                src="https://ambulanceusa.com/wp-content/uploads/2021/06/Ground-Ambulance-Support-home.jpg"
                className="img-fluid rounded"
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="container bg-light  rounded">
                  <div>
                    <h2 className="fw-bold">OUR CUSTOMERS INCLUDE</h2>
                  </div>
                  <div>
                    <ul>
                      <li>
                        Domestic and International Air Ambulance Companies
                      </li>
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
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 p-2">
            <div className="col-md-8">
              <div className="card-body">
                <p className="card-text">
                  International Coverage including but not limited to the United
                  States (most metro areas), Canada, Mexico, Central America,
                  the Caribbean, South America, Western Europe, Australia, Asia,
                  and the Middle East. When you schedule transport with us, our
                  EMS specialists will follow through. Our professional and
                  courteous coordinators will provide you a cost estimate with
                  medical transport availability. Then, we will carefully
                  monitor and keep you informed on the status of your case. We
                  are here to ease the workload on your team’s task so you and
                  your team can focus on what is most efficient for your clients
                  and your business.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src="https://ambulanceusa.com/wp-content/uploads/2021/06/worldwide-providers-home-.jpg"
                className="img-fluid rounded"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="text-center fw-bold mt-4 fs-1 text-info">
          Top-<span className="text-warning">Services</span>{" "}
        </h2>
        <Row xs={1} md={3} className="g-4" style={{ margin: "20px" }}>
          {services.slice(0, 6).map((service) => (
            <ShowData key={service.key} service={service}></ShowData>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Home;

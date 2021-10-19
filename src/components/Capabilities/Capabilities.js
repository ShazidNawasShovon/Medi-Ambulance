import { Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useServices from "../../Hooks/useServices";
import img15 from "../../images/capabilities/Ambulance-Capabilities-top-image.jpg";
const Capabilities = () => {
  // using useParam for dynamic data
  const { serviceId } = useParams();
  const { services } = useServices();
  let serviceToShow = services?.filter((s) => s.key === serviceId);
  console.log(serviceToShow);
  return (
    <>
      <Container>
        <Row>
          <Image src={img15} fluid rounded />
        </Row>
        <h2 className="text-center fw-bold  fs-1 bg-danger text-white">
          OUR CAPABILITY
        </h2>
        <Container>
          <div className="card mb-3 w-100">
            <div className="row g-0 p-2">
              <div className="col-md-4">
                <img
                  src={serviceToShow[0]?.img}
                  className="img-fluid rounded"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{serviceToShow[0]?.name}</h5>
                  <p className="card-text">{serviceToShow[0]?.fullDetails}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Capabilities;

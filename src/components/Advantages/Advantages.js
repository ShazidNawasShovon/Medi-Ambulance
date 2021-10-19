import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import img9 from "../../images/advantages/Ambulance-Advantages.jpg";
import img10 from "../../images/advantages/Advantages.jpg";
import img11 from "../../images/advantages/Expert-supervision.jpg";
import img12 from "../../images/advantages/requesta-quote.jpg";
import img13 from "../../images/advantages/Ambulance-Call-Center.jpg";

const Advantages = () => {
  return (
    <>
      <Row>
        <Image src={img9} fluid />
      </Row>
      <h2 className="text-center fw-bold  fs-1 bg-danger text-white ">
        WHY YOU ARE GETTING <span className=""> THE BEST</span>{" "}
      </h2>

      <Container>
        <div class="card mb-3 w-100">
          <div class="row g-0 p-2">
            <div class="col-md-4">
              <img src={img10} class="img-fluid rounded" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">ADVANTAGES</h5>
                <p class="card-text">
                  You are dealing with a service that is designed to provide
                  quality medical transportation management, giving you many
                  advantages over other providers. Always one step ahead, we
                  make your planning fast, efficient, and economical. We treat
                  each client like family and spend the time and resources
                  necessary to match the best solution for each case scenario.
                  We have combined the following advantages to maintaining a
                  higher quality medical transport service.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 w-100">
          <div class="row g-0 p-2">
            <div class="col-md-4">
              <img src={img11} class="img-fluid rounded" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">EXPERT SUPERVISION</h5>
                <p class="card-text">
                  An EMS specialist lead case manager is assigned to each
                  transport to monitor it from start to finish. We have 20 years
                  of experience in successfully transporting patients worldwide.
                  The years of experience in EMS include Aviation, Ground
                  Support, the healthcare industry, and international logistics
                  allows us to ease clients
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3 w-100">
          <div class="row g-0 p-2">
            <div class="col-md-4">
              <img src={img13} class="img-fluid rounded" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  EMS TRANSPORT SPECIALIST – WE’RE JUST ONE CLICK AWAY
                </h5>
                <p class="card-text">
                  When you call us, you speak directly with a highly trained EMS
                  transport specialist, not a call taker or a front desk. Our
                  team is qualified to understand your needs immediately and
                  find the precise transport solutions for your organization. We
                  mastered the complex variables that go into identifying,
                  coordinating, and organizing flawless EMS transports. This
                  advantage allows us to ease unexpected financial surprises to
                  our clients through good communications, a careful preventive
                  approach, and an organized planning process. We offer
                  customized solutions specifically for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container>
        <h2 className="text-center fw-bold  fs-1 bg-danger text-white my-4 ">
          LIVE AIRCRAFT MONITORING
        </h2>
        <p>
          By tracking your aircraft tail number online, we monitor the complex
          variables of coordination details to ease your team’s work. From
          adjusting landing times to handling the account payable of your ground
          support. We reduce the tasks for your team, so they can perform the
          tasks that make the difference to your clients and business.
        </p>
        <div class="card mb-3 w-100">
          <div class="row g-0 p-2">
            <div class="col-md-4">
              <img src={img12} class="img-fluid rounded" alt="" />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  REQUEST A QUOTE AND SCHEDULE A TRANSPORT
                </h5>
                <p class="card-text">
                  You can request a quote the way you like it, by phone, online,
                  or to our secure email with an effective system that is
                  specifically designed to meet and exceed healthcare privacy
                  and security standards. Our policy is continuously improving
                  for Ambulance USA to remain a premier service that is
                  time-efficient and is cost-effective.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Advantages;

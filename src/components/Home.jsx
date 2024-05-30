import React from "react";
import cover from "../images/doctor.jpeg";
import Consultations from "./Consultations";

export default function Home() {
  return (
    <div className="mt-5 homePage">
      <div className="homeDetails-section1 ">
        <div>
          <img src={cover} alt="doctor" />
        </div>

        <div>
          <h3 style={{ color: "white" }}>
            Consult an Expert
            <br />
            Easily at Home
          </h3>
          <p style={{ color: "white" }}>
            Better Results, Less Costs, Less Time
          </p>
        </div>

        <div>
          <button className="consult-btn" style={{ marginTop: "3rem" }}>
            Consult an Expert
          </button>
        </div>
      </div>

      <div className="home-div">
        <div className="viewSpecialists mt-3">
          <div>
            <h6 style={{ marginLeft: "20px" }}>Specialists</h6>
          </div>
          <div>
            <h6 className="viewAll">view all</h6>
          </div>
        </div>

        <div className="homeDetails-section2">
          <div className="specialists">
            <div className="d-flex">
              <div className="icon">
                <i className="fa fa-stethoscope" aria-hidden="true"></i>
              </div>
              <div className="amount">$100</div>
            </div>
            <h6>Medicine</h6>
            <span className="span-text">20 Doctors</span>
          </div>

          <div className="specialists">
            <div className="d-flex">
              <div className="icon">
                <i className="fa fa-child" aria-hidden="true"></i>
              </div>
              <div className="amount">$100</div>
            </div>
            <h6>Paediatrics</h6>
            <span className="span-text">24 Doctors</span>
          </div>

          <div className="specialists">
            <div className="d-flex">
              <div className="icon">
                <i className="fa fa-heartbeat" aria-hidden="true"></i>
              </div>
              <div className="amount">$100</div>
            </div>

            <h6>Cardiology</h6>
            <span className="span-text">18 Doctors</span>
          </div>

          <div className="specialists">
            <div className="d-flex">
              <div className="icon">
                <i className="fa fa-female" aria-hidden="true"></i>
              </div>
              <div className="amount">$100</div>
            </div>
            <h6>Gynaecology</h6>
            <span className="span-text">30 Doctors</span>
          </div>

          <div className="specialists">
            <div className="d-flex">
              <div className="icon">
                <i className="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div className="amount">$100</div>
            </div>
            <h6>Eye Care</h6>
            <span className="span-text">20 Doctors</span>
          </div>

          <div className="specialists">
            <div className="d-flex">
              <div className="icon">
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
              </div>
              <div className="amount">$100</div>
            </div>
            <h6>Psychiatry</h6>
            <span className="span-text">28 Doctors</span>
          </div>
        </div>
      </div>

      <div className="homeDetails-section3">
        <div className="flex-items">
          <div>
            <h6>Available tests</h6>
          </div>

          <div>
            <h6 className="viewAll">View all</h6>
          </div>
        </div>

        <div className="tests">
          <div className="tests-available">
            <h4>CBC</h4>
            <p>Available</p>

            <div className="flex-tests">
              <div>
                <p>
                  From: <span className="spanicon">$10.00</span>
                </p>
              </div>
              <div>
                <i
                  className="fa fa-plus-circle fonticon"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>

          <div className="tests-available">
            <h4>Urinalysis</h4>
            <p>Available</p>

            <div className="flex-tests">
              <div>
                <p>
                  From: <span className="spanicon">$5.00</span>
                </p>
              </div>
              <div>
                <i class="fa fa-plus-circle fonticon" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="tests-available">
            <h4>Imaging</h4>
            <p>Available</p>
            <div className="flex-tests">
              <div>
                <p>
                  From: <span className="spanicon">$15.00</span>
                </p>
              </div>
              <div>
                <i class="fa fa-plus-circle fonticon" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          <div className="tests-available">
            <h4>Biopsy</h4>
            <p>Available</p>

            <div className="flex-tests">
              <div>
                <p>
                  From: <span className="spanicon">$12.00</span>
                </p>
              </div>
              <div>
                <i class="fa fa-plus-circle fonticon" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Consultations />
    </div>
  );
}

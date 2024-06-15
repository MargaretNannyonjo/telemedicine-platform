import React from "react";
import cover from "../images/doctor.jpeg";
import doctorPatient from "../images/doctor-patient.jpeg";
import review from "../images/review.jpg";
import confidential from "../images/confidential.jpeg";
import Consultations from "./Consultations";
import Footer from "./Footer";

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

      <div
        className="everyHour col-16"
        style={{
          textAlign: "center",
          display: "block",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <h1 className="headline-lg">24/7 urgent care near you</h1>
        <p className="fs-4" style={{ marginBottom: "30px" }}>
          VirtualCare offers 24/7 urgent and everyday care. Get matched with a
          top doctor for your overall health visit. <br />
          <span style={{ textDecoration: "underline" }}>
            We accept most insurance,
          </span>
          {""} which means your visit could be free.
          <a href="#how-it-works">
            <button className="insurance-btn">
              How it works{""} <i class="fa-solid fa-arrow-down"></i>
            </button>
          </a>
        </p>
      </div>
      <div className="care">
        <div className="careAvailable">
          <div className="getCare">
            <h4>Everyday Care</h4>
            <ul>
              <li>Acne</li>
              <li>respiratory diseases</li>
              <li>Hair loss</li>
              <li>Skin care, rashes</li>
              <li>Dental care</li>
              <li>Eczema</li>
              <li>And more</li>
            </ul>
            <h4 className="card-footer">
              Everyday Care <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </h4>
          </div>

          <div className="getCare">
            <h4>Online Therapy</h4>
            <ul>
              <li>PTSD</li>
              <li>Depression</li>
              <li>Grief & loss</li>
              <li>Stress</li>
              <li>Anxiety</li>
              <li>Postpartum</li>
              <li>And more</li>
            </ul>
            <h4 className="card-footer">
              Online Therapy{" "}
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </h4>
          </div>
          <div className="getCare">
            <h4>Online psychiatry</h4>
            <ul>
              <li>Initial Diagnosis</li>
              <li>Medication management</li>
              <li>Online prescription</li>
              <li>Mood disorders</li>
              <li>Psychiatry evaluations</li>
              <li>Adjustment disoders</li>
              <li>And more</li>
            </ul>
            <h4 className="card-footer">
              Online Psychiatry{" "}
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </h4>
          </div>
          <div className="getCare">
            <h4>Urgent Care</h4>
            <ul>
              <li>Sinus infection</li>
              <li>UTIs</li>
              <li>Cough and Fever</li>
              <li>Cold and Flu</li>
              <li>Nausea and Vomiting</li>
              <li>First aid</li>
              <li>And more</li>
            </ul>
            <h4 className="card-footer">
              Urgent Care <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </h4>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h4 style={{ color: "#004a7d" }}>We've got you covered!</h4>
          <h2 className="headline-lg">
            See a doctor with or without insurance
          </h2>
          <p>We partner with plans to serve everyone across the country</p>
          <p>
            Your telehealth visit may be as low as{" "}
            <span style={{ fontWeight: "bold" }}>$0/visit</span>
          </p>
        </div>
        <button className="insurance-btn">
          Find out if we accept your insurance
        </button>
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

      <div className="why-virtualCare">
        <h2 className="headline-lg" style={{ textAlign: "center" }}>
          Why VirtualCare
        </h2>
        <div className="reasons">
          <div className="reasonCard">
            <img src={review} alt="rating" />
            <h5>4.9/5 rating</h5>
            <p>
              Patient satisfaction guaranteed, with friendly staff, short wait
              periods and personalized attention.
            </p>
          </div>

          <div className="reasonCard">
            <img src={doctorPatient} alt="doctor-patient" />
            <h5>24/7 Availability</h5>
            <p>
              Top notch telehealth services, delivering high quality healthcare
              at the comfort of your home, anytime, day or night
            </p>
          </div>
          <div className="reasonCard">
            <img src={confidential} alt="confidential" />
            <h5>100% Confidential</h5>
            <p>
              {" "}
              Patient information is kept completely confidential and secure,
              adhering to the highest standards of data protection
            </p>
          </div>
        </div>

        <div className="how-it-works" id="how-it-works">
          <h3>HOW IT WORKS</h3>

          <h6>
            {" "}
            <span className="number">1</span> Create an account
          </h6>

          <p>
            Create your account on the website or in the app. It's free, there
            is no obligation or membership, and you don't need to enter a credit
            card. Follow the prompts to enter your health insurance or employer
            to see if your visit is covered. However, insurance is not
            necessary.
          </p>

          <h6>
            {""}
            <span className="number">2</span>
            See the next available provider, or schedule your appointment.
          </h6>
          <p>
            Select the reason for your visit and answer a few questions to
            provide the doctor with some context. See a doctor in minutes or
            schedule your therapy or psychiatry visit. You must be signed in to
            your account either on the app (phone) or through our website
            (computer) to visit with a provider.
          </p>

          <h6>
            {""}
            <span className="number">3</span>
            Start your live virtual visit.
          </h6>

          <p>
            Meet with one of our board-certified doctors, nurse practitioners,
            or clinician who will diagnose your symptoms and offer a custom
            treatment plan. If needed, you can get prescriptions sent to you.
          </p>
          <button className="insurance-btn">Get started now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import doc from "../images/doc.jpeg";
import femDoc from "../images/femaleDoc.jpeg";
import fem from "../images/fem.jpeg";
import male from "../images/male.jpeg";

export default function Consultations() {
  return (
    <div className="consultations">
      <div className="consult-div">
        <div>
          <h5>Featured consultations</h5>
        </div>
        <div>
          <h6 className="viewAll">View all</h6>
        </div>
      </div>

      <div className="doctors">
        <div className="doctor">
          <div>
            <img src={doc} alt="doc" />
          </div>

          <div>
            <h5>Dr. Joel</h5>
            <p>General Physian - PG Hospital Dhaka</p>
            <p className="consult-p">
              Consult
              <i class="fa fa-arrow-right arrow" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div className="doctor">
          <div>
            <img src={femDoc} alt="doc" />
          </div>

          <div>
            <h5>Dr. Venny</h5>
            <p>Paediatrician - Sky Hospital Ram</p>
            <p className="consult-p">
              Consult
              <i class="fa fa-arrow-right arrow" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div className="doctor">
          <div>
            <img src={fem} alt="doc" />
          </div>

          <div>
            <h5>Dr. Lina</h5>
            <p>General Physian - Fair Hospital Dhaka</p>
            <p className="consult-p">
              Consult
              <i class="fa fa-arrow-right arrow" aria-hidden="true"></i>
            </p>
          </div>
        </div>

        <div className="doctor">
          <div>
            <img src={male} alt="doc" />
          </div>

          <div>
            <h5>Dr. Fuhad</h5>
            <p>Gynaecologist - Case Hospital Miami</p>
            <p className="consult-p">
              Consult
              <i class="fa fa-arrow-right arrow" aria-hidden="true"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

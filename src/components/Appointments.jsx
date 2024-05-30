import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import TimePicker from "react-time-picker";
import Select from "react-select";
import { auth } from "../firebaseConfig";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const timezones = [
  { value: "UTC", label: "UTC" },
  { value: "GMT", label: "GMT" },
  { value: "EST", label: "Eastern Time (US & Canada)" },
  { value: "PST", label: "Pacific Time (US & Canada)" },
  // Add more timezones as needed
];

export default function Appointments() {
  const [user] = useAuthState(auth);
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("10:00");
  const [timezone, setTimezone] = useState(timezones[0]);
  const [name, setName] = useState("");
  const [appointmentType, setAppointmentType] = useState("");
  const [appointmentScheduled, setAppointmentScheduled] = useState(false);

  const onChangeDate = (newDate) => {
    setDate(newDate);
  };

  const onChangeTime = (newTime) => {
    setTime(newTime);
  };

  const onChangeTimezone = (selectedTimezone) => {
    setTimezone(selectedTimezone);
  };

  const scheduleAppointment = () => {
    // Schedule the appointment (e.g., send data to the server)
    console.log("Appointment scheduled:", {
      name,
      appointmentType,
      date,
      time,
      timezone,
    });
    setAppointmentScheduled(true);
  };

  const cancelAppointment = () => {
    setAppointmentScheduled(false);
    setName("");
    setAppointmentType("");
    setDate(new Date());
    setTime("10:00");
    setTimezone(timezones[0]);
  };

  return (
    <div className="appointments" style={{ margin: "2rem" }}>
      {user ? (
        <div>
          <h4>Appointments</h4>

          <div className="upcoming-appointments">
            <h6>Upcoming appointments</h6>
            {appointmentScheduled ? (
              <div>
                <p>
                  Hi 👋 <em>{name}</em>, You have a {appointmentType}{" "}
                  appointment on {date.toDateString()} at {time}{" "}
                  {timezone.label}.
                </p>
                <button onClick={cancelAppointment} className="submit">
                  Cancel Appointment
                </button>
              </div>
            ) : (
              <p>You have no scheduled appointments at the moment.</p>
            )}
          </div>

          <div className="scheduleAppointment">
            <h6>Schedule an appointment</h6>
            <div className="appointment-calendar">
              <div className="appointment-form">
                <h4 style={{ textAlign: "center" }}>
                  Virtual Care Appointment Form
                </h4>

                <div className="inputs">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      className="form-control"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="eg: example@gmail.com"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(000) 000-0000"
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <h6>How would you like to speak with a practitioner?</h6>
                    <div className="d-flex">
                      <label className="radio-label">
                        <input
                          type="radio"
                          value="video"
                          id="video"
                          name="care"
                        />
                        Video
                      </label>
                      <label className="radio-label">
                        <input
                          type="radio"
                          value="phone"
                          id="phone"
                          name="care"
                        />
                        Phone
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <h6>Select an appointment type</h6>
                    <div className="d-flex flex-wrap justify-content-between">
                      {[
                        "Gynaecology",
                        "General medicine",
                        "Paediatrics",
                        "Psychiatry",
                        "Follow up",
                      ].map((type, index) => (
                        <label key={index} className="radio-label p-2">
                          <input
                            type="radio"
                            name="appointmentType"
                            value={type.toLowerCase()}
                            onChange={(e) => setAppointmentType(e.target.value)}
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Upload files necessary for the session</label>
                    <input type="file" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Select Date</label>
                    <Calendar
                      onChange={onChangeDate}
                      value={date}
                      className="form-control calendar"
                    />
                    <p>
                      Selected date: {date.toDateString()} at {time}{" "}
                      {timezone.label}
                    </p>
                  </div>

                  <div className="form-group">
                    <label>Select Time</label>
                    <TimePicker
                      onChange={onChangeTime}
                      value={time}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label>Select Timezone</label>
                    <Select
                      value={timezone}
                      onChange={onChangeTimezone}
                      options={timezones}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="flexCare d-flex justify-content-around">
                  <div>
                    <input type="checkbox" name="virtualCare" />
                    <label style={{ marginLeft: "8px", fontWeight: "bold" }}>
                      Virtual Care Consultation
                    </label>
                  </div>
                  <div>
                    <p style={{ fontWeight: "bold" }}>$ 50.00</p>
                  </div>
                </div>
                <p style={{ marginTop: 0 }}>
                  Consultation Fee for Virtual Care Services
                </p>

                <div className="form-group">
                  <input type="checkbox" name="agree" required />
                  <label style={{ marginLeft: "8px" }}>
                    I agree to the <Link to="/terms">terms and conditions</Link>
                  </label>
                </div>
                <button className="submit" onClick={scheduleAppointment}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="noUser">
          <h6>
            <Link to="/login">Login </Link> to schedule an appointment
          </h6>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      )}
    </div>
  );
}

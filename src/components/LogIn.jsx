import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      toast(error.code, { type: "error" });
    }
  };

  return (
    <div
      className="boarder p-3  mx-auto bg-secondary-subtle mt-5"
      style={{ maxWidth: 400 }}
    >
      <h4>Log In</h4>
      <div className="form-group">
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <button
          className="btn btn-primary"
          onClick={handleLogIn}
          style={{ margin: "0 auto", display: "block" }}
        >
          Log In
        </button>
      </div>
    </div>
  );
}

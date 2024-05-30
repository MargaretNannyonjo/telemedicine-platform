import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            VirtualCare
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/appointments">
                  Appointments
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/question">
                  Ask a Question
                </Link>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <span className="nav-link">
                      Logged In as: {user.displayName || user.email}
                    </span>
                  </li>
                  <li className="nav-item">
                    <button
                      className="btn btn-primary nav-link"
                      onClick={() => signOut(auth)}
                      title="Log out"
                    >
                      Log out
                    </button>
                  </li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="logIn" title="log in">
                        Log In
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="register"
                        title="sign up"
                      >
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import Appointments from "./components/Appointments";
import AskQuestion from "./components/AskQuestion";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/question" element={<AskQuestion />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

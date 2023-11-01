import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/landing-page/:username" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

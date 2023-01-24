import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Dashboard from "./pages/DashboardPage/Dashboard";


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

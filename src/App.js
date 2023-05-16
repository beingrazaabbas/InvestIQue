import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Dashboard from "./components/Dashboard";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import RegisterPage from "./components/RegisterPage";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<RegisterPage />} path="/register" />
          <Route element={<Dashboard />} path="/dashboard" />
          <Route element={<Profile />} path="/Profile" />
          <Route element={<Services />} path="/Services" />
          <Route element={<AboutUs />} path="/AboutUs" />
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

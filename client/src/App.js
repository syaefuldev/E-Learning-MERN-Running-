import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IsLogin } from "./auth/IsLogin";
import Navbar from "./components/section/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <IsLogin>
              <Dashboard />
            </IsLogin>
          }
        />
        <Route
          path="/settings"
          element={
            <IsLogin>
              <Settings />
            </IsLogin>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <IsLogin>
              <Profile />
            </IsLogin>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

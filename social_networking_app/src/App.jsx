import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login_page";
import RegisterPage from "./components/register_page";
import Home_page from "./components/home_page";
import Protectedroute from "./protected_route/protectedroute";
import ProfilePage from "./components/profile";
import Header from "./components/header";
// import Sidebar from './components/sidebar';
import { Myprovider } from "./context/createContext";

const App = () => {
  return (
    <Router>
      <Myprovider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/home"
            element={
              <Protectedroute>
                <Home_page />
              </Protectedroute>
            }
          />
          <Route
            path="/profile"
            element={
              <Protectedroute>
                <Header></Header>
                <ProfilePage></ProfilePage>
              </Protectedroute>
            }
          />
        </Routes>
      </Myprovider>
    </Router>
  );
};

export default App;

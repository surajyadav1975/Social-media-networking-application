import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/login_page";
import RegisterPage from "./components/register_page";
import Home_page from "./components/home_page";
import Protectedroute from "./protected_route/protectedroute";
import ProfilePage from "./components/profile";
import Header from "./components/header";
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
                <div
                className="fixed-background bg-gray-100 [&::-webkit-scrollbar]:w-0"
                >
                 <div className="w-[calc(100vw-1rem)] ">
                    <Header />
                  </div>
                  <ProfilePage></ProfilePage>
                </div>
              </Protectedroute>
            }
          />
        </Routes>
      </Myprovider>
    </Router>
  );
};

export default App;

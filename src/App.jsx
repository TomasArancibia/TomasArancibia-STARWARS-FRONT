import { useState } from "react";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import LandingPage from "./views/LandingPage.jsx";
import Navbar from "./components/Navbar.jsx";
import ShowPlanet from "./views/ShowPlanet.jsx";
import ShowPeople from "./views/ShowPeople.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/details/:id" element={<ShowPeople/>} />
          <Route path="/planet_details/:id" element={<ShowPlanet />} />
         
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);

